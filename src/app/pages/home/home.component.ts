import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {GridCardsComponent} from "../../components/grid-cards/grid-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    GridCardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
