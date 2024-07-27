import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink]
})
export class GridCardsComponent implements OnInit {
  products: any[] = [];
  readonly API = 'http://ec2-3-144-124-56.us-east-2.compute.amazonaws.com/backQuienloquiere/productosAll';
  user: any;

  constructor(private http: HttpClient, private router: Router) {}


  transformCategory(category: any): string {
    if (typeof category === 'string') {
      return category.toLowerCase().replace(/\s+/g, '_');
    }
    return '';
  }


  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get<any>(`${this.API}`, {
      headers: {
        'Authorization': 'Basic ',
        'Content-Type': 'application/json'
      }
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

  verDetalles(product: any) {
    this.user = localStorage.getItem('user');
    if(this.user){
      localStorage.setItem('producto', JSON.stringify(product));
      this.router.navigate(['/details']);
    } else {
      this.router.navigate(['/login']);
    }

  }
}

