import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ListeSommaireComponent } from './liste-sommaire/liste-sommaire.component';
import { ListeDetailleeComponent } from './liste-detaillee/liste-detaillee.component';
import { FicheComponent } from './fiche/fiche.component';
import { Transform01Pipe } from './transform01.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ListeSommaireComponent,
    ListeDetailleeComponent,
    FicheComponent,
    Transform01Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
