import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppGridComponent, AppGridItem } from 'projects/shared-components/src/lib/app-grid/app-grid.component';
import { SubnavComponent, SubnavItem } from 'projects/shared-components/src/lib/subnav/subnav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AppGridComponent, SubnavComponent, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFavorites = false;
  activeView = 'all';
  viewMode: 'icon' | 'info' = 'icon';
  searchText: string = '';

  subnavItems: SubnavItem[] = [
    {
      label: 'All Apps',
      icon: 'apps',
      action: () => this.setActiveView('all')
    },
    {
      label: 'Favorites',
      icon: 'star',
      badge: {
        value: 4,
        color: 'accent'
      },
      action: () => this.setActiveView('favorites')
    },
    {
      label: 'Recent',
      icon: 'history',
      action: () => this.setActiveView('recent')
    },
    {
      label: 'Categories',
      icon: 'category',
      disabled: true
    }
  ];

  apps: AppGridItem[] = [
    { 
      name: 'Analytics', 
      icon: 'analytics', 
      color: 'blue', 
      isFavorite: false,
      info: 'Real-time analytics and reporting dashboard with customizable metrics and data visualization tools.'
    },
    { 
      name: 'Calendar', 
      icon: 'calendar_today', 
      color: 'red', 
      isFavorite: true,
      info: 'Schedule management with team sync, event reminders, and resource booking capabilities.'
    },
    { 
      name: 'Messages', 
      icon: 'chat', 
      color: 'green', 
      isFavorite: true,
      info: 'Secure instant messaging with file sharing, thread organization, and team channels.'
    },
    { 
      name: 'Files', 
      icon: 'folder', 
      color: 'orange', 
      isFavorite: false,
      info: 'Cloud storage with version control, file sharing, and collaborative document editing.'
    },
    { 
      name: 'Settings', 
      icon: 'settings', 
      color: 'purple', 
      isFavorite: false,
      info: 'System configuration and user preferences management with role-based access control.'
    },
    { 
      name: 'Tasks', 
      icon: 'task_alt', 
      color: 'teal', 
      isFavorite: true,
      info: 'Task management with priority tracking, deadlines, and team assignment features.'
    },
    { 
      name: 'Reports', 
      icon: 'description', 
      color: 'blue', 
      isFavorite: false,
      info: 'Comprehensive reporting tools with export options and automated report generation.'
    },
    { 
      name: 'Teams', 
      icon: 'groups', 
      color: 'red', 
      isFavorite: false,
      info: 'Team management with org charts, roles, and collaboration tools.'
    },
    { 
      name: 'Projects', 
      icon: 'work', 
      color: 'green', 
      isFavorite: true,
      info: 'Project management with timelines, resource allocation, and milestone tracking.'
    },
    { 
      name: 'Support', 
      icon: 'help', 
      color: 'purple', 
      isFavorite: false,
      info: 'Help desk with ticket management, knowledge base, and live chat support.'
    },
    { 
      name: 'Security', 
      icon: 'security', 
      color: 'orange', 
      isFavorite: false,
      info: 'Security controls with audit logs, access management, and compliance reporting.'
    },
    { 
      name: 'Backup', 
      icon: 'backup', 
      color: 'teal', 
      isFavorite: false,
      info: 'Automated backup system with versioning, recovery options, and storage management.'
    }
  ];

  get filteredApps(): AppGridItem[] {
    let filtered = this.apps;
    if (this.searchText) {
      const term = this.searchText.toLowerCase();
      filtered = filtered.filter(a => a.name.toLowerCase().includes(term) || (a.info && a.info.toLowerCase().includes(term)));
    }
    switch (this.activeView) {
      case 'favorites':
        filtered = filtered.filter(a => a.isFavorite);
        break;
      case 'recent':
        // Implement recent if needed. For now same as all.
        break;
      default:
        break;
    }
    return filtered;
  }

  toggleShowFavorites() {
    this.showFavorites = !this.showFavorites;
    this.searchText = '';
  }

  setActiveView(view: string) {
    this.activeView = view;
    this.showFavorites = view === 'favorites';
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'icon' ? 'info' : 'icon';
  }

  onFavoriteToggled(app: AppGridItem) {
    app.isFavorite = !app.isFavorite;
    // reset filter or not
  }
}
