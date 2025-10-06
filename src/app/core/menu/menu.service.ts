import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { MenuItem } from './models/menu-item.model';
import { MenuResponse } from './models/menu-response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  http = inject(HttpClient);

  private readonly API_URL = 'https://localhost:7070/api';

  backOfficeItems = signal<MenuItem[]>([]);
  frontOfficeItems = signal<MenuItem[]>([]);

  constructor() { }

  loadUserMenu(): Observable<MenuResponse> {
    return this.http.get<MenuResponse>(`${this.API_URL}/menu/user`)
      .pipe(
        tap(response => {
          this.backOfficeItems.set(response.backOfficeItems);
          this.frontOfficeItems.set(response.frontOfficeItems);
        })
      );
  }

  clearMenu(): void {
    this.backOfficeItems.set([]);
    this.frontOfficeItems.set([]);
  }

}