export default class WantedDocumentDTO {
    constructor(
        private _token: string
    ) {}

    get token(): string {
        return this._token
    }
}