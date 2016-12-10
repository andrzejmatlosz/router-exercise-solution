
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../core/authGuard.service';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
    { 
        path: '', 
        component: AdminComponent, 
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [ 
        CommonModule, 
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [ 
        AdminComponent,
    ],
    exports: [ RouterModule ],
})
export class AdminModule {
}