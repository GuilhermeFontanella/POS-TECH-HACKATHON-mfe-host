import { useEffect } from "react";

type Props = {
    src: string;
    children: React.ReactNode;
}

export function MfeLoader({src, children}: Props) {
    useEffect(() => {
        if (document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement('script');
        script.src = src;
        script.type = 'module',
        document.body.appendChild(script);
    }, [src]);

    return <>{children}</>;
}