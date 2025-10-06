import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard Amministratore</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <mat-card class="bg-blue-50">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-gray-600 text-sm">Utenti Totali</p>
              <p class="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <mat-icon class="text-blue-600 text-5xl">people</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-green-50">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-gray-600 text-sm">Report Generati</p>
              <p class="text-3xl font-bold text-green-600">456</p>
            </div>
            <mat-icon class="text-green-600 text-5xl">assessment</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-orange-50">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-gray-600 text-sm">Configurazioni</p>
              <p class="text-3xl font-bold text-orange-600">89</p>
            </div>
            <mat-icon class="text-orange-600 text-5xl">settings</mat-icon>
          </mat-card-content>
        </mat-card>

        <mat-card class="bg-purple-50">
          <mat-card-content class="flex items-center justify-between p-6">
            <div>
              <p class="text-gray-600 text-sm">Attività Oggi</p>
              <p class="text-3xl font-bold text-purple-600">67</p>
            </div>
            <mat-icon class="text-purple-600 text-5xl">analytics</mat-icon>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Area Amministrazione</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="text-gray-700">
            Benvenuto nell'area di amministrazione. Qui puoi gestire utenti, 
            visualizzare report e configurare il sistema.
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: ``
})
export default class DashboardComponent {

}