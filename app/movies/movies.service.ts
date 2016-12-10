import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
    movies: Array<{id, title, director}> = [
        { id: 1, title: 'Terminator', director: 'Some awesome person' },
        { id: 2, title: 'Sully', director: 'Clint Eastwood' },
        { id: 3, title: 'The Godfather', director: 'Francis Ford Coppola' }
    ];

    getMovies () : Array<{id, title, director}> {
        return this.movies;
    }

    getMovie (id: number) : {id, title, director} {
        return this.movies.filter(movie => movie.id === id)[0];
    }
}