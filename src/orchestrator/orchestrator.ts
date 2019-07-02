import { Job } from "../shared/job.js";
import {JobResult} from "../shared/jobResult.js";
import { Constants } from "../shared/constants.js"

class Orchestrator {
    private static JobQueue: Job<any>[] = [];
    private static NumberOfActiveWorkers = 0;
    private static CurrentlyExecutingJobMap: Map<number,Job<any>> = new Map();
    private static JobIdGenerator = function* () {
        let index = 0;
        while (true) {
            yield index++;
        }
    }();

    /**
     * Constructor is private to mimic static class as static classes aren't available in typescript.
     */
    private constructor() { }

    public static async ScheduleJob<ReturnType>(functionName: string, functionArguments: any[]): Promise<JobResult<ReturnType>> {
        // TODO null check.

        // Creating a Job for the worker.
        const job: Job<ReturnType> = new Job<ReturnType>(functionName, functionArguments);

        // Deciding if the job should be queued  becuase the workers are busy.
        if (Orchestrator.NumberOfActiveWorkers == Constants.MaxNumberOfWorkers) {
            Orchestrator.JobQueue.push(job);
            return job.JobPromise;
        }

        // Creating a new worker and running the job on the worker.
        const worker: Worker = Orchestrator.CreateWebWorker();
        Orchestrator.SetUpAndSendJobToWorker(worker, job);
        
        return job.JobPromise;
    }

    private static SetUpAndSendJobToWorker(worker:Worker, job:Job<any>) {
        job.JobId = Orchestrator.JobIdGenerator.next().value;
        worker.postMessage(Orchestrator.ConvertJobToMessageForWorker(job));
        Orchestrator.CurrentlyExecutingJobMap.set(job.JobId, job);
    }

    /**
     * Converts a job object to an object the worker can understand. This is necessary for two reasons:
     * 1. Removes the callback function for the job which wouldn't serialize for postMessage.
     * 2. Workers don't currently support module imports, so the worker can't import the Job class.
     * @param job Job which will be serialized into a format the worker can understand.
     */
    private static ConvertJobToMessageForWorker(job: Job<any>): any {
        let messageForWorker = {};
        messageForWorker["functionName"] = job.FunctionName;
        messageForWorker["functionArguments"] = job.FunctionArguments;
        messageForWorker["jobId"] = job.JobId;

        return messageForWorker;
    }

    private static CreateWebWorker(): Worker {
        // TODO: Change worker to use modules once modules are supported for web workers: https://bugs.chromium.org/p/chromium/issues/detail?id=680046.
        let worker = new Worker(Constants.PathToWorkerFileForBrowser);
        worker.onerror = Orchestrator.OnWorkerError;
        worker.onmessage = Orchestrator.OnWorkerMessage;
        Orchestrator.NumberOfActiveWorkers++;

        return worker;
    }

    private static OnWorkerMessage(this: Worker, event: MessageEvent): any {
        // Deciding if there is more work for the worker to take on.
        if(Orchestrator.JobQueue.length > 0) {
            const nextJob = Orchestrator.JobQueue.shift();
            Orchestrator.SetUpAndSendJobToWorker(this, nextJob);
        } else {
            // Killing the worker becuase there is no more work to do.
            this.terminate();
        }
        
        // Reading the job information and removing the job from the currently executing map.
        const result:any = event.data["result"];
        const jobId:number = event.data["jobId"];
        const executedJob: Job<any> = Orchestrator.CurrentlyExecutingJobMap.get(jobId);
        Orchestrator.CurrentlyExecutingJobMap.delete(jobId);

        // TODO: handle errors.
        // TODO: figure out what to do so you don't have to use the "any" type here.
        const jobResult: JobResult<any> = new JobResult(true, result);
        executedJob.CompleteJob(jobResult);
    }

    private static OnWorkerError(event: ErrorEvent): any {
        throw "there was an error in the worker. " + event.message;
    }
}

export { Orchestrator };