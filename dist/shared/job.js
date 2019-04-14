class Job {
    constructor(functionName, functionArguments, onCompleteCallBack) {
        this.functionName = functionName;
        this.functionArguments = functionArguments;
        this.onCompleteCallBack = onCompleteCallBack;
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
    get OnCompleteCallBack() {
        return this.onCompleteCallBack;
    }
}
export { Job };
//# sourceMappingURL=job.js.map