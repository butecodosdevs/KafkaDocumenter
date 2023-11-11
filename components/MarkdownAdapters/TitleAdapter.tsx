import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function TitleAdapter({element}: {
    element: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps
}) {
    return (
        <h1 className="text-2xl font-bold text-center m-5" {...element}></h1>
    );
}