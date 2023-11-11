import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function SideBarItem({ children, keypath, index }: { children: ReactNode, keypath: string, index: number }) {
    const pathname = usePathname();
    const path = `/doc/${keypath}`;
    const appendClass = pathname == path ? 'underline text-yellow-400' : '';
    return (
        <li key={keypath}>
            <Link className='capitalize' href={path}>
                <span className='font-bold'>{index + 1}. </span><span className={appendClass}>{children}</span>
            </Link>
        </li>
    );
}