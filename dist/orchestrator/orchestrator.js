import { Constants } from "../shared/constants.js";
class Orchestrator {
    /**
     * Constructor is private to mimic static class as static classes aren't available in typescript.
     */
    constructor() { }
    static ScheduleJob(job) {
        const worker = Orchestrator.CreateWebWorker();
        worker.postMessage(Orchestrator.ConvertJobToMessageForWorker(job));
    }
    static ConvertJobToMessageForWorker(job) {
        let messageForWorker = {};
        messageForWorker["functionName"] = job.FunctionName;
        messageForWorker["functionArguments"] = job.FunctionArguments;
        return messageForWorker;
    }
    static CreateWebWorker() {
        // TODO: Change worker to use modules once modules are supported for web workers: https://bugs.chromium.org/p/chromium/issues/detail?id=680046.
        let worker = new Worker(Constants.PathToWorkerFileForBrowser);
        worker.onerror = Orchestrator.OnWorkerError;
        worker.onmessage = Orchestrator.OnWorkerMessage;
        return worker;
    }
    static OnWorkerMessage(event) {
        // TODO: tests that the this is atually a reference to the worker.
        this.terminate();
        console.log("worker responded with a message.");
    }
    static OnWorkerError(event) {
        console.log("there was an error in the worker.");
    }
}
export { Orchestrator };
//# sourceMappingURL=orchestrator.js.map