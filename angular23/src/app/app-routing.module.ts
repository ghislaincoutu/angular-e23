import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ListeSommaireComponent } from './liste-sommaire/liste-sommaire.component';
import { ListeDetailleeComponent } from './liste-detaillee/liste-detaillee.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste-sommaire', component: ListeSommaireComponent },
  { path: 'liste-detaillee', component: ListeDetailleeComponent },
  { path: 'fiche', component: FicheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
