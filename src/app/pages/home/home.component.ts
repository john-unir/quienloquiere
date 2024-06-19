import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {GridCardsComponent} from "../../components/grid-cards/grid-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    GridCardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
