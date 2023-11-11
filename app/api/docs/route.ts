import Document from '@/server/Document';
import AvailableDocumentStringAdapter from '@/server/adapter/AvailableDocumentAdapter';
import WantedDocumentAdapter from '@/server/adapter/WantedDocumentAdapter';
import DocumentWantedDocumentAdapter from '@/server/adapter/DocumentWantedDocumentAdapter';
import FileNotRead from '@/server/exceptions/FileNotRead';
import Cache from '@/server/service/CacheService';

const PATH_TO_DOCS = "./docs";

export async function GET(req: Request) {
    if(Cache.hasCache()) {
        const data = Cache.getCache()
        if(data != '') {
            return new Response(data);
        }
    }
    const docs = Document.createDocumentsFrom(PATH_TO_DOCS);
    const adapter = new AvailableDocumentStringAdapter();
    const adapted = {
        docs: docs.map(doc => adapter.adapt(doc))
    };
    Cache.store(adapted.docs);
    const response = JSON.stringify(adapted);
    return new Response(response);
}

export async function POST(req: Request) {
    try {
        const adapter = new WantedDocumentAdapter();
        const adapterDocument = new DocumentWantedDocumentAdapter();
        const wantedDocumentDTO = await adapter.adapt(req);
        const doc = adapterDocument.adapt(wantedDocumentDTO, PATH_TO_DOCS);
        const content = await doc.content();
        return new Response(content, {
            status: 200
        });
    } catch(error: unknown) {
        if(error instanceof FileNotRead) {
            return new Response(null, {
                status: 404
            });
        }
        console.error(error);
        return new Response(null, {status: 500});
    }
    
}