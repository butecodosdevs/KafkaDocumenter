'use client';
import { appContext } from "@/context/AppContext";
import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
    const {openSideMenu, documents} = useContext(appContext);
    const pathname = usePathname();
    const baseClasses = `p-2 min-w-[300px] bg-slate-700 text-white overflow-y-auto transition-all`
    const showClasses = openSideMenu ? 'ml-0':`ml-[-300px]`;
    const keys = Object.keys(documents);
    return(
      <aside className={`${baseClasses} ${showClasses}`}>
        <h1 className="text-slate-300 text-2xl"> Evento de Kafka </h1>
        <nav className='m-2'>
          <ul>
           {
             keys.map((k, i) => <SideBarItem key={k} index={i} keypath={k}>{documents[k]}</SideBarItem>)
           }        
          </ul>
        </nav>
      </aside>
    );
}