import { MenuItem } from "../models/menu-item.model";

export const backofficeItems: MenuItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/admin/dashboard', section: 'backoffice' },
    { icon: 'people', label: 'Utenti', route: '/admin/users', section: 'backoffice' },
    { icon: 'settings', label: 'Impostazioni', route: '/admin/settings', section: 'backoffice' },
    { icon: 'assessment', label: 'Report', route: '/admin/reports', section: 'backoffice' }
];

export const frontofficeItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home', section: 'frontoffice' },
    { icon: 'shopping_cart', label: 'Prodotti', route: '/products', section: 'frontoffice' },
    { icon: 'contact_mail', label: 'Contatti', route: '/contact', section: 'frontoffice' },
    { icon: 'info', label: 'Chi Siamo', route: '/about', section: 'frontoffice' }
];