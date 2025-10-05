import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <!-- Contenuto di default se non usi il routing -->
    <div class="default-content">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        Benvenuto nell'applicazione
      </h1>
      <p class="text-gray-700 mb-4">
        Questo è il contenuto principale della tua applicazione.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 class="font-semibold mb-2">Card 1</h3>
          <p class="text-gray-600">Contenuto della card</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 class="font-semibold mb-2">Card 2</h3>
          <p class="text-gray-600">Contenuto della card</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 class="font-semibold mb-2">Card 3</h3>
          <p class="text-gray-600">Contenuto della card</p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export default class HomeComponent {

}
