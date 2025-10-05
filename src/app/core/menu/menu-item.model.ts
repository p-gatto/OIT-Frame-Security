export interface MenuItem {
    icon: string;
    label: string;
    route: string;
    section: 'backoffice' | 'frontoffice';
}