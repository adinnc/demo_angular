import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AppGridComponent, AppGridItem } from '@demo/shared-components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, AppGridComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFavorites = false;

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

  toggleShowFavorites() {
    this.showFavorites = !this.showFavorites;
  }

  onFavoriteToggled(app: AppGridItem) {
    app.isFavorite = !app.isFavorite;
  }
}