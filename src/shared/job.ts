type OnJobCompleteCallback = (result: any) => void;

class Job {
    private jobId:number;
    private functionArguments: any[];
    private functionName: string;
    private onCompleteCallBack: OnJobCompleteCallback;

    constructor(functionName: string, functionArguments:any[], onCompleteCallBack: OnJobCompleteCallback) {
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

    set JobId(jobId: number) {
        this.jobId = jobId;
    }

    get JobId(): number {
        return this.jobId;
    }

    get OnCompleteCallBack(): OnJobCompleteCallback {
        return this.onCompleteCallBack;
    }
}

export {Job, OnJobCompleteCallback};