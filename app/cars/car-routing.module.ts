
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarListComponent } from './carList.component';
import { CarDetailsComponent } from './carDetails.component';

const carsRoutes: Routes = [
  { path: 'cars',  component: CarListComponent },
  { path: 'car/:id', component: CarDetailsComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(carsRoutes)
    ],
    exports: [ 
        RouterModule
    ]
})
export class CarRoutingModule { }