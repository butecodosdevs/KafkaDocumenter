export  default class LessonDTO {
    public title: string;
    public order: number;
    public type: string;
    public content: string;
    constructor(title: string, order: number, type: string, content:string) {
        this.title = title;
        this.order = order;
        this.type = type;
        this.content = content;
    }
}