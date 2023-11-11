import { ClassAttributes, HTMLAttributes, useEffect, useState } from "react";
import { ExtraProps } from "react-markdown";

function shouldShowCode() {
    if (window.innerWidth < 1200) {
        return false;
    }
    return true;
}

export default function PreAdapter({ element }: {
    element: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    const [showCode, setShowCode] = useState(true);

    useEffect(() => {
        const handler = (ev: UIEvent) => {
            setShowCode(shouldShowCode());
            return null;
        };
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    return showCode ? <pre className="bg-slate-800 block p-2 text-red-200 rounded font-mono mt-5 mb-5 whitespace-pre-wrap" {...element}></pre> : null;
}