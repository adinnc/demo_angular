import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubnavComponent } from './subnav/subnav.component';

@NgModule({
  imports: [SidebarComponent, SubnavComponent],
  exports: [SidebarComponent, SubnavComponent]
})
export class SharedComponentsModule { }
