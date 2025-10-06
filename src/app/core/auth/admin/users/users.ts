import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-users',
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatIconModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-800">Gestione Utenti</h1>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          Nuovo Utente
        </button>
      </div>

      <mat-card>
        <mat-card-content>
          <table mat-table [dataSource]="users" class="w-full">
            <ng-container matColumnDef="username">
              <th mat-header-cell *matHeaderCellDef>Username</th>
              <td mat-cell *matCellDef="let user">{{user.username}}</td>
            </ng-container>

            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef>Email</th>
              <td mat-cell *matCellDef="let user">{{user.email}}</td>
            </ng-container>

            <ng-container matColumnDef="role">
              <th mat-header-cell *matHeaderCellDef>Ruolo</th>
              <td mat-cell *matCellDef="let user">
                <span class="px-2 py-1 rounded text-sm" 
                      [class.bg-red-100]="user.role === 'Administrator'"
                      [class.text-red-800]="user.role === 'Administrator'"
                      [class.bg-blue-100]="user.role === 'User'"
                      [class.text-blue-800]="user.role === 'User'">
                  {{user.role}}
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Azioni</th>
              <td mat-cell *matCellDef="let user">
                <button mat-icon-button color="primary">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: ``
})
export default class UsersComponent {
  displayedColumns = ['username', 'email', 'role', 'actions'];
  users = [
    { username: 'admin', email: 'admin@oitframe.com', role: 'Administrator' },
    { username: 'user', email: 'user@oitframe.com', role: 'User' },
    { username: 'mario.rossi', email: 'mario.rossi@example.com', role: 'User' }
  ];
}