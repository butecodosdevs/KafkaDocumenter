import { statSync, readFileSync, readdirSync, Stats } from 'fs';
import FileNotRead from './exceptions/FileNotRead';
import { basename, join } from 'path';

export default class Document {
    private _lastTimeEdited: Date;
    private _title: string;

    constructor(
        private path: string
    ) {
        const stats = statSync(this.path);
        this._lastTimeEdited = stats.mtime;
        this._title = basename(this.path, '.md');
    }
    
    get token() {
        return btoa(this.title);
    }

    get title(): string {
        return this._title;
    }

    get lastTimeEdited(): Date {
        return this._lastTimeEdited;
    }

    static createDocumentFrom(path: string): Document {
        return new Document(path);
    }

    static createDocumentsFrom(path: string): Array<Document> {
        const dirEntries = readdirSync(path);
        const docs = [];
        for (let i = 0; i < dirEntries.length; i++) {
            const entry = dirEntries[i];
            const fullpath = join(path, entry);
            const fileStats = statSync(fullpath, {
                throwIfNoEntry: false
            })
            if (fileStats === undefined) {
                throw new FileNotRead(fullpath);
            }
            docs.push(new Document(fullpath));
        }
        return docs;
    }

    content(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const content = readFileSync(this.path, {
                    encoding: 'utf-8'
                });
                return resolve(content);
            } catch (exception: unknown) {
                return reject(exception);
            }
        });
    }
}