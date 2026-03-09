import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PomodoroComponent } from './pomodoro.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PomodoroComponent }
	])],
	exports: [RouterModule]
})
export class PomodoroRoutingModule { }
