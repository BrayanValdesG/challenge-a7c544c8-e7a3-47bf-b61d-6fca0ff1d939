import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-button',
  template: '<button type="button" class="button">{{ text }}</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text = 'Button';
}
