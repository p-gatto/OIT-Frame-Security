import { Component, input } from '@angular/core';

import { MenuItem } from '../menu/menu-item.model';
import { MenuComponent } from "../menu/menu";

@Component({
  selector: 'app-sidebar',
  imports: [
    MenuComponent
  ],
  template: `
    <div class="p-4 h-full bg-white">
      <h2 class="text-xl font-bold mb-4">Menu</h2>
      
      <!-- Sezione Back-office -->
      <div class="mb-6">
        <app-menu [menuTitle]="'BackOffice'" [menuItems]="backOfficeItems()" />        
      </div>

      <!-- Sezione Front-office -->
      <div>
        <app-menu [menuTitle]="'FrontOffice'" [menuItems]="frontOfficeItems()" />       
      </div>
    </div>
  `,
  styles: ``
})
export class SidebarComponent {
  backOfficeItems = input<MenuItem[]>([]);
  frontOfficeItems = input<MenuItem[]>([]);
}
