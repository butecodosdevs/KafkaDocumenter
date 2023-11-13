import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import ExclamationIcon from "../ExclamationIcon";

export default function BlockquoteAdapter({ element }: {
    element: ClassAttributes<HTMLQuoteElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    const { children, ...rest } = element;

    return (
        <blockquote className="bg-slate-700 flex align-middle p-4 rounded-lg mt-5" {...rest}>
            <span>
            <ExclamationIcon></ExclamationIcon>
            </span>
            <div className="ml-2 flex align-middle justify-center">
            {children}
            </div>
            </blockquote>);
}