
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ActorListComponent } from './actorList.component';

@NgModule({
    imports: [ 
        CommonModule, 
    ],
    declarations: [ 
        ActorListComponent,
    ],
    exports: [ ActorListComponent ]
})
export class ActorModule { }