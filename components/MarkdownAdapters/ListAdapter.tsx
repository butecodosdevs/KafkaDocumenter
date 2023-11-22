import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function ListAdapter({ element }: {
    element: ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return <ul className="ml-4" {...element}></ul>
}