import Document from '@/server/Document';
import AvailableDocumentStringAdapter from '@/server/adapter/AvailableDocumentAdapter';
import WantedDocumentAdapter from '@/server/adapter/WantedDocumentAdapter';
import DocumentWantedDocumentAdapter from '@/server/adapter/DocumentWantedDocumentAdapter';
import FileNotRead from '@/server/exceptions/FileNotRead';
import Cache from '@/server/service/CacheService';
import DocumentRepository from '@/server/repository/DocumentRepository';
import BadAdaptedObject from '@/server/exceptions/BadAdaptedObject';
import HashMapInterface from '@/types/HashMapInterface';

const PATH_TO_DOCS = "./docs";
const repository = new DocumentRepository(PATH_TO_DOCS);

export async function GET(req: Request) {
    if(!Cache.cacheIsInvalid()) {
        const data: HashMapInterface<string> = JSON.parse(Cache.getCache());
        const docsCached = [];
        const keys = Object.keys(data);
        for(let i = 0; i <  keys.length; i++) {
            const token = keys[i];
            const title = data[token];
            const doc = {
                token: token,
                title: title
            };
            docsCached.push(doc);
        }

        const docs = JSON.stringify({docs: docsCached});
        return new Response(docs);
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
        const wantedDocumentDTO = await adapter.adapt(req);
        const doc = repository.getDocument(wantedDocumentDTO.token);
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
        if(error instanceof BadAdaptedObject) {
            return new Response(JSON.stringify({
                error: error.message
            }), {
                status: 400
            })
        }
        console.error(error);
        return new Response(null, {status: 500});
    }
    
}