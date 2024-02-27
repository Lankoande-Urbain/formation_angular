import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService);
  movies: any = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovie().subscribe({
      next: (res: any) => {
        this.movies = res.results;
        // console.log(res.results);
      },
      error: (error) =>
        console.log("Erreur rencontrer avec l'appel de l'Api", error),
    });
  }
}
