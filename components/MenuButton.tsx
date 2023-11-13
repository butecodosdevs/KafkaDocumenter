import { useContext } from "react";
import HamburguerIcon from "./HamburguerIcon";
import { appContext } from "@/context/AppContext";

export default function MenuButton() {
    const { openSideMenu, toggleSideMenu } = useContext(appContext);
    const baseClass = 'absolute cursor-pointer w-8 h-8';
    const appendClass = openSideMenu ? 'bg-slate-700 rounde' : '';
    return (
        <>
            <span onClick={() => { toggleSideMenu(); }} className={`${baseClass} ${appendClass}`}>
                <HamburguerIcon></HamburguerIcon>
            </span>
        </>

    );
}