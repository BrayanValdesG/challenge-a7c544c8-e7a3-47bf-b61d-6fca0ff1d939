import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  template: '<header class="header"><app-button class="header__action" text="Go" /></header>',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
