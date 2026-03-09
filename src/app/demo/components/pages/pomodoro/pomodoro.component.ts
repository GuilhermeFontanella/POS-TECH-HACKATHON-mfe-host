import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { debounceTime, Subject } from 'rxjs';
import { TimerService } from 'src/app/demo/core/services/timer.service';
import { PomodoroService } from 'src/app/demo/service/pomodoro.service';

@Component({
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.component.html',
    styleUrls: ['./pomodoro.component.scss'],
    providers: [MessageService]
})
export class PomodoroComponent implements OnInit {
  pauseTime: number = 5;
  focusTime: number = 25

  private changeSubject = new Subject<void>();
  private subscription;

  constructor(
    private messageService: MessageService, 
    private timerService: TimerService,
    private pomodoroService: PomodoroService
  ) {
    this.subscription = this.changeSubject
      .pipe(debounceTime(1000))
      .subscribe(async () => {

        // Atualiza estado da aplicação
        this.timerService.setFocusTime(this.focusTime);
        this.timerService.setPauseTime(this.pauseTime);
        
        // Persiste no Firebase
        await this.pomodoroService.updateSettings(
          this.focusTime,
          this.pauseTime
        );

        this.messageService.add({
          severity: 'success',
          summary: 'Configuração atualizada',
          detail: `Foco: ${this.focusTime} min - Pausa: ${this.pauseTime} min`
        });

      });
  }

  ngOnInit() {
    this.pomodoroService.getSettings().subscribe({
      next: (value: any) => {
        if (value) {
          this.focusTime = value.focusTime;
          this.pauseTime = value.pauseTime;
          this.focusTime = this.timerService.focusTime$.value;
          this.pauseTime = this.timerService.pauseTime$.value;
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ocorreu um erro ao buscar os dados armazenados',
          detail: `Por favor, cadastre novamente.`
        });
      }
    });
  }

  onValueChange() {
    this.changeSubject.next();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
