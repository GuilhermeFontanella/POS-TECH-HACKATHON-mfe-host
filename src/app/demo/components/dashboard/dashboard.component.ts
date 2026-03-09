import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
    selector: 'app-tasks',
    template: `<mfe-tasks></mfe-tasks>`,
})
export class DashboardComponent implements OnInit {
  async ngOnInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4174/assets/remoteEntry.js',
        exposedModule: './Tasks'
      });
      console.log('MFE Settings carregado com sucesso');
    } catch (error) {
      console.error('Erro ao carregar MFE Settings:', error);
    }
  } 
}
