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

  initFromFirebase(settings: any) {
    if (!settings) return;

    this.setCognitiveAlert(settings.cognitiveAlert);
    this.setComplexityInterface(settings.complexityInterface);
    this.setDefaultMode(settings.defaultMode);
    this.setFocusMode(settings.focusMode);
    this.setDetailedMode(settings.detailedMode);
    this.setFontSize(settings.fontSize);
    this.setLineHeight(settings.lineHeight);
    this.setSummaryMode(settings.summaryMode);
  }
}