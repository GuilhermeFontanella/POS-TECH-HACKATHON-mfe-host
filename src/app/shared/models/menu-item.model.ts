export interface MenuItem {
    label: string;
    icon?: string;
    routerLink?: string[];
    url?: string[];
    target?: string;
    badge?: string;
    preventExact?: boolean;
    class?: string;
    items?: MenuItem[];
    comand?: (event: any) => void;
    separator?: boolean;
}