import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarItem } from '@demo/shared-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-container">
      <app-sidebar
        [items]="menuItems"
        [headerText]="'Navigation'"
        [theme]="'light'"
        (itemSelected)="onItemSelected($event)"
        (collapseStateChanged)="onCollapseStateChanged($event)"
      ></app-sidebar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
    }
    .main-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  menuItems: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Users',
      icon: 'people',
      route: '/users'
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    },
    {
      label: 'Help',
      icon: 'help',
      route: '/help',
      disabled: true
    }
  ];

  onItemSelected(item: SidebarItem): void {
    console.log('Selected item:', item);
  }

  onCollapseStateChanged(isCollapsed: boolean): void {
    console.log('Sidebar collapsed:', isCollapsed);
  }
}
