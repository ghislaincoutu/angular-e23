import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: false
})
export class AccueilComponent {
  envTitle = environment.envTitle;
  envURL = environment.envURL;

}
