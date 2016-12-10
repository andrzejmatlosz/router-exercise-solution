import { Injectable }       from '@angular/core';

@Injectable() 
export class UserService {
    isLogged: boolean = false;

    login () {
        this.isLogged = true;
    }
}