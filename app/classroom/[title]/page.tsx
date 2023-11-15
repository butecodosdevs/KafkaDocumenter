'use client';
import React, { useEffect, useState } from "react";
import Lesson from '@/components/Lesson';
import ClassroomService from "@/services/ClassroomService";
import ServerLessons from "@/types/ServerLessons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MenuButton from "@/components/MenuButton";
import TextContent from "@/components/TextContent";
import { adapterMap } from "@/components/MarkdownAdapters/AdapterMap";
const classroomService = new ClassroomService();
export default function Page({ params }: { params: { title: string } }) {

  const [lessons, setLessons] = useState<ServerLessons>();
  const [path, setPath] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleClick = (lessonTitle: string) => {
    let newpath = `${path}/${lessonTitle}`;
    setPath(newpath);
  };

  useEffect(() => {
    const fetched = async () => {
      const lessonsReponse = await classroomService.availableLessons(params.title, path);
      setLessons(lessonsReponse);
      const indexMdItemIndex = lessonsReponse?.lessons.findIndex((item) => {
        const lowercaseFileName = item.title.toLowerCase();
        return lowercaseFileName === 'index.md';
      });
      if (indexMdItemIndex !== undefined && lessonsReponse?.lessons[indexMdItemIndex] && indexMdItemIndex != -1)
        setContent(lessonsReponse.lessons[indexMdItemIndex].content);
    };
    fetched();
  }, [path]);


  const back = () => {
    const pathComponents = path.split('/');
    pathComponents.pop();
    const newPath = pathComponents.join('/');
    setPath(newPath);

  };
  return (
    <div className='bg-slate-900 min-h-full flex  items-stretch justify-center text-white'>
      <div className='gap-6 w-full sm:max-w-[1200px] min-h-full flex-1 bg-gray-950 rounded-sm p-5'>
        <div className="w-full justify-end flex ">
          <Link href={`/classroom`} ><FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer " />back </Link>
        </div>

        <h1 className="text-2xl flex gap-2 items-center">
          {path != "" ? <FontAwesomeIcon icon={faArrowLeft} onClick={back} className="cursor-pointer" /> : ""}
          <b>
            {params.title}
          </b>
        </h1>
        <div>
          {lessons?.lessons.map((lesson, index) => (
            <Lesson key={lesson.order} title={lesson.title} order={lesson.order} type={lesson.type} content={lesson.content} onClick={handleClick} />
          ))
          }
        </div>
        <TextContent>
          <Markdown
            components={adapterMap}
            remarkPlugins={[remarkGfm]}>
            {content}
          </Markdown>
        </TextContent>
      </div>
    </div>);
}