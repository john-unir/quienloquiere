import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {GridCardsComponent} from "../../components/grid-cards/grid-cards.component";
import {BuscarComponent} from "../../components/buscar/buscar.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        GridCardsComponent,
        BuscarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
