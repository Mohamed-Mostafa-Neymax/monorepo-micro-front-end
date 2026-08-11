import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SIDEBAR_ITEMS } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isSidebarOpened = signal(true);
  sidebarItems = SIDEBAR_ITEMS;


  onToggleSideMenu(drawer: MatDrawer) {
    drawer.toggle();
    this.isSidebarOpened.update(prevState => !prevState);
  }
}
