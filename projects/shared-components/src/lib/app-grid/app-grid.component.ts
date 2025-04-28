import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

export interface AppGridItem {
  name: string;
  icon: string;
  color: string;
  isFavorite: boolean;
  info?: string;
}

@Component({
  selector: 'lib-app-grid',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatRippleModule, MatTooltipModule, MatButtonModule],
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent {
  @Input() items: AppGridItem[] = [];
  @Input() showOnlyFavorites = false;
  @Input() viewMode: 'icon' | 'info' = 'icon';
  @Output() favoriteToggled = new EventEmitter<AppGridItem>();

  get filteredItems() {
    return this.showOnlyFavorites ? this.items.filter(item => item.isFavorite) : this.items;
  }

  onFavoriteClick(item: AppGridItem, event: Event) {
    event.stopPropagation();
    this.favoriteToggled.emit(item);
  }
}
