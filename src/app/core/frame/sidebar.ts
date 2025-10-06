import { Component, input, output } from '@angular/core';

import { MenuItem } from '../menu/models/menu-item.model';
import { MenuComponent } from "../menu/menu";

@Component({
  selector: 'app-sidebar',
  imports: [
    MenuComponent
  ],
  template: `
    <div class="p-4 h-full bg-white">
      <h2 class="text-xl font-bold mb-4">Menu</h2>
      
      <!-- Sezione Back-office - mostrata solo se ci sono items -->
      @if (backOfficeItems().length > 0) {
        <div class="mb-6">
          <app-menu 
            [menuTitle]="'BackOffice'" 
            [menuItems]="backOfficeItems()"
            (itemClick)="onItemClick()" />        
        </div>
      }

      <!-- Sezione Front-office -->
      @if (frontOfficeItems().length > 0) {
        <div>
          <app-menu 
            [menuTitle]="'FrontOffice'" 
            [menuItems]="frontOfficeItems()"
            (itemClick)="onItemClick()" />       
        </div>
      }
    </div>
  `,
  styles: ``
})
export class SidebarComponent {
  backOfficeItems = input<MenuItem[]>([]);
  frontOfficeItems = input<MenuItem[]>([]);
  itemClick = output();

  onItemClick(): void {
    this.itemClick.emit();
  }
}
