import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: '<div class="layout"><ng-content></ng-content></div>',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}