import DocumentDTO from "../dto/DocumentDTO";
import fs from 'fs';

export default class Cache {
    private static path: string = './docs/.cache';
    public static store(documents: Array<DocumentDTO>): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (this.hasCache()) {
                fs.unlinkSync(this.path);
            }
            const hashMap: { [key: string]: string } = {};
            for(let i = 0; i < documents.length; i++) {
                const doc = documents[i];
                hashMap[doc.token] = doc.title
            }
            const ws = fs.createWriteStream(this.path);
            ws.write(JSON.stringify(hashMap), error => {
                if (error) {
                    return reject(error);
                }
                return resolve(true);
            })
        })
    }
    public static hasCache(): boolean {
        return fs.existsSync(this.path);
    }
    public static getCache(): string {
        if(!this.hasCache()) {
            return "";
        }
        const data = fs.readFileSync(this.path);
        return data.toString('utf-8');
    }
    public static getFromCache(token: string): string {
        const data: {[key: string]: string} = JSON.parse(Cache.getCache());
        if(Object.keys(data).includes(token)) {
            return data[token];
        }
        throw new Error(`Token ${token} was not mapped to anything`);
    }
}