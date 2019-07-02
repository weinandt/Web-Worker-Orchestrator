/// <reference path="jasmine.d.ts" />
import {JobResult} from "../shared/jobResult.js";
import {Orchestrator} from "../orchestrator/orchestrator.js"

describe('End to End Demos', function() {

    // The "done" function must be passed so it can be invoked in the callback.
    // See https://jasmine.github.io/tutorials/async#callbacks for more info.
    it('Simple Job', async function() {
        // "Multiply" is the name of a function in shared/testFunctions.ts.
        // The worker will import testFunctions.js, find the Multiply function by name,
        // and execute the Multiply function with the two args passed.

        // TODO: if the job fails what happens to the value of await. Will probably need a catch clause.
        const jobResult: JobResult<number> = await Orchestrator.ScheduleJob<number>("Multiply", [5, 5]);
        expect(jobResult.Result).toBe(25);
    });
  });