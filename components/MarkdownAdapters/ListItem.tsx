import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function ListItem({ element }: {
    element: ClassAttributes<HTMLLIElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return <li className="list-disc indent-2" {...element}></li>;
}