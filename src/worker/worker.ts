/**
 * Workers cannot currently use modules, so keeping the logic simple.
 * Chromium bug traking using modules in web workers: https://bugs.chromium.org/p/chromium/issues/detail?id=680046
 */

 importScripts("../demo/testFuntions.js");


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
    const messageForOrchestrator = {
        jobId: jobId,
        result: returnValue
    };

    postMessage(messageForOrchestrator);
}

// Listening to messages from the orchestrator.
onmessage = OnMessageFromOrchestrator;