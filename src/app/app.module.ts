import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../../atoms/button.component';
import { CardComponent } from '../../molecules/card.component';
import { HeaderComponent } from '../../organisms/header.component';
import { LayoutComponent } from '../../templates/layout.component';
import { HomeComponent } from '../../pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
