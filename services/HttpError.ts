export default class HttpError extends Error {
    constructor(message: string, status: number) {
        super(`Status: ${status} - ${message}`);
    }
}