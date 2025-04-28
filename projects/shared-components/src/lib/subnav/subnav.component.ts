import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

export interface SubnavItem {
  label: string;
  icon?: string;
  route?: string;
  action?: () => void;
  disabled?: boolean;
  badge?: {
    value: string | number;
    color?: 'primary' | 'accent' | 'warn' | string;
  };
}

/**
 * A reusable sub-navigation component that displays horizontal tabs with optional icons and badges.
 * 
 * @example
 * ```html
 * <app-subnav
 *   [items]="subnavItems"
 *   [showIcons]="true"
 *   (itemSelected)="onSubnavItemSelected($event)"
 * ></app-subnav>
 * ```
 */
@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubnavComponent {
  /**
   * Array of navigation items to display in the subnav
   */
  @Input() items: SubnavItem[] = [];

  /**
   * Whether to show icons in the tabs
   */
  @Input() showIcons = true;

  /**
   * Index of the currently active item
   */
  @Input() activeItemIndex = 0;

  /**
   * Whether to stretch tabs to fill the available width
   */
  @Input() stretchTabs = false;

  /**
   * Theme of the subnav ('light' or 'dark')
   */
  @Input() theme: 'light' | 'dark' = 'light';
  
  /**
   * Emits when a subnav item is selected
   */
  @Output() itemSelected = new EventEmitter<SubnavItem>();

  handleItemClick(item: SubnavItem, index: number): void {
    if (item.disabled) return;
    
    this.activeItemIndex = index;
    this.itemSelected.emit(item);
    
    if (item.action) {
      item.action();
    }
  }

  getAriaLabel(item: SubnavItem): string {
    return `${item.label}${item.disabled ? ' (disabled)' : ''}`;
  }
}
