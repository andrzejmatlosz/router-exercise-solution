
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { CarRoutingModule } from './car-routing.module';

import { CarsService } from './cars.service';

import { CarListComponent } from './carList.component';
import { CarDetailsComponent } from './carDetails.component';

@NgModule({
    imports: [ 
        CommonModule, 
        CarRoutingModule
    ],
    declarations: [ 
        CarListComponent,
        CarDetailsComponent
    ],
    exports: [ CarListComponent ],
    providers: [ CarsService ]
})
export class CarModule {
}