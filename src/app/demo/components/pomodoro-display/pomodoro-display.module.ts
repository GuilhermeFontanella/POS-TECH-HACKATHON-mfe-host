import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroDisplayComponent } from './pomodoro-display.component';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        DividerModule,
        AccordionModule,
        FormsModule,
        InputNumberModule,
        ToastModule,
        TooltipModule,
        ButtonModule
    ],
    exports: [
        PomodoroDisplayComponent
    ],
    declarations: [PomodoroDisplayComponent],
})
export class PomodoroDisplayModule { }
