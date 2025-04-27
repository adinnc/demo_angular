import { Injectable } from '@angular/core';
import { SidebarItem } from '@demo/shared-components';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: SidebarItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'people', label: 'Users', route: '/users' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'help', label: 'Help', route: '/help' }
  ];

  getMenuItems(): SidebarItem[] {
    return this.menuItems;
  }
} 