import Classroom from "../Classroom";
import ClassroomDTO from "../dto/ClassroomDTO";
import LessonDTO from "../dto/LessonDTO";
import ContributorDTO from "../dto/ContributorDTO";
export default class AvailableClassroomAdapter {
    adapt(classr: Classroom): ClassroomDTO {
        const lessonDTOs: LessonDTO[] = classr.lessons.map(lesson => new LessonDTO(lesson.title, lesson.order));
        const contributorsDTOs: ContributorDTO[] = classr.authors.serverContributors.map(contributor => new ContributorDTO(
            contributor.id, contributor.login, contributor.avatar_url
            ));
        return new ClassroomDTO(classr.id,classr.description, classr.language, classr.created_at,classr.title, lessonDTOs, contributorsDTOs);
    }
}
