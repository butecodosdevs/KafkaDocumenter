import Document from "../Document";
import DocumentDTO from "../dto/DocumentDTO";
export default class AvailableDocumentAdapter {
    adapt(doc: Document): DocumentDTO {
        return new DocumentDTO(doc.title);
    }
}