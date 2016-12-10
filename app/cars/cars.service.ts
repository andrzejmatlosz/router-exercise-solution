import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
    cars: Array<{id, model, name}> = [
        { id: 1, model: 'Audi', name: 'A3' },
        { id: 2, model: 'Mitshubishi', name: 'Lancer' },
        { id: 3, model: 'Renault', name: 'Talisman' },
        { id: 4, model: 'Alfa Romeo', name: 'Gulia' }
    ];

    getCars () : Array<{id, model, name}> {
        return this.cars;
    }

    getCar (id: number) : {id, model, name} {
        return this.cars.filter(car => car.id === id)[0];
    }
}