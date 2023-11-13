import ServerLesson from "./ServerLesson";
import ServerContributors from "./ServerContributor";
import Contributor from "./ServerContributor";
export default interface ServerClassroom {
    id:number,
    title: string,
    description:string,
    authors:Contributor[],
    imgUrl:string,
    date:string,
    lessons: Array<ServerLesson>
}
