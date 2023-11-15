import Lesson from "@/types/ServerLesson";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface LessonProps extends Lesson {
  onClick: (lessonOrder: string) => void;
}
const LessonComponent: React.FC<LessonProps> = ({ title, order, type, onClick }) => {
  const icon = type === "file" ? faFile : faFolder;
  const iconColorClass = type === "file" ? "text-blue-500" : "text-green-500";
  

  const containerClass = type === "dir" ? "cursor-pointer" : "";


  const handleClick = () => {
    if (type === "dir") {
      onClick(title);
    }
  };

  return (
    <div className={`flex gap-1 items-center ${containerClass}`} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className={iconColorClass} />
      <label>{title}</label>
    </div>
  );
};

export default LessonComponent;