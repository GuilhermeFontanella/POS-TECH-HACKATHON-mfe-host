import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.component.html',
    styleUrls: ['./pomodoro.component.scss'],
    providers: [MessageService]
})
export class PomodoroComponent {
  interval: number = 5;
  focusTime: number = 25

  private changeSubject = new Subject<void>();
  private subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.changeSubject
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Configuração atualizada',
          detail: `Foco: ${this.focusTime} min - Pausa: ${this.interval} min`
        });
      });
  }

  onValueChange() {
    this.changeSubject.next();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
