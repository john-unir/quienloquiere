import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [RouterModule, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}

