import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function EmAdapter({ element }: {
    element: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
   return <em {...element}></em>
}