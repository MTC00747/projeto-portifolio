import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './Views/menu-bar/menu-bar.component';
import { HomeComponent } from './views/home/home.component';
import { CardTituloComponent } from './views/card-titulo/card-titulo.component';
import { SobreMimComponent } from './views/sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    CardTituloComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
