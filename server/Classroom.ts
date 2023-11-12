import Lesson from './Lesson';
import {Repository, RepositoryContent} from "@/types/ServerRepository";
export default class Classroom {
    private _title: string;
    private _lessons: Lesson[];

    constructor(c_title: string) {
        this._title = c_title;
        this._lessons = [];
    }

    get title(): string {
        return this._title;
    }

    get lessons(): Lesson[] {
        return this._lessons;
    }

    addLesson(lesson: Lesson): void {
        this._lessons.push(lesson);
    }
    static createClassroomFromRepositories(repositories: Repository[]): Classroom[] {
        return repositories.map(repository => new Classroom(repository.name));
      }
      
    toJSON() {
        return {
            title: this._title,
            lessons: this._lessons.map(lesson => lesson.toJSON()),
        };
    }
}
