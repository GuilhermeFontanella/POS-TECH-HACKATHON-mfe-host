import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
    selector: 'app-settings',
    template: `<mfe-settings></mfe-settings>`,
    providers: [MessageService]
})
export class CrudComponent implements OnInit {
  async ngOnInit() {
    try {
      await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4173/assets/remoteEntry.js',
        exposedModule: './Settings'
      });
    } catch (error) {
      console.error('Erro ao carregar MFE Settings:', error);
    }
  } 
}
