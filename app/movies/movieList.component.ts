import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
    selector: 're-movie-list',
    templateUrl: 'app/movies/movieList.component.html'
})
export class MovieListComponent {

    movies: Array<{id, title, director}>;

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
        this.movies = moviesService.getMovies();
    }

    selectMovie (movie) {
        this.router.navigate([movie.id], { relativeTo: this.activatedRoute });
    }

}