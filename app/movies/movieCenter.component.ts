import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  template: `
    <h2>MOVIES</h2>
    <router-outlet></router-outlet>
    `,
  providers: [ MoviesService ]
})
export class MovieCenterComponent { }