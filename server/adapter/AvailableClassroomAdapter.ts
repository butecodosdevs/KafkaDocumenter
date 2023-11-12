import Classroom from "../Classroom";
import ClassroomDTO from "../dto/ClassroomDTO";
import LessonDTO from "../dto/LessonDTO";

export default class AvailableClassroomAdapter {
    adapt(classr: Classroom): ClassroomDTO {
        const lessonDTOs: LessonDTO[] = classr.lessons.map(lesson => new LessonDTO(lesson.title, lesson.order));
        return new ClassroomDTO(classr.title, lessonDTOs);
    }
}
