import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  template: '<header class="header"><app-button text="Go"></app-button></header>',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
