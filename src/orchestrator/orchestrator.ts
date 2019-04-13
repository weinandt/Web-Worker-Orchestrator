import {Job} from "../shared/job.js";
import {Constants} from "../shared/constants.js"

class Orchestrator {

    /**
     * Constructor is private to mimic static class as static classes aren't available in typescript.
     */
    private constructor(){}

    public static ScheduleJob(job: Job): void {
        const worker:Worker = Orchestrator.CreateWebWorker();
        worker.postMessage(Orchestrator.ConvertJobToMessageForWorker(job));
    }

    private static ConvertJobToMessageForWorker(job: Job): any{
        let messageForWorker = {};
        messageForWorker["functionName"] = job.FunctionName;
        messageForWorker["functionArguments"] = job.FunctionArguments;

        return messageForWorker;
    }

    private static CreateWebWorker(): Worker {
        // TODO: Change worker to use modules once modules are supported for web workers: https://bugs.chromium.org/p/chromium/issues/detail?id=680046.
        let worker = new Worker(Constants.PathToWorkerFileForBrowser);
        worker.onerror = Orchestrator.OnWorkerError;
        worker.onmessage = Orchestrator.OnWorkerMessage;
        
        return worker;
    }

    private static OnWorkerMessage(this: Worker, event: MessageEvent): any {
        // TODO: tests that the this is atually a reference to the worker.
        this.terminate();
        console.log("worker responded with a message.");
    }

    private static OnWorkerError(event: ErrorEvent): any {
        console.log("there was an error in the worker.");
    }
}

export {Orchestrator};