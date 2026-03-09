import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
        { path: 'pomodoro', loadChildren: () => import('./pomodoro/pomodoro.module').then(m => m.PomodoroModule) }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
