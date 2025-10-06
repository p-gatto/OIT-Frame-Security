import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";

import { version } from '../../package.json';

import { MenuItem } from './core/menu/models/menu-item.model';
import { backofficeItems, frontofficeItems } from './core/menu/data/menu-items.data';

import { NavbarComponent } from './core/frame/navbar';
import { SidebarComponent } from './core/frame/sidebar';
import { FooterComponent } from './core/frame/footer';
import { AuthService } from './core/auth/auth.service';
import { MenuService } from './core/menu/menu.service';

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
      <!-- Navbar - mostrata solo se autenticato -->
      @if (authService.isAuthenticated()) {
        <app-navbar 
          [appName]="appTitle()"  
          [userName]="getUserDisplayName()"
          (menuToggle)="toggleSidebar()"
          (logoutClick)="onLogout()"/>      
      }
      
      <!-- Container principale con sidebar -->
      <mat-sidenav-container [class]="authService.isAuthenticated() ? 'flex-1 mt-16 mb-16' : 'flex-1'">

        <!-- Sidebar - mostrata solo se autenticato -->
        @if (authService.isAuthenticated()) {
          <mat-sidenav #drawer mode="over" class="w-64" [autoFocus]="false">
            <app-sidebar 
              [backOfficeItems]="menuService.backOfficeItems()" 
              [frontOfficeItems]="menuService.frontOfficeItems()"
              (itemClick)="closeSidebar()"/>
          </mat-sidenav>
        }

        <!-- Contenuto principale -->
        <mat-sidenav-content>
          <div [class]="authService.isAuthenticated() ? 'p-4 md:p-6 lg:p-8 min-h-full bg-gray-50' : 'min-h-full'">
            <router-outlet/>
          </div>
        </mat-sidenav-content>

      </mat-sidenav-container>

      <!-- Footer - mostrato solo se autenticato -->
      @if (authService.isAuthenticated()) {
        <app-footer [appName]="appName()" [version]="appVersion()"/>
      }
    </div>
  `,
  styles: `
    ::ng-deep .mat-drawer-container {
      background-color: transparent;
    }
  `
})
export class AppComponent {

  authService = inject(AuthService);
  menuService = inject(MenuService);

  protected readonly appTitle = signal('OIT Frame Security');
  protected readonly appName = signal('OIT Frame Security by signal');
  protected readonly appVersion = signal('0.0.0');

  @ViewChild('drawer') drawer?: MatDrawer;

  constructor() {
    this.appVersion.set(version);

    // Carica il menu quando l'utente si autentica
    effect(() => {
      if (this.authService.isAuthenticated()) {
        this.menuService.loadUserMenu().subscribe();
      }
    });
  }

  toggleSidebar(): void {
    this.drawer?.toggle();
  }

  closeSidebar(): void {
    this.drawer?.close();
  }

  onLogout(): void {
    this.menuService.clearMenu();
    this.authService.logout();
  }

  getUserDisplayName(): string {
    const user = this.authService.currentUser();
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return '';
  }

}