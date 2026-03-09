import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  focusTime$ = new BehaviorSubject<number>(25);
  pauseTime$ = new BehaviorSubject<number>(5);

  focusRemaining$ = new BehaviorSubject<number>(25 * 60);
  pauseRemaining$ = new BehaviorSubject<number>(5 * 60);

  private focusInterval: any;
  private pauseInterval: any;

  startFocusTime() {
    this.resetPauseTime();

    clearInterval(this.focusInterval);

    this.focusRemaining$.next(this.focusTime$.value * 60);

    this.focusInterval = setInterval(() => {

      const current = this.focusRemaining$.value;

      if (current <= 1) {
        clearInterval(this.focusInterval);
        this.focusRemaining$.next(0);
        window.alert('Está na hora de um descanço.');
        return;
      }

      this.focusRemaining$.next(current - 1);
    }, 1000);

  }

  resetFocusTime() {
    clearInterval(this.focusInterval);
    this.focusRemaining$.next(this.focusTime$.value * 60);
  }

  startPauseTime() {
    this.resetFocusTime();

    clearInterval(this.pauseInterval);

    this.pauseRemaining$.next(this.pauseTime$.value * 60);

    this.pauseInterval = setInterval(() => {

      const current = this.pauseRemaining$.value;

      if (current <= 1) {
        clearInterval(this.pauseInterval);
        this.pauseRemaining$.next(0);
        window.alert('O descanço acabou!');
        return;
      }

      this.pauseRemaining$.next(current - 1);

    }, 1000);
  }

  resetPauseTime() {
    clearInterval(this.pauseInterval);
    this.pauseRemaining$.next(this.pauseTime$.value * 60);
  }

  setFocusTime(minutes: number) {
    this.focusTime$.next(minutes);
    this.focusRemaining$.next(minutes * 60);
  }

  setPauseTime(minutes: number) {
    this.pauseTime$.next(minutes);
    this.pauseRemaining$.next(minutes * 60);
  }

}