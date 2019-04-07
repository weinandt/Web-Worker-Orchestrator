class Job {
    private jobId;

    constructor() {
        // TODO: figure out if this should be randomly generated or user supplied.
        this.jobId = Math.random();
    }
}

export {Job};