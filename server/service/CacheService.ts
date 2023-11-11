import DocumentDTO from "../dto/DocumentDTO";
import fs from 'fs';
import DateHelper from "../helpers/DateHelper";
import HashMapInterface from "@/types/HashMapInterface";
import FileNotRead from "../exceptions/FileNotRead";

const MINUTES_OF_VALIDITY = 1;

export default class CacheService {

    private static cacheWillBeInvalidAt: Date = DateHelper.addMinutes(new Date(), MINUTES_OF_VALIDITY);
    private static path: string = './docs/.cache';
    
    private static createHashMap(documents: Array<DocumentDTO>): HashMapInterface<string> {
        const hashMap: HashMapInterface<string> = {};
        for(let i = 0; i < documents.length; i++) {
            const doc = documents[i];
            hashMap[doc.token] = doc.title
        }
        return hashMap;
    }

    private static deleteCache() {
        if (this.hasCache()) {
            fs.unlinkSync(this.path);
        }
    }

    private static atualizeCacheValid() {
        this.cacheWillBeInvalidAt = DateHelper.addMinutes(new Date(), MINUTES_OF_VALIDITY);
    }

    public static store(documents: Array<DocumentDTO>): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.deleteCache();
            const hashMap = this.createHashMap(documents);
            const ws = fs.createWriteStream(this.path);
            ws.write(JSON.stringify(hashMap), error => {
                if (error) {
                    this.deleteCache();
                    return reject(error);
                }
                this.atualizeCacheValid();
                return resolve(true);
            })
        })
    }

    public static cacheIsInvalid(): boolean {
        const now = new Date();
        const minutes = DateHelper.diff(this.cacheWillBeInvalidAt, now);
        return minutes < 0 || !this.hasCache();
    }

    public static hasCache(): boolean {
        return fs.existsSync(this.path);
    }

    public static getCache(): string {
        const data = fs.readFileSync(this.path);
        return data.toString('utf-8');
    }

    public static getFromCache(token: string): string {
        const data: HashMapInterface<string> = JSON.parse(this.getCache());
        if(Object.keys(data).includes(token)) {
            return data[token];
        }
        throw new FileNotRead(`Token ${token} was not mapped to anything`);
    }

}