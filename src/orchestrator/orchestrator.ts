import {Job} from "../shared/job.js";


class Orchestrator {

    /**
     * Constructor is private to mimic static class as static classes aren't available in typescript.
     */
    private constructor(){}

    public static ScheduleJob(job: Job): void {
        // TODO: figure out what to do with this path to worker hardcode.
        let worker = new Worker("../dist/worker/worker.js");
        worker.postMessage("send message");
        //worker.terminate();
    }

    private static CreateWebWorker(): Worker {
     //   let worker = new Worker(Orchestrator)
        return null;
    }
}

export {Orchestrator};