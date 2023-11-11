import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function SubtitleAdapter({element}: {
    element: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps
}) {
    return (
        <h2 className="text-xl font-bold m-5" {...element}></h2>
    );
}