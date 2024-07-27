import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http: HttpClient) { }
  private apiUrl = "http://ec2-3-144-124-56.us-east-2.compute.amazonaws.com/backQuienloquiere/";
  private validateUser =  this.apiUrl + 'user/login?_format=json';
  private registerUser =  this.apiUrl + 'jsonapi/user/user';
  private logoutUser =  this.apiUrl + 'user/logout';
  private statusUser =  this.apiUrl + 'user/login_status?_format=json';
  private exitUser =  this.apiUrl + 'user/logout?_format=json&token=';
  private newProduct = this.apiUrl + 'jsonapi/node/productos';
  private headers = new HttpHeaders({
    'Content-Type': 'application/vnd.api+json'
  });
  private headersToken: HttpHeaders | undefined;
  validateUserFunction(user:any,pass:any) {
    const data = {
      "name": user,
      "pass": pass
    }
    return this.http.post(this.validateUser, data, { headers: this.headers,withCredentials: true  });
  }

  registerUserFunction(user:any,pass:any, email:any, avatar:any) {
    const dataTem = {
      type: "user--user",
      attributes: {
        name: user,
        mail: email,
        pass: pass,
        status:1,
        field_avatar:avatar
      }
    }
    const userData = {
      data:dataTem
    }
    const base64Credentials = btoa('creador' + ':' + 'D9yVmh4yVcRP2Be');
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials,
      'Content-Type': 'application/vnd.api+json'
    });
    return this.http.post(this.registerUser, userData, { headers:headers,withCredentials: true  });
  }

  logoutUserFunction() {
console.log('logoutUserFunction');
      const logoutToken = localStorage.getItem('csrf_token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      // @ts-ignore
      const params = new HttpParams().set('_format', 'json').set('csrf_token', logoutToken);
      return this.http.post<any>( this.logoutUser, {}, { headers, params ,withCredentials: true });

    }

  createEventFunction(data: any){
    const username = localStorage.getItem('user');
    const password =  localStorage.getItem('pass');
    const token =  localStorage.getItem('csrf_token');
    const base64Credentials = btoa(username + ':' + password);
    if (token !== null) {
      this.headersToken = new HttpHeaders({
        'Authorization': 'Basic ' + base64Credentials,
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token': token
      });
    }
    return this.http.post(this.newProduct, data, { headers: this.headersToken,withCredentials: true  });

  }
}

