class Job {
    constructor(functionName, functionArguments) {
        this.functionName = functionName;
        this.functionArguments = functionArguments;
        this.jobPromise = new Promise((resolve, reject) => {
            this.successResolver = resolve;
            this.errorRejector = reject;
        });
    }
    get FunctionArguments() {
        return this.functionArguments;
    }
    get FunctionName() {
        return this.functionName;
    }
    set JobId(jobId) {
        this.jobId = jobId;
    }
    get JobId() {
        return this.jobId;
    }
    get JobPromise() {
        return this.jobPromise;
    }
    CompleteJob(jobResult) {
        if (jobResult.WasSuccesful) {
            this.successResolver(jobResult);
        }
        else {
            this.errorRejector(jobResult);
        }
    }
}
export { Job };
//# sourceMappingURL=job.js.map