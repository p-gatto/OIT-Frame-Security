import { Component, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { product } from './models/product.model';
import { productsList } from './data/products.data';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatButtonModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">I Nostri Prodotti</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of products(); track product.id) {
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
  products = signal<product[]>(productsList);
}