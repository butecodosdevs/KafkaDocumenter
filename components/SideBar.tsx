'use client';
import { appContext } from "@/context/AppContext";
import { useContext } from "react";
import SideBarItem from "./SideBarItem";
import Link from "next/link";

export default function SideBar() {
    const {openSideMenu, documents} = useContext(appContext);
    const baseClasses = `p-2 min-w-[300px] bg-slate-700 text-white overflow-y-auto transition-all relative`
    const showClasses = openSideMenu ? 'ml-0':`ml-[-300px]`;
    const docs = documents.docs;
    return(
      <aside className={`${baseClasses} ${showClasses}`}>
        <h1 className="text-slate-300 text-2xl"><Link href={"/"}>Evento de Kafka</Link></h1>
        <nav className='m-2'>
          <ul>
           {
             docs.map((doc, i) => <SideBarItem key={doc.token} token={doc.token} index={i}>{docs[i].title}</SideBarItem>)
           }        
          </ul>
        </nav>
      </aside>
    );
}