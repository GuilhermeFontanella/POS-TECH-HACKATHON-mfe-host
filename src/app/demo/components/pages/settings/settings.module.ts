import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
    ],
    declarations: [SettingsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
