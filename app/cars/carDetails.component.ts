import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from './cars.service';

@Component({
    selector: 're-car-details',
    templateUrl: 'app/cars/carDetails.component.html'
})
export class CarDetailsComponent {

    car: {id, model, name};

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private carsService: CarsService) {
        let id: number = +this.activatedRoute.snapshot.params['id'];
        this.car = this.carsService.getCar(id);
    }

    gotoCars() {
        this.router.navigate(['/cars']);
    }
}