import { join } from "path";
import { statSync } from "fs";
import WantedDocumentDTO from "../dto/WantedDocumentDTO";
import FileNotRead from "../exceptions/FileNotRead";
import Document from "../Document";
import CacheService from "../service/CacheService";

export default class DocumentWantedDocumentAdapter {
    adapt(documentWanted: WantedDocumentDTO, path: string): Document {
        let filepath = CacheService.getFromCache(documentWanted.token);
        const fullpath = join(path, `${filepath}.md`);
        const stats = statSync(fullpath);
        if (!stats.isFile()) {
            throw new FileNotRead(fullpath);
        }
        return Document.createDocumentFrom(fullpath);
    }
}