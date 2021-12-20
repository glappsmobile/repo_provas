class TestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TestError';
    }
}
export default TestError;
