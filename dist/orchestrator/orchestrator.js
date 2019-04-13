class Orchestrator {
    /**
     * Constructor is private to mimic static class as static classes aren't available in typescript.
     */
    constructor() { }
    static ScheduleJob(job) {
        let worker = new Worker("../dist/worker/worker.js");
        worker.postMessage("send message");
        //worker.terminate();
    }
    static CreateWebWorker() {
        //   let worker = new Worker(Orchestrator)
        return null;
    }
}
export { Orchestrator };
//# sourceMappingURL=orchestrator.js.map