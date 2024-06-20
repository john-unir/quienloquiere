import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgIf} from "@angular/common";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  user: string | null;
  constructor(private quienloquiereApiService:ApiService, private router: Router) {

    this.user = localStorage.getItem('user')
    console.log(this.user)
  }

  logoutUser() {
    this.quienloquiereApiService.logoutUserFunction().subscribe(
      response => {
        // localStorage.clear();
        this.router.navigate(['/']);
        console.log('Sesión cerrada exitosamente');
      },
      error => {
        console.error('Error al cerrar sesión:', error);
      }
    );
  }
}
