import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscar',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  search: any;
  constructor(private router: Router) {}

    buscar(search: any) {
    localStorage.setItem('searchWord', search);
    this.router.navigate(['/results']);

  }
}
