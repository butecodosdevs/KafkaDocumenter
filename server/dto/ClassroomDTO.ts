import  LessonDTO  from "./LessonDTO";

export default class ClassroomDTO {
    public title: string;
    public lessons: LessonDTO[];

    constructor(title: string, lessons: LessonDTO[]) {
        this.title = title;
        this.lessons = lessons;
    }
}