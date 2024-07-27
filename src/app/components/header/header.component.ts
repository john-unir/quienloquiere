import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {ApiService} from "../../api.service";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: string | null;
  login: boolean | undefined;
  search: any;
  constructor(private quienloquiereApiService:ApiService, private router: Router) {

    this.user = localStorage.getItem('user');

    console.log(this.user)
  }
  logoutUser() {
    localStorage.clear();
    this.user = localStorage.getItem('user');
    this.router.navigate(['/']);
    console.log (this.user)
  }


}
