class Constants {
    // The constructor of a worker needs a path to the worker javascript file.
    // This is the to the file from the browser's perspective.
    public static PathToWorkerFileForBrowser = "../dist/worker/worker.js";

    // Making constructor private to mimic static class.
    private constructor(){}
}

export {Constants}