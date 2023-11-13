import ServerLesson from "./ServerLesson";
import ServerContributors from "./ServerContributors";
export default interface ServerClassroom {
    id:number,
    title: string,
    description:string,
    author:ServerContributors,
    imgUrl:string,
    date:string,
    lessons: Array<ServerLesson>
}
