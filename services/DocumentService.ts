import HttpError from "./HttpError";
import DocumentsAvailable from "@/types/DocumentsAvailable";

export default class DocumentService {
    async availableDocuments(): Promise<DocumentsAvailable> {
        const response = await fetch('/api/docs');
        if(response.status != 200) {
            const text = await response.text();
            console.error(text);
            return {
                docs: []
            };
        }
        const data: DocumentsAvailable  = await response.json();
        return data;
    }
    async getDocument(token: string): Promise<string> {
        const body = {
            token: token
        };
        const response = await fetch('/api/docs', {
            body: JSON.stringify(body),
            method: 'POST'
        });
        if(response.status != 200) {
            const text = await response.text();
            throw new HttpError(text, response.status);
        }
        const data = await response.text();
        return data;
    }
}