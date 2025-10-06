import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatSlideToggleModule, MatIconModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">Impostazioni Sistema</h1>

      <mat-card>
        <mat-card-header>
          <mat-icon matCardAvatar>security</mat-icon>
          <mat-card-title>Sicurezza</mat-card-title>
        </mat-card-header>
        <mat-card-content class="space-y-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium">Autenticazione a due fattori</p>
              <p class="text-sm text-gray-600">Richiedi verifica aggiuntiva per l'accesso</p>
            </div>
            <mat-slide-toggle></mat-slide-toggle>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium">Password forte obbligatoria</p>
              <p class="text-sm text-gray-600">Richiedi password complesse</p>
            </div>
            <mat-slide-toggle [checked]="true"></mat-slide-toggle>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-icon matCardAvatar>notifications</mat-icon>
          <mat-card-title>Notifiche</mat-card-title>
        </mat-card-header>
        <mat-card-content class="space-y-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium">Notifiche email</p>
              <p class="text-sm text-gray-600">Invia notifiche via email</p>
            </div>
            <mat-slide-toggle [checked]="true"></mat-slide-toggle>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium">Notifiche push</p>
              <p class="text-sm text-gray-600">Invia notifiche push browser</p>
            </div>
            <mat-slide-toggle></mat-slide-toggle>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-icon matCardAvatar>storage</mat-icon>
          <mat-card-title>Database</mat-card-title>
        </mat-card-header>
        <mat-card-content class="space-y-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium">Backup automatico</p>
              <p class="text-sm text-gray-600">Esegui backup giornalieri automatici</p>
            </div>
            <mat-slide-toggle [checked]="true"></mat-slide-toggle>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: ``
})
export default class SettingsComponent {

}
