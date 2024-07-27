import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiService } from "../../api.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "../../components/header/header.component";
import {BuscarComponent} from "../../components/buscar/buscar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HeaderComponent,
    BuscarComponent,
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any;
  pass: any;

  constructor(private fb: FormBuilder, private ApiService:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onSubmit():void{
    this.user = (document.getElementById('email') as HTMLInputElement).value;
    this.pass = (document.getElementById('password') as HTMLInputElement).value;
    this.ApiService.validateUserFunction(this.user,this.pass)
      .subscribe(
        (data:any) => { // Success
          console.log(data)
          if (data){
            localStorage.setItem('csrf_token', data.csrf_token);
            localStorage.setItem('logout_token', data.logout_token);
            this.router.navigate(['/home']);
            if(data.csrf_token){
              localStorage.setItem('user', this.user);
              localStorage.setItem('pass', this.pass);
            }
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }


  get formControls() {
    return this.loginForm.controls;
  }
}
