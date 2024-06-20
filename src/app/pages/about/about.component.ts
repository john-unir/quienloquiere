import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "../../components/header/header.component";
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [RouterModule, HeaderComponent, MenuComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}

