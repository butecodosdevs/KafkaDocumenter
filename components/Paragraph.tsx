import { ReactNode } from "react";

export default function Paragraph({children}: {children: ReactNode}) {
    return (
        <p className='indent-4'>{children}</p>
    );
}