export default class FileNotRead extends Error {
    constructor(path: string) {
        const message = `File on ${path} could not be read`;
        super(message);
    }
}