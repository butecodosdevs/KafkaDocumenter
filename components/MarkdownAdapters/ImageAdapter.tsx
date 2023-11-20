import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function ImageAdapter({ element }: {
    element: ClassAttributes<HTMLImageElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return (
        <img className="h-40 m-auto mt-10 mb-10" {...element}></img>
    );
}