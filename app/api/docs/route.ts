import fs from 'fs';
import Document from '@/server/Document';
import AvailableDocumentStringAdapter from '@/server/adapter/AvailableDocumentAdapter';

export async function GET(req: Request) {
    const path = "./docs";
    const docs = Document.createDocumentsFrom(path);
    const adapter = new AvailableDocumentStringAdapter();
    const response = JSON.stringify({
        docs: docs.map(doc => adapter.adapt(doc))
    });
    return new Response(response);
}