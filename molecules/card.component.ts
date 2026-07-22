import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div class="card">{{ title }}</div>',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = 'Card';
}