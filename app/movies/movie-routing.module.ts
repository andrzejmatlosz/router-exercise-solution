
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movieList.component';
import { MovieDetailsComponent } from './movieDetails.component';
import { MovieHomeComponent } from './movieHome.component';
import { MovieCenterComponent } from './movieCenter.component';

const movieRoutes: Routes = [
  {
    path: 'movies',
    component: MovieCenterComponent,
    children: [
      {
        path: '',
        component: MovieListComponent,
        children: [
          {
            path: ':id',
            component: MovieDetailsComponent,
          },
          {
            path: '',
            component: MovieHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(movieRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }