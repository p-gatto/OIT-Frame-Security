import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
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
      <button mat-icon-button>
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: ``
})
export class NavbarComponent {

  appName = input('');
  menuToggle = output();

  onMenuToggle(): void {
    this.menuToggle.emit();
  }
}