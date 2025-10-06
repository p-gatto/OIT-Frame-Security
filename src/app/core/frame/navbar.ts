import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar color="primary" class="fixed top-0 left-0 right-0 z-50">
      <button mat-icon-button (click)="onMenuToggle()" class="mr-2">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="flex-1">{{appName()}}</span>
      
      <button mat-icon-button>
        <mat-icon>notifications</mat-icon>
      </button>
      
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      
      <mat-menu #userMenu="matMenu">
        <div class="px-4 py-2 border-b">
          <p class="font-semibold">{{userName()}}</p>
        </div>
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          <span>Profilo</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Impostazioni</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="onLogout()">
          <mat-icon>logout</mat-icon>
          <span>Esci</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: ``
})
export class NavbarComponent {

  appName = input('');
  userName = input('');
  menuToggle = output();
  logoutClick = output();

  onMenuToggle(): void {
    this.menuToggle.emit();
  }

  onLogout(): void {
    this.logoutClick.emit();
  }
}