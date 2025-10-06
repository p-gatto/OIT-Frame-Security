import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatButtonModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">I Nostri Prodotti</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of products; track product.id) {
          <mat-card class="hover:shadow-lg transition-shadow">
            <img mat-card-image [src]="product.image" [alt]="product.name">
            <mat-card-header>
              <mat-card-title>{{product.name}}</mat-card-title>
              <mat-card-subtitle>{{product.price}}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{product.description}}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">Acquista</button>
              <button mat-button>Dettagli</button>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: ``
})
export default class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Prodotto Premium',
      price: '€99.99',
      description: 'Il nostro prodotto di punta con caratteristiche avanzate',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      name: 'Prodotto Standard',
      price: '€49.99',
      description: 'Ottimo rapporto qualità-prezzo',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      name: 'Prodotto Base',
      price: '€29.99',
      description: 'Perfetto per iniziare',
      image: 'https://via.placeholder.com/300x200'
    }
  ];
}
