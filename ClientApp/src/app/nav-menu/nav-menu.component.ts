import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isOpen = false;
  dark = true;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onOpen() {
    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      console.log('Menu is already open')
    }
  }

  onClose() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      console.log('Menu is already closed')
    }
  }

  onDark() {
    this.dark = !this.dark;
  }

  login() {
    console.log('Login button clicked');
  }
}

