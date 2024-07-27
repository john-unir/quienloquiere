import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private name: any;
  private pass: any;
  private email: any;
  correo: any;
  private error: any;

  constructor(private quienloquiereApiService:ApiService, private router: Router) { }

   createUser():void{
    this.name = (document.getElementById('name') as HTMLInputElement).value;
    this.pass = (document.getElementById('password') as HTMLInputElement).value;
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.correo = (document.getElementById('email') as HTMLInputElement).value;

    this.quienloquiereApiService.registerUserFunction(this.name,this.pass,this.email, this.correo,'')
      .subscribe(
        (data:any) => { // Success
          console.log(data)
          alert('SE CRE0 CON EXITO EN QUIENLOQUIERE');
          this.router.navigate(['/home']);
        },
        (error) => {
          this.error=error.error;
          let errorMessage = '';
          this.error.errors.forEach((error: { detail: string; }) => {
            errorMessage += error.detail + '\n';
          });
          alert(errorMessage);
        }
      );
  }
}
