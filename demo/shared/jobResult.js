class JobResult {
    constructor(wasSuccessful, result = null) {
        this.wasSuccessful = wasSuccessful;
        this.result = result;
    }
    get WasSuccesful() {
        return this.wasSuccessful;
    }
    get Result() {
        return this.result;
    }
}
export { JobResult };
//# sourceMappingURL=jobResult.js.map