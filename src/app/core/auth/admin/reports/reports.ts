import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reports',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">Report e Statistiche</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <mat-card class="hover:shadow-lg transition-shadow cursor-pointer">
          <mat-card-header>
            <mat-icon matCardAvatar class="bg-blue-100 text-blue-600">assessment</mat-icon>
            <mat-card-title>Report Utenti</mat-card-title>
            <mat-card-subtitle>Statistiche accessi e utilizzo</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>download</mat-icon>
              Genera Report
            </button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="hover:shadow-lg transition-shadow cursor-pointer">
          <mat-card-header>
            <mat-icon matCardAvatar class="bg-green-100 text-green-600">trending_up</mat-icon>
            <mat-card-title>Report Attività</mat-card-title>
            <mat-card-subtitle>Analisi attività sistema</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>download</mat-icon>
              Genera Report
            </button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="hover:shadow-lg transition-shadow cursor-pointer">
          <mat-card-header>
            <mat-icon matCardAvatar class="bg-orange-100 text-orange-600">security</mat-icon>
            <mat-card-title>Report Sicurezza</mat-card-title>
            <mat-card-subtitle>Log accessi e sicurezza</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>download</mat-icon>
              Genera Report
            </button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="hover:shadow-lg transition-shadow cursor-pointer">
          <mat-card-header>
            <mat-icon matCardAvatar class="bg-purple-100 text-purple-600">analytics</mat-icon>
            <mat-card-title>Report Performance</mat-card-title>
            <mat-card-subtitle>Metriche sistema</mat-card-subtitle>
          </mat-card-header>
          <mat-card-actions>
            <button mat-button color="primary">
              <mat-icon>download</mat-icon>
              Genera Report
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: ``
})
export default class ReportsComponent {

}