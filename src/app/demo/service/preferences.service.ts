import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PreferencesService {
    constructor(private firestore: AngularFirestore) {}

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
        .update({ focusTime, pauseTime });
    }
}