import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { CardComponent } from './molecules/card/card.component';
import { HeaderComponent } from './organisms/header/header.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

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