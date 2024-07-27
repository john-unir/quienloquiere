import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

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

  constructor(private http: HttpClient) {}

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
        console.error('Error loading the movies:', error);
      }
    });
  }

}

