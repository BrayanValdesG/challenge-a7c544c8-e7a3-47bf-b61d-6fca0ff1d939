import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  template: `
    <app-layout>
      <app-header />
      <main>
        <app-card title="Welcome" />
      </main>
    </app-layout>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
