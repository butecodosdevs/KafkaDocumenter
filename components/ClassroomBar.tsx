import React, { useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Classroom from "@/types/ServerClassroom";
import Contributors from "@/types/ServerContributors";
import Author from '@/components/Author';
const ClassroomBar: React.FC<Classroom> = ({id, title,
    description,
    imgUrl,
    date,
    author
     }) => {
    
    const [title_prop, setTitle] = useState<string>(title || 'Title pattern');
    const [description_prop, setDescription] = useState<string>(description || 'Description pattern');
    const [img_url_prop, setImg] = useState<string>(imgUrl|| 'https://avatars.githubusercontent.com/u/139821735?v=4');
    const [date_prop, setDate] = useState<string>(date || '');
    const [autor_prop, setAutor] = useState<Contributors>(author || []);
    const dynamicBackgroundColor = getRandomColor();
    const componentClasses = classNames(
        'shadow-lg',
        'sha',
        'text-white',
  
        'w-full',
        'min-h-[159px]',
        'rounded-xl',
        'px-5',
        'py-2',
        'flex',
        'h-full',
        'flex-col',
        dynamicBackgroundColor
      );
    
    return (

        <article className={componentClasses}>
        <header className='w-full flex-1 flex'>
          <h1 className='text-xl'> {title_prop}</h1>
        </header>
        <section className='w-full  flex-1 flex'>
          <div className='w-1/2 text-md'>
            <p>{description_prop}</p>
          </div>
          <div className='w-1/2 flex justify-end items-center'>
            <img className='rounded-full max-h-[50px]' src={`${img_url_prop}`}  alt="Imagem" />
          </div>
        </section>
      
        <footer className='w-full flex-1 flex text-sm items-center'>
          <div className='w-1/2'>
            <p>{moment(date_prop).format('MM/DD/YYYY')}</p>
          </div>
          <div className='w-1/2 flex  justify-end items-center'>
          <p>
          {author != null? autor_prop.serverContributors.map((contributor) =>(
              <Author id={contributor.id} avatar_url={contributor.avatar_url} login={contributor.login}/>

          )) :""}
                 
          </p>
          </div>
        </footer>
      </article>
      


    );
};

export default ClassroomBar;


const getRandomColor = () => {
    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-indigo-400'];
    return colors[Math.floor(Math.random() * colors.length)];
  };