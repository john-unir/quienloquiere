import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {ApiService} from "../../api.service";
import {BuscarComponent} from "../buscar/buscar.component";

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
  standalone: true,
    imports: [HttpClientModule, CommonModule, RouterLink, HeaderComponent, BuscarComponent]
})
export class MyProductsComponent implements OnInit {
  products: any[] = [];
  readonly API = 'http://ec2-3-144-124-56.us-east-2.compute.amazonaws.com/backQuienloquiere/productos';
  private deleteProduct =  this.API + 'jsonapi/node/productos/';
  private headersToken: HttpHeaders | undefined;
  constructor(private http: HttpClient, private quienloquiereApiService:ApiService, private router: Router) {}



  transformCategory(category: any): string {
    if (typeof category === 'string') {
      return category.toLowerCase().replace(/\s+/g, '_');
    }
    return '';
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {

    const username = localStorage.getItem('user');
    const password =  localStorage.getItem('pass');
    const base64Credentials = btoa(username + ':' + password);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials,
      'Content-Type': 'application/json'
    });

    this.http.get<any>(`${this.API}`, {
      headers
    }).subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }


  delete(nid: number) {
    this.quienloquiereApiService.deleteProductos(nid)
      .subscribe(
        (data:any) => { // Success
          this.loadProducts()
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

