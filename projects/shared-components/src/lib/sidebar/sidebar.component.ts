import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

export interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  action?: () => void;
  disabled?: boolean;
}

/**
 * A reusable sidebar component with support for navigation items, themes, and collapsible state.
 * 
 * @example
 * ```html
 * <app-sidebar
 *   [items]="menuItems"
 *   [theme]="'light'"
 *   [headerText]="'Navigation'"
 *   (itemSelected)="onItemSelected($event)"
 *   (collapseStateChanged)="onCollapseStateChanged($event)"
 * ></app-sidebar>
 * ```
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  /**
   * Array of navigation items to display in the sidebar
   */
  @Input() items: SidebarItem[] = [];

  /**
   * Whether the sidebar is collapsed
   */
  @Input() isCollapsed = false;

  /**
   * Text to display in the sidebar header
   */
  @Input() headerText = '';

  /**
   * Theme of the sidebar ('light' or 'dark')
   */
  @Input() theme: 'light' | 'dark' = 'light';

  /**
   * Index of the currently active item
   */
  @Input() activeItemIndex = 0;
  
  /**
   * Emits when a sidebar item is selected
   */
  @Output() itemSelected = new EventEmitter<SidebarItem>();

  /**
   * Emits when the collapse state changes
   */
  @Output() collapseStateChanged = new EventEmitter<boolean>();

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapseStateChanged.emit(this.isCollapsed);
  }

  handleItemClick(item: SidebarItem, index: number): void {
    if (item.disabled) return;
    
    this.activeItemIndex = index;
    this.itemSelected.emit(item);
    
    if (item.action) {
      item.action();
    }
  }

  getAriaLabel(item: SidebarItem): string {
    return `${item.label}${item.disabled ? ' (disabled)' : ''}`;
  }
}
