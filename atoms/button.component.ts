import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-button',
  template: '<button class="button">{{ text }}</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  text = 'Button';
}
