import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card',
  template: '<div class="card">{{ title }}</div>',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = 'Card';
}
