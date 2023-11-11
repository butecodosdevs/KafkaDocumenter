'use client';
import { appContext } from "@/context/AppContext";
import { useContext } from "react";

export default function SideBar() {
    const {openSideMenu, documents} = useContext(appContext);
    const baseClasses = `p-2 min-w-[210px] bg-slate-700 text-white overflow-y-auto transition-all`
    const showClasses = openSideMenu ? 'ml-0':`ml-[-210px]`;
    return(
      <aside className={`${baseClasses} ${showClasses}`}>
        <h1> Curso de Kafka do Pedro </h1>
        <nav className='m-2'>
          <ul>
            {documents.docs.map((doc, key) => <li key={key}> {doc.title} </li>)}
          </ul>
        </nav>
      </aside>
    );
}