'use client';
import HamburguerIcon from '@/components/HamburguerIcon';
import SideBar from '@/components/SideBar';

import TextContent from '@/components/TextContent';
import { appContext } from '@/context/AppContext';
import DocumentService from '@/services/DocumentService';
import { useContext, useEffect } from 'react';



export default function Home() {
  const {openSideMenu, toggleSideMenu} = useContext(appContext);
  const baseClass = 'absolute cursor-pointer w-8 h-8';
  const appendClass = openSideMenu ? 'bg-slate-700 rounde':'';

  return (
    <div className='flex overflow-x-hidden flex-nowrap min-h-screen w-auto bg-slate-900'>

      <SideBar></SideBar>
      <main className='w-full p-2 relative'>
        <span onClick={() => toggleSideMenu()} className={`${baseClass} ${appendClass}`}>
          <HamburguerIcon></HamburguerIcon>
        </span>
        <section className='w-full mt-10 text-center'>
          <TextContent></TextContent>  
        </section>
      </main>
    </div>
  );
}
