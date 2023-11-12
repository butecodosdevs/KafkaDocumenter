import ServerLesson from "./ServerLesson";
export default interface ServerClassroom {
    title: string,
    lessons: Array<ServerLesson>
}