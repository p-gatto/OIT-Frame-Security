import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { MenuItem } from './menu-item.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    MatListModule,
    MatIconModule
  ],
  template: `
    <h3 class="text-sm font-semibold text-gray-500 uppercase mb-2 px-4">
      {{menuTitle()}}
    </h3>
    <mat-nav-list>
      @for (item of menuItems(); track $index) {
        <a mat-list-item              
          [routerLink]="item.route"
          routerLinkActive="bg-blue-50"
          class="hover:bg-gray-100 rounded transition-colors">
          <mat-icon matListItemIcon class="text-blue-600">{{item.icon}}</mat-icon>   
        <span matListItemTitle>{{item.label}}</span>
      </a>
      }          
    </mat-nav-list>
  `,
  styles: ``
})
export class MenuComponent {
  menuTitle = input('Menu anonimo');
  menuItems = input<MenuItem[]>([]);
}
