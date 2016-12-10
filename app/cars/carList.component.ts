import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from './cars.service';

@Component({
    selector: 're-car-list',
    templateUrl: 'app/cars/carList.component.html'
})
export class CarListComponent {
    
    cars: Array<{id, model, name}>;

    constructor (private router: Router, private carsService: CarsService) {
        this.cars = carsService.getCars();
    }

    selectCar (car) {
        this.router.navigate(['/car', car.id]);
    }
}