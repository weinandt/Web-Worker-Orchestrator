/// <reference path="jasmine.d.ts" />
import { Job } from "../shared/job.js";
import { Orchestrator } from "../orchestrator/orchestrator.js";
describe('End to End Demos', function () {
    // The "done" function must be passed so it can be invoked in the callback.
    // See https://jasmine.github.io/tutorials/async#callbacks for more info.
    it('Simple Job', function (done) {
        function TestCallBackFuction(result) {
            console.log("in the callback");
            expect(result).toBe(25);
            //necessary for jasmine to know async functions have completed
            done();
        }
        // "Multiply" is the name of a function in shared/testFunctions.ts.
        // The worker will import testFunctions.js, find the Multiply function by name,
        // and execute the Multiply function with the two args passed. TestCallBackFunction
        // will then be invoked.
        let myJob = new Job("Multiply", [5, 5], TestCallBackFuction);
        Orchestrator.ScheduleJob(myJob);
    });
});
//# sourceMappingURL=test.js.map