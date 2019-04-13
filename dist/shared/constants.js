class Constants {
    // Making constructor private to mimic static class.
    constructor() { }
}
// The constructor of a worker needs a path to the worker javascript file.
// This is the to the file from the browser's perspective.
Constants.PathToWorkerFileForBrowser = "../dist/worker/worker.js";
export { Constants };
//# sourceMappingURL=constants.js.map