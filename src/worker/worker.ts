/**
 * Workers cannot currently use modules, so keeping the logic simple.
 * Chromium bug traking using modules in web workers: https://bugs.chromium.org/p/chromium/issues/detail?id=680046
 * The import scripts function loads the specified javascript file (similar to a script tag).
 * The file being imported contains functions definitions for the jobs the orchestrator wants the worker to run.
 * The worker receives a message from the orchestrator containing a mapping to the function the worker should invoke.
 * The worker will run this function and send a message back to the orchestrator with the result.
 */
 importScripts("../shared/testFunctions.js");


function OnMessageFromOrchestrator(event: MessageEvent) : any {
    // Finding the funciton in the global namespace. The function must be in one of the importScripts javascript files.
    const functionName:string = event.data.functionName;
    const functionReference:Function = this[functionName];
    if (functionReference == null) {
        throw Error("Could not find the function in the worker namespace");
    }

    // Invoking the function with the passed arguments.
    const functionArguments:any[] = event.data.functionArguments;
    const returnValue = functionReference.apply(null, functionArguments);

    const jobId = event.data.jobId;
    // TODO: once workers support modules, this should be re-written to use a common message format.
    const messageForOrchestrator = {
        jobId: jobId,
        result: returnValue
    };

    postMessage(messageForOrchestrator);
}

// Listening to messages from the orchestrator.
onmessage = OnMessageFromOrchestrator;