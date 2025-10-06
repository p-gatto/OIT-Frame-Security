export interface MenuItem {
    id?: number;
    icon: string;
    label: string;
    route: string;
    section: 'backoffice' | 'frontoffice';
}