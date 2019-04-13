type OnJobCompleteCallback = (result: any) => void;

class Job {
    private jobId;
    private functionArguments: any[];
    private functionName: string;
    private onCompleteCallBack: OnJobCompleteCallback;

    constructor(functionName: string, functionArguments:any[], onCompleteCallBack: OnJobCompleteCallback = null) {
        // TODO: figure out if this should be randomly generated or user supplied.
        this.jobId = Math.random();

        this.functionName = functionName;
        this.functionArguments = functionArguments;
        this.onCompleteCallBack = onCompleteCallBack;
    }

    get FunctionArguments(): any[] {
        return this.functionArguments;
    }

    get FunctionName(): string {
        return this.functionName;
    }
}

export {Job, OnJobCompleteCallback};