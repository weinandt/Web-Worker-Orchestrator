class Job {
    constructor(functionName, functionArg, onCompleteCallBack = null) {
        // TODO: figure out if this should be randomly generated or user supplied.
        this.jobId = Math.random();
        this.functionName = functionName;
        this.functionArg = functionArg;
        this.onCompleteCallBack = onCompleteCallBack;
    }
}
export { Job };
//# sourceMappingURL=job.js.map