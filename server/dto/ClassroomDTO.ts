import  LessonDTO  from "./LessonDTO";

export default class ClassroomDTO {

    public id: number;
    public title: string;
    public description:string;
    public language:string;
    public created_at:string;
    public lessons: LessonDTO[];

    constructor(id: number, description:string, language:string, created_at:string, title: string, lessons: LessonDTO[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.language = language;
        this.created_at = created_at;
        this.lessons = lessons;
    }
}