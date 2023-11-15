import Classroom from "../Classroom";
import ClassroomDTO from "../dto/ClassroomDTO";
import LessonDTO from "../dto/LessonDTO";
import ContributorDTO from "../dto/ContributorDTO";
import Lesson from "../Lesson";

export default class AvailableLessonAdapter {
    adapt(lessonr: Lesson): LessonDTO {
        return new LessonDTO(lessonr.title, lessonr.order, lessonr.type, lessonr.content);
    }
}
