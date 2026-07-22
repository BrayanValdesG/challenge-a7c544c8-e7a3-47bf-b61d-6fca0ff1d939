import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button class="button">{{ text }}</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  text = 'Button';
}