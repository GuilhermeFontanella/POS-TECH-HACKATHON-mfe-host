import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TimerService } from '../../core/services/timer.service';


@Component({
    selector: 'app-pomodoro-display',
    templateUrl: './pomodoro-display.component.html',
    styleUrls: ['./pomodoro-display.component.scss'],
    providers: [MessageService]
})
export class PomodoroDisplayComponent {
  focusRemaining$ = this.timerService.focusRemaining$;
  pauseRemaining$ = this.timerService.pauseRemaining$;
  isDisabledStartFocusButton: boolean = false;
  idDisabledStartPauseButton: boolean = false;

  constructor(
    private timerService: TimerService
  ) {}

  startFocusTime() {
    this.isDisabledStartFocusButton = true;
    this.idDisabledStartPauseButton = false;
    this.timerService.startFocusTime();
  }

  format(seconds: number | null) {
    console.log(seconds)
    if (!seconds) return;

    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2,'0')}`;
    
  }

  resetFocusTime() {
    this.isDisabledStartFocusButton = false;
    this.idDisabledStartPauseButton = false;
    this.timerService.resetFocusTime();
  }

  startPauseTime() {
    this.idDisabledStartPauseButton = true;
    this.isDisabledStartFocusButton = false;
    this.timerService.startPauseTime();
  }

  resetPauseTime() {
    this.idDisabledStartPauseButton = false;
    this.isDisabledStartFocusButton = false;
    this.timerService.resetPauseTime();
  }
}
