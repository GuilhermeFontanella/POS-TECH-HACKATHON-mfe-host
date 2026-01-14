import { useEffect, useState } from "react";

export interface PageHeaderData {
    title: string;
    subtitle: string;
}

export function usePageHeader() {
    const [data, setData] = useState<PageHeaderData>({
        title: 'Página inicial',
        subtitle: 'Subtitulo genérico'
    });

    useEffect(() => {
        const handleTitle = (event: any) => setData(event.detail || event);
        window.addEventListener('setPageHeaderData', handleTitle);
        return () => window.removeEventListener('setPageHeaderData', handleTitle);
    }, []);

    return data;
}