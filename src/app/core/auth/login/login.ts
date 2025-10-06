import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from '../auth.service';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <mat-card class="w-full max-w-md shadow-xl">
        <mat-card-header class="flex flex-col items-center pb-6 pt-4">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <mat-icon class="text-white text-4xl">lock</mat-icon>
          </div>
          <mat-card-title class="text-3xl font-bold text-gray-800">OIT Frame</mat-card-title>
          <mat-card-subtitle class="text-gray-600">Accedi al sistema</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content class="px-6 pb-6">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
            @if (errorMessage()) {
              <div class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm flex items-start gap-2">
                <mat-icon class="text-red-500">error</mat-icon>
                <span>{{ errorMessage() }}</span>
              </div>
            }

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Username</mat-label>
              <input 
                matInput 
                formControlName="username" 
                autocomplete="username"
                placeholder="Inserisci username">
              <mat-icon matPrefix class="text-gray-400">person</mat-icon>
              @if (loginForm.get('username')?.invalid && loginForm.get('username')?.touched) {
                <mat-error>Username obbligatorio</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Password</mat-label>
              <input 
                matInput 
                [type]="hidePassword() ? 'password' : 'text'" 
                formControlName="password"
                autocomplete="current-password"
                placeholder="Inserisci password">
              <mat-icon matPrefix class="text-gray-400">lock</mat-icon>
              <button 
                mat-icon-button 
                matSuffix 
                type="button"
                (click)="hidePassword.set(!hidePassword())"
                [attr.aria-label]="'Mostra password'"
                [attr.aria-pressed]="!hidePassword()">
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
                <mat-error>Password obbligatoria</mat-error>
              }
            </mat-form-field>

            <button 
              mat-raised-button 
              color="primary" 
              type="submit"
              [disabled]="loginForm.invalid || isLoading()"
              class="w-full h-12 text-base font-medium">
              @if (isLoading()) {
                <mat-spinner diameter="20" class="inline-block mr-2"></mat-spinner>
                <span>Accesso in corso...</span>
              } @else {
                <span>Accedi</span>
              }
            </button>
          </form>

          <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p class="text-xs font-semibold text-blue-800 mb-2">Credenziali di test:</p>
            <div class="text-xs text-blue-700 space-y-1">
              <p><strong>Admin:</strong> admin / Admin123!</p>
              <p><strong>User:</strong> user / User123!</p>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export default class Login {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  menuService = inject(MenuService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  loginForm: FormGroup;

  hidePassword = signal(true);
  isLoading = signal(false);
  errorMessage = signal('');

  private returnUrl: string = '/';

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.errorMessage.set('');

      console.log('Tentativo di login con:', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.menuService.loadUserMenu().subscribe({
            next: () => {
              console.log('Menu caricato con successo');
              this.router.navigate([this.returnUrl]);
            },
            error: (error) => {
              console.error('Errore caricamento menu:', error);
              // Anche se il menu fallisce, naviga comunque
              this.router.navigate([this.returnUrl]);
            }
          });
        },
        error: (error) => {
          console.error('Errore login completo:', error);
          this.isLoading.set(false);

          // Gestione errori migliorata
          if (error.status === 401) {
            this.errorMessage.set('Username o password non validi');
          } else if (error.status === 0) {
            this.errorMessage.set('Impossibile contattare il server. Verifica che l\'API sia in esecuzione.');
          } else {
            this.errorMessage.set(
              error.error?.message || 'Errore durante l\'accesso. Riprova più tardi.'
            );
          }
        }
      });
    } else {
      // Marca tutti i campi come touched per mostrare gli errori
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

}