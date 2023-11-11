import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function LinkAdapter({ element }: {
    element: ClassAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {

    return (
        <a className="underline text-yellow-300" {...element}></a>
    );
}