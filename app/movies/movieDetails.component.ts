import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
    selector: 're-movie-details',
    templateUrl: 'app/movies/movieDetails.component.html'
})
export class MovieDetailsComponent {

    movie: {id, title, director};

    constructor (private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
        this.activatedRoute.params
            .subscribe(params => {
                let id = +params['id'];
                this.movie = this.moviesService.getMovie(id);
            });
    }

    gotoMovies () {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }
}