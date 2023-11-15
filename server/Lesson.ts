import {Repository, RepositoryContent} from "@/types/ServerRepository";
export default class Lesson {
    private _title: string;
    private _order: number;
    private _type: string;
    private _content: string;
    constructor(
        private c_title: string,
        private c_order:number,
        private c_type: string,
        private c_content:string
    ) {
        this._title = this.c_title;
        this._order = c_order;
        this._type = c_type;
        this._content = c_content;
    }
    get type(): string {
        return this._type;
    }
    get title(): string {
        return this._title;
    }
    get order(): number {
        return this._order;
    }
    get content(): string {
        return this._content;
    }
    toJSON() {
        return {
            title: this._title,
        };
    }
    static createLessonFromRepositoryContent(repositories: RepositoryContent[]): Lesson[] {
        return repositories.map((repository, index) => new Lesson(repository.name, index, repository.type, repository.content));
    }
      
}