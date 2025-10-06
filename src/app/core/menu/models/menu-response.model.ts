import { MenuItem } from "./menu-item.model";

export interface MenuResponse {
    backOfficeItems: MenuItem[];
    frontOfficeItems: MenuItem[];
}