import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "../../components/header/header.component";
import {BuscarComponent} from "../../components/buscar/buscar.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [RouterModule, HeaderComponent, BuscarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}

