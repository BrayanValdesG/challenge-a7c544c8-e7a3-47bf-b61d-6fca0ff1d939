import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  template: '<app-layout><app-header /><app-card title="Welcome"></app-card></app-layout>',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
