import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Users</h1>
    <p>Manage your users here.</p>
  `
})
export class UsersComponent { } 