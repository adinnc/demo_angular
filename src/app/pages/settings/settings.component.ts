import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Settings</h1>
    <p>Configure your application settings.</p>
  `
})
export class SettingsComponent { } 