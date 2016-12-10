
import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ActorRoutingModule } from './actors/actor-routing.module';
import { CarRoutingModule } from './cars/car-routing.module';
import { MovieRoutingModule } from './movies/movie-routing.module';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { AuthGuard } from './core/authGuard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuard], },
//   { path: 'movies', loadChildren: 'app/movies/movie.module#MovieModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        //ActorRoutingModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }