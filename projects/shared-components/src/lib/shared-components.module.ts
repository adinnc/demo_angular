import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SharedComponentsModule { } 