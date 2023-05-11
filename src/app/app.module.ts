import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './Views/menu-bar/menu-bar.component';
import { HomeComponent } from './Views/home/home.component';
import { CardTituloComponent } from './Views/card-titulo/card-titulo.component';
import { SobreMimComponent } from './Views/sobre-mim/sobre-mim.component';
import { CardSkillsComponent } from './Views/card-skills/card-skills.component';
import { PortifolioComponent } from './Views/portifolio/portifolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    CardTituloComponent,
    SobreMimComponent,
    CardSkillsComponent,
    PortifolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
