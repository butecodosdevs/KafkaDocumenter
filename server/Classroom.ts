import Lesson from './Lesson';
import {Repository, RepositoryContent} from "@/types/ServerRepository";

import Contributors from "@/types/ServerContributors";
export default class Classroom {
    private _id: number;
    private _title: string;
    private _description:string;
    private _language:string;
    private _created_at:string;
    private _lessons: Lesson[];
    private _authors: Contributors;

  
    constructor(c_title: string, c_id:number, c_description:string, c_language:string, c_created_at:string, c_authors:Contributors ) {
        this._id = c_id;
        this._title = c_title;
        this._description = c_description;
        this._language = c_language;
        this._created_at = c_created_at;
        this._lessons = [];
        this._authors = c_authors;
       
    }

    get title(): string {
        return this._title;
    }

    get id(): number {
        return this._id;
    }

    get description(): string {
        return this._description;
    }

    get language(): string {
        return this._language;
    }

    get created_at(): string {
        return this._created_at;
    }

    get lessons(): Lesson[] {
        return this._lessons;
    }
    get authors(): Contributors {
        return this._authors;
    }
    addLesson(lesson: Lesson): void {
        this._lessons.push(lesson);
    }
    static createClassroomFromRepositories(repositories: Repository[]): Classroom[] {
        return repositories.map(repository => new Classroom(repository.name, repository.id, repository.description, repository.language, repository.created_at, repository.contributors));
    }
      
    toJSON() {
        return {
            title: this._title,
            lessons: this._lessons.map(lesson => lesson.toJSON()),
        };
    }
}
