class JobResult<T> {
    private wasSuccessful:boolean;
    private result: T;

    constructor(wasSuccessful: boolean, result: T = null) {
        this.wasSuccessful = wasSuccessful;
        this.result = result;
    }

    get WasSuccesful(): boolean {
        return this.wasSuccessful;
    }

    get Result(): T {
        return this.result;
    }
}

export {JobResult};