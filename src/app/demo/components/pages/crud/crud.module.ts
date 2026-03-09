import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';

@NgModule({
    imports: [
        CommonModule,
        CrudRoutingModule,
    ],
    declarations: [CrudComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrudModule { }
