import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  cognitiveAlert$ = new BehaviorSubject<boolean>(false);
  complexityInterface$ = new BehaviorSubject<number>(1);
  defaultMode$ = new BehaviorSubject<boolean>(true);
  detailedMode$ = new BehaviorSubject<boolean>(false);
  focusMode$ = new BehaviorSubject<boolean>(false);
  fontSize$ = new BehaviorSubject<number>(14);
  lineHeight$ = new BehaviorSubject<number>(1);
  summaryMode$ = new BehaviorSubject<boolean>(false);

  setCognitiveAlert(value: boolean) {
    this.cognitiveAlert$.next(value);
  }

  setComplexityInterface(value: number) {
    this.complexityInterface$.next(value);
  }

  setDefaultMode(value: boolean) {
    this.defaultMode$.next(value);
  }

  setDetailedMode(value: boolean) {
    this.detailedMode$.next(value);
  }

  setFocusMode(value: boolean) {
    this.focusMode$.next(value);
  }

  setFontSize(value: number) {
    this.fontSize$.next(value);
  }

  setLineHeight(value: number) {
    this.lineHeight$.next(value);
  }

  setSummaryMode(value: boolean) {
    this.summaryMode$.next(value);
  }
}