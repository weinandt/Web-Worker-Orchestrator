import {JobResult} from "./jobResult.js";

class Job<T> {
    private jobId:number;
    private functionArguments: any[];
    private functionName: string;
    private jobPromise: Promise<JobResult<T>>;
    private successResolver: (value?: JobResult<T> | PromiseLike<JobResult<T>>) => void;
    private errorRejector: (reason?: any) => void;

    constructor(functionName: string, functionArguments:any[]) {
        this.functionName = functionName;
        this.functionArguments = functionArguments;
        this.jobPromise = new Promise((resolve, reject) => {
            this.successResolver = resolve;
            this.errorRejector = reject;
        });
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

    get JobPromise(): Promise<JobResult<T>> {
        return this.jobPromise;
    }

    public CompleteJob(jobResult: JobResult<T>) {
        if(jobResult.WasSuccesful) {
            this.successResolver(jobResult);
        } else {
            this.errorRejector(jobResult);
        }
    }
}

export {Job};