import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="max-w-4xl mx-auto space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">Chi Siamo</h1>

      <mat-card>
        <mat-card-content class="prose max-w-none">
          <p class="text-lg text-gray-700 leading-relaxed">
            OIT Frame è una piattaforma innovativa progettata per semplificare 
            la gestione delle applicazioni web moderne. Con un'architettura robusta 
            basata su Angular e ASP.NET Core, offriamo soluzioni scalabili e sicure 
            per le esigenze aziendali.
          </p>
        </mat-card-content>
      </mat-card>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <mat-card class="text-center">
          <mat-card-content class="space-y-3">
            <mat-icon class="text-6xl text-blue-600">rocket_launch</mat-icon>
            <h3 class="text-xl font-semibold">Missione</h3>
            <p class="text-gray-600">
              Fornire strumenti di qualità per lo sviluppo rapido di applicazioni enterprise
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card class="text-center">
          <mat-card-content class="space-y-3">
            <mat-icon class="text-6xl text-green-600">visibility</mat-icon>
            <h3 class="text-xl font-semibold">Visione</h3>
            <p class="text-gray-600">
              Diventare il framework di riferimento per applicazioni web sicure e performanti
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card class="text-center">
          <mat-card-content class="space-y-3">
            <mat-icon class="text-6xl text-orange-600">stars</mat-icon>
            <h3 class="text-xl font-semibold">Valori</h3>
            <p class="text-gray-600">
              Innovazione, qualità, sicurezza e attenzione al cliente
            </p>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Il Nostro Team</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="text-gray-700">
            Siamo un team di sviluppatori esperti appassionati di tecnologia e 
            innovazione. La nostra esperienza spazia dallo sviluppo frontend con 
            Angular alle architetture backend scalabili con .NET Core.
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: ``
})
export default class AboutComponent {

}
