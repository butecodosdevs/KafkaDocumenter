import { join } from "path";
import CacheService from "../service/CacheService";
import Document from "../Document";

export default class DocumentRepository {
    constructor(
        private pathToDocuments: string
    ) {}

    getDocument(token: string): Document {
        let filepath = CacheService.getFromCache(token);
        const fullpath = join(this.pathToDocuments, `${filepath}.md`);
        return Document.createDocumentFrom(fullpath);
    }

}