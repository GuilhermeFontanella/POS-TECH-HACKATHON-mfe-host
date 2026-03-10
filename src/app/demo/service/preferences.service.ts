import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class PreferencesService {
    constructor(
        private firestore: AngularFirestore,
        //private messageService: MessageService
    ) {}

    getSettings() {
        return this.firestore
        .collection('preferences')
        .doc('configs')
        .valueChanges();
    }

    updateSettings(focusTime: number, pauseTime: number) {
        return this.firestore
        .collection('preferences')
        .doc('configs')
        .update({ focusTime, pauseTime }).then(() => {
            // this.messageService.add({
            //     severity: 'success',
            //     summary: 'Configuração atualizada',
            //     detail: `Os dados foram gravados com sucesso.`,
            // });
        });
    }
}