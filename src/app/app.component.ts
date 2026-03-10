import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { PomodoroService } from './demo/service/pomodoro.service';
import { TimerService } from './demo/core/services/timer.service';
import { take } from 'rxjs';
import { PreferencesService } from './demo/service/preferences.service';
import { SettingsService } from './demo/core/services/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig, 
        private layoutService: LayoutService,
        private pomodoroService: PomodoroService,
        private timerService: TimerService,
        private preferencesService: PreferencesService,
        private settingsService: SettingsService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.loadPreferencesValuesFromFirebase();
        window.addEventListener('settingsChanged', this.listener);
        this.setPomodoroValues();
        this.primengConfig.ripple = true;
    }

    private listener = (event: any) => {
        this.loadPreferencesValuesFromFirebase()
    }

    private setPomodoroValues() {
        this.pomodoroService.getSettings()
            .pipe(take(1))
            .subscribe((settings: any) => {
            if (!settings) return;

            this.timerService.setFocusTime(settings?.focusTime);
            this.timerService.setPauseTime(settings?.pauseTime);

        });
    }

    private loadPreferencesValuesFromFirebase() {
        this.preferencesService.getSettings()
            .subscribe((settings: any) => {
                if (!settings) return;
                this.settingsService.initFromFirebase(settings);

                document.documentElement.style.fontSize = `${this.settingsService.fontSize$.value ?? 16}px`;
                document.documentElement.style.lineHeight = `${this.settingsService.lineHeight$.value ?? 16}px`;
                this.cdr.detectChanges();
            });
    }

}
