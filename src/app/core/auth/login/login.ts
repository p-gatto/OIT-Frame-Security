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
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <mat-card class="w-full max-w-md">
        <mat-card-header class="flex flex-col items-center pb-4">
          <mat-card-title class="text-2xl font-bold">OIT Frame</mat-card-title>
          <mat-card-subtitle>Accedi al sistema</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
            @if (errorMessage()) {
              <div class="bg-red-50 text-red-600 p-3 rounded text-sm">
                {{ errorMessage() }}
              </div>
            }

            <mat-form-field appearance="outline">
              <mat-label>Username</mat-label>
              <input matInput formControlName="username" autocomplete="username">
              <mat-icon matPrefix>person</mat-icon>
              @if (loginForm.get('username')?.invalid && loginForm.get('username')?.touched) {
                <mat-error>Username obbligatorio</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input 
                matInput 
                [type]="hidePassword() ? 'password' : 'text'" 
                formControlName="password"
                autocomplete="current-password">
              <mat-icon matPrefix>lock</mat-icon>
              <button 
                mat-icon-button 
                matSuffix 
                type="button"
                (click)="hidePassword.set(!hidePassword())">
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
              class="w-full py-2">
              @if (isLoading()) {
                <mat-spinner diameter="20" class="inline-block mr-2"></mat-spinner>
              }
              {{ isLoading() ? 'Accesso in corso...' : 'Accedi' }}
            </button>
          </form>

          <div class="mt-4 text-center text-sm text-gray-600">
            <p>Credenziali di test:</p>
            <p><strong>Admin:</strong> admin / Admin123!</p>
            <p><strong>User:</strong> user / User123!</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: ``
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

      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.menuService.loadUserMenu().subscribe({
            next: () => {
              this.router.navigate([this.returnUrl]);
            },
            error: (error) => {
              console.error('Error loading menu:', error);
              this.router.navigate([this.returnUrl]);
            }
          });
        },
        error: (error) => {
          this.isLoading.set(false);
          this.errorMessage.set(
            error.error?.message || 'Errore durante l\'accesso. Verifica le credenziali.'
          );
        }
      });
    }
  }

}