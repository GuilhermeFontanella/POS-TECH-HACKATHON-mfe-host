import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { PomodoroService } from './demo/service/pomodoro.service';
import { TimerService } from './demo/core/services/timer.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig, 
        private layoutService: LayoutService,
        private pomodoroService: PomodoroService,
        private timerService: TimerService
    ) { }

    ngOnInit(): void {
        this.setPomodoroValues();
        this.primengConfig.ripple = true;       //enables core ripple functionality
		document.documentElement.style.fontSize = '14px';
		
        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            //theme: 'lara-light-indigo',         //default component theme for PrimeNG
			theme: 'mdc-light-deeppurple',         //default component theme for PrimeNG
			
            scale: 14                           //size of the body font size to scale the whole application
        };
    }

    private setPomodoroValues() {
        this.pomodoroService.getSettings()
            .pipe(take(1))
            .subscribe((settings: any) => {
                console.log(settings)
            if (!settings) return;

            this.timerService.setFocusTime(settings?.focusTime);
            this.timerService.setPauseTime(settings?.pauseTime);

        });
    }

}
