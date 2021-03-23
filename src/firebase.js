import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAS9m1FjvlEZRPIG01Jf3p8x5lfAGCCD0M',
  authDomain: 'todo-app-b7518.firebaseapp.com',
  projectId: 'todo-app-b7518',
});

const db = firebaseApp.firestore();

export default db;
