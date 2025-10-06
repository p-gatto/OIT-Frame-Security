import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="max-w-4xl mx-auto space-y-6">
      <h1 class="text-3xl font-bold text-gray-800">Contattaci</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Invia un messaggio</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Nome</mat-label>
                <input matInput formControlName="name">
                <mat-icon matPrefix>person</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Email</mat-label>
                <input matInput type="email" formControlName="email">
                <mat-icon matPrefix>email</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Messaggio</mat-label>
                <textarea matInput rows="5" formControlName="message"></textarea>
              </mat-form-field>

              <button mat-raised-button color="primary" type="submit" [disabled]="contactForm.invalid">
                Invia Messaggio
              </button>
            </form>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Informazioni di contatto</mat-card-title>
          </mat-card-header>
          <mat-card-content class="space-y-4">
            <div class="flex items-start space-x-3">
              <mat-icon class="text-blue-600">location_on</mat-icon>
              <div>
                <p class="font-semibold">Indirizzo</p>
                <p class="text-gray-600">Via Example 123, 20900 Monza (MB)</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <mat-icon class="text-blue-600">phone</mat-icon>
              <div>
                <p class="font-semibold">Telefono</p>
                <p class="text-gray-600">+39 039 123 4567</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <mat-icon class="text-blue-600">email</mat-icon>
              <div>
                <p class="font-semibold">Email</p>
                <p class="text-gray-600">info@oitframe.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <mat-icon class="text-blue-600">schedule</mat-icon>
              <div>
                <p class="font-semibold">Orari</p>
                <p class="text-gray-600">Lun-Ven: 9:00 - 18:00</p>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: ``
})
export default class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Messaggio inviato con successo!');
      this.contactForm.reset();
    }
  }
}
