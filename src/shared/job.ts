type OnJobCompleteCallback = (result: any) => void;

class Job {
    private jobId;
    private functionArg: any[];
    private functionName: string;
    private onCompleteCallBack: OnJobCompleteCallback;

    constructor(functionName: string, functionArg:any[], onCompleteCallBack: OnJobCompleteCallback = null) {
        // TODO: figure out if this should be randomly generated or user supplied.
        this.jobId = Math.random();

        this.functionName = functionName;
        this.functionArg = functionArg;
        this.onCompleteCallBack = onCompleteCallBack;
    }
}

export {Job, OnJobCompleteCallback};