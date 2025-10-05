import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";

import { version } from '../../package.json';

import { MenuItem } from './core/menu/menu-item.model';
import { backofficeItems, frontofficeItems } from './core/menu/menu-items.data';

import { NavbarComponent } from './core/frame/navbar';
import { SidebarComponent } from './core/frame/sidebar';
import { FooterComponent } from './core/frame/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  template: `
    <div class="flex flex-col h-screen overflow-hidden">
      <!-- Navbar -->
      <app-navbar [appName]="appTitle()"  (menuToggle)="toggleSidebar()"/>      
      
      <!-- Container principale con sidebar -->
      <mat-sidenav-container class="flex-1 mt-16 mb-16">

        <!-- Sidebar -->
        <mat-sidenav #drawer mode="over" class="w-64"[autoFocus]="false">
            <app-sidebar [backOfficeItems]="boItems()" [frontOfficeItems]="foItems()"/>
        </mat-sidenav>

        <!-- Contenuto principale -->
        <mat-sidenav-content>
          <div class="p-4 md:p-6 lg:p-8 min-h-full bg-gray-50">
            <router-outlet/>
          </div>
        </mat-sidenav-content>

      </mat-sidenav-container>

      <!-- Footer -->
      <app-footer [appName]="appName()" [version]="appVersion()"/>
    </div>
  `,
  styles: `
    ::ng-deep .mat-drawer-container {
      background-color: transparent;
    }
  `
})
export class AppComponent {

  protected readonly appTitle = signal('OIT Frame');
  protected readonly appName = signal('OIT Frame by signal');
  protected readonly appVersion = signal('0.0.0');

  @ViewChild('drawer') drawer!: MatDrawer;

  boItems = signal<MenuItem[]>([...backofficeItems]);
  foItems = signal<MenuItem[]>([...frontofficeItems]);

  constructor() {
    this.appVersion.set(version);
  }

  toggleSidebar(): void {
    this.drawer.toggle();
  }

}