import { appContext } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useContext } from "react";

export default function SideBarItem({ children, token, index }: { children: ReactNode, token: string, index: number }) {
    const pathname = usePathname();
    const {toggleLoading} = useContext(appContext);
    const path = `/doc/${token}`;
    const appendClass = pathname == path ? 'underline text-yellow-400' : '';
    return (
        <li>
            <Link className='capitalize' href={path} onClick={() => toggleLoading(true)}>
                <span className='font-bold'>{index + 1}. </span><span className={appendClass}>{children}</span>
            </Link>
        </li>
    );
}