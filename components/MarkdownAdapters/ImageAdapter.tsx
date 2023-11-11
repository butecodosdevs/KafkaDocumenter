import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function ImageAdapter({ element }: {
    element: ClassAttributes<HTMLImageElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return (
        <div className="h-40 flex justify-center m-10">
            <img className="h-full" {...element}></img>
        </div>
    );
}