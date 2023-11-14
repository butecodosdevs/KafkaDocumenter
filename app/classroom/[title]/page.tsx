'use client';
import React, {useEffect, useState } from "react";
import ClassroomService from "@/services/ClassroomService";
import ServerLessons from "@/types/ServerLessons";
const classroomService = new ClassroomService();
export default function Page({ params }: { params: { title: string } }) {

  const [lessons, setLessons] = useState<ServerLessons>();

  useEffect(() => {
    const fetched = async () => {
        const    lessonsReponse = await classroomService.availableLessons(params.title);
    
        setLessons(lessonsReponse);
     
    };
    fetched();
}, []);
  return (
  <div className='bg-slate-900 min-h-full flex  items-stretch justify-center text-white'>
  <div className='gap-6 w-full sm:max-w-[1200px] min-h-full flex-1 bg-gray-950 rounded-sm p-5'>
    <h1 className="text-2xl">
      <b>
      {params.title}
      </b>
    </h1>
  </div>  
  </div>);
}