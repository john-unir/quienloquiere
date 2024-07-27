import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgForOf } from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'] // Cambiado de styleUrl a styleUrls
})
export class ResultsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  readonly API = 'http://ec2-3-144-124-56.us-east-2.compute.amazonaws.com/backQuienloquiere/productosAll';
  user: any;
  searchWord: string | null = '';
  search: any;

  constructor(private http: HttpClient, private router: Router) {}

  transformCategory(category: any): string {
    if (typeof category === 'string') {
      return category.toLowerCase().replace(/\s+/g, '_');
    }
    return '';
  }

  ngOnInit() {
    this.searchWord = localStorage.getItem('searchWord');
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any>(`${this.API}`, {
      headers: {
        'Authorization': 'Basic ',
        'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (data) => {
        this.products = data;
        this.filterProducts();
        console.log(this.filteredProducts);
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  filterProducts() {
    if (this.searchWord) {
      this.filteredProducts = this.products.filter(product =>
        product.title && product.title.toLowerCase().includes(this.searchWord!.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  verDetalles(product: any) {
    this.user = localStorage.getItem('user');
    if (this.user) {
      localStorage.setItem('producto', JSON.stringify(product));
      this.router.navigate(['/details']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  buscar(search: any) {
    this.searchWord = search;
    this.loadProducts()
  }
}
