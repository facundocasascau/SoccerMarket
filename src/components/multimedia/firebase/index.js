import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBtzLrjbwK_y332Hq1WpHurZjdosGpQBqw",
    authDomain: "marketplayer.firebaseapp.com",
    databaseURL: "https://marketplayer.firebaseio.com",
    projectId: "marketplayer",
    storageBucket: "marketplayer.appspot.com",
    messagingSenderId: "44524323297",
    appId: "1:44524323297:web:e25bc901bf286dcb1912a0"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}