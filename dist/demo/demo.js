import { Job } from "../shared/job.js";
import { Orchestrator } from "../orchestrator/orchestrator.js";
function TestCallBackFuction(result) {
    console.log("in the callback");
}
let myJob = new Job("LogTwoParameters", ["asdf", 5], TestCallBackFuction);
Orchestrator.ScheduleJob(myJob);
//# sourceMappingURL=demo.js.map