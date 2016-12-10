import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad, Route
}                           from '@angular/router';
import { UserService }      from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.userService.isLogged) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}
