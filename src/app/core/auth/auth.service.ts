import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, Observable, of, tap, throwError } from 'rxjs';

import { LoginResponse } from './models/login-response.model';
import { CurrentUser } from './models/current-user.model';
import { LoginRequest } from './models/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'https://localhost:7070/api';
  private readonly TOKEN_KEY = 'auth_token';

  http = inject(HttpClient);
  router = inject(Router);

  currentUser = signal<CurrentUser | null>(null);
  isAuthenticated = signal<boolean>(false);
  isAdmin = signal<boolean>(false);

  constructor() {
    this.checkAuthStatus();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    console.log('AuthService: Invio richiesta login a:', `${this.API_URL}/auth/login`);
    console.log('AuthService: Credenziali:', { username: credentials.username, password: '***' });

    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, credentials)
      .pipe(
        tap(response => {
          console.log('AuthService: Risposta ricevuta:', response);
          this.saveToken(response.token);
          this.setUserInfo(response);
          this.isAuthenticated.set(true);
          this.isAdmin.set(response.roles.includes('Administrator'));
          console.log('AuthService: Token salvato e stato aggiornato');
        }),
        catchError(error => {
          console.error('AuthService: Errore login:', error);
          console.error('AuthService: Status:', error.status);
          console.error('AuthService: Error body:', error.error);
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    console.log('AuthService: Logout');
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.isAdmin.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`${this.API_URL}/auth/me`)
      .pipe(
        tap(user => {
          console.log('AuthService: Utente corrente:', user);
          this.currentUser.set(user);
          this.isAuthenticated.set(true);
          this.isAdmin.set(user.roles.includes('Administrator'));
        }),
        catchError((error) => {
          console.error('AuthService: Errore recupero utente corrente:', error);
          this.logout();
          return of({} as CurrentUser);
        })
      );
  }

  private saveToken(token: string): void {
    console.log('AuthService: Salvataggio token');
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setUserInfo(response: LoginResponse): void {
    const user: CurrentUser = {
      id: 0,
      username: response.username,
      email: response.email,
      firstName: response.firstName,
      lastName: response.lastName,
      roles: response.roles
    };
    console.log('AuthService: Impostazione info utente:', user);
    this.currentUser.set(user);
  }

  private checkAuthStatus(): void {
    const token = this.getToken();
    console.log('AuthService: Verifica stato autenticazione, token presente:', !!token);
    if (token) {
      this.getCurrentUser().subscribe();
    }
  }

  hasRole(role: string): boolean {
    const user = this.currentUser();
    return user ? user.roles.includes(role) : false;
  }

}