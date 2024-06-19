import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule]
})
export class GridCardsComponent implements OnInit {
  movies: any[] = [];
  readonly IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  readonly API = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    const path = '/movie/popular';
    this.http.get<any>(`${this.API}${path}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2I4Y2RjOWE1YzJjMDVhOWQ1MDEwY2IwNDliZGJjMyIsInN1YiI6IjY1Yjk2Yzk4OTBmY2EzMDE2MjA2NzI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19XQpsHln1L_nz9EnGZsbWot4oYBWydeBo3FJH3D6Fk',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.error('Error loading the movies:', error);
      }
    });
  }

  getImgUrl(path: string): string {
    return `${this.IMG_BASE_URL}${path}`;
  }
}

