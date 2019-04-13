class Job {
    constructor(functionName, functionArguments, onCompleteCallBack = null) {
        // TODO: figure out if this should be randomly generated or user supplied.
        this.jobId = Math.random();
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
}
export { Job };
//# sourceMappingURL=job.js.map