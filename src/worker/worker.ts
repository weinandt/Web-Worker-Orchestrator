import {Job} from "../shared/job.js"

function OnMessageFromOrchestrator(event: MessageEvent) : any {
    console.log("recieved message from ochestrator");
}

// Listening to messages from the orchestrator.
onmessage = OnMessageFromOrchestrator;