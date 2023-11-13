import  LessonDTO  from "./LessonDTO";
import  ContributorDTO  from "./ContributorDTO";
export default class ClassroomDTO {

    public id: number;
    public title: string;
    public description:string;
    public language:string;
    public date:string;
    public lessons: LessonDTO[];
    public authors: ContributorDTO[];

    constructor(id: number, description:string, language:string, created_at:string, title: string, lessons: LessonDTO[], authors:ContributorDTO[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.language = language;
        this.date = created_at;
        this.lessons = lessons;
        this.authors = authors;
    }
}