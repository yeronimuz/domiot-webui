import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { EventqueueModule } from '@domiot/ui/eventqueue';
import { AuthModule } from '@domiot/data-access/authorization';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, EventqueueModule, AuthModule, MatMenu, RouterLink, MatButton, RouterLinkActive, MatMenuTrigger, MatMenuItem, RouterOutlet],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
