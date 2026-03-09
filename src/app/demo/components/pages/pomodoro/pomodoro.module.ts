import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroRoutingModule } from './pomodoro-routing.module';
import { PomodoroComponent } from './pomodoro.component';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        PomodoroRoutingModule,
        DividerModule,
        AccordionModule,
        FormsModule,
        InputNumberModule,
        ToastModule
    ],
    declarations: [PomodoroComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PomodoroModule { }
