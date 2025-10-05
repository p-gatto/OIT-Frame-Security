import { Component, input, signal } from '@angular/core';

import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  imports: [
    MatToolbarModule
  ],
  template: `
    <mat-toolbar class="fixed bottom-0 left-0 right-0 h-16" color="primary">
      <span class="flex-1 text-sm md:text-base">
        © {{currentYear()}} {{appName()}}
      </span>
      <span class="text-xs md:text-sm">v.{{version()}}</span>
    </mat-toolbar>
  `,
  styles: ``
})
export class FooterComponent {
  appName = input<string>('La Mia Applicazione');
  version = input<string>('1.0.0');

  currentYear = signal(new Date().getFullYear());
}
