import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function CodeAdapter({element}: {
    element: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return <code className="bg-slate-800 inline p-1 text-center text-yellow-300 font-mono rounded" {...element}></code>
}