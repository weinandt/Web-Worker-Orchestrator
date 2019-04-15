class Constants {
    // Making constructor private to mimic static class.
    constructor() { }
}
// The constructor of a worker needs a path to the worker javascript file.
// This is the to the file from the browser's perspective.
Constants.PathToWorkerFileForBrowser = "../demo/worker/worker.js";
/**
 * Determines the maximum number of workers which will be used to execute jobs. If there are more jobs
 * than the workers available, the jobs will be queued until the workers have finished the first
 * scheduled jobs.
 */
Constants.MaxNumberOfWorkers = 5;
export { Constants };
//# sourceMappingURL=constants.js.map