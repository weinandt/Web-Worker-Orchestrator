/// <reference path="jasmine.d.ts" />
import {Job} from "../shared/job.js";
import {Orchestrator} from "../orchestrator/orchestrator.js"

function TestCallBackFuction(result: any): void {
    console.log("in the callback");
}

describe('firstTestBlock', function() {
    it('firstTest', function() {
        let myJob = new Job("LogTwoParameters", ["asdf", 5], TestCallBackFuction);
        Orchestrator.ScheduleJob(myJob);
    });
  });