import { Component } from '@angular/core';
import { UserService } from './../core/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 're-login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router, private userService: UserService) {}
    
    login () {
        this.userService.login();
        this.router.navigate(['/home']);
    }
}