import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyC4l98hMwz2DrV6fJhubG6EcuORMgUSm80",
  authDomain: "todo-f55e8.firebaseapp.com",
  projectId: "todo-f55e8",
  storageBucket: "todo-f55e8.appspot.com",
  messagingSenderId: "622959567190",
  appId: "1:622959567190:web:454d5652aee3a0e47376f7",
  measurementId: "G-XPLD8891L3"

})
const FDb =  firebaseApp.firestore();
const Fauth =  firebaseApp.auth();

export default FDb;