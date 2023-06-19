import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDWeDoHR8wRM7F0GAS8EZTOU7ABcWlyxlA",
  authDomain: "userregister-c6f4a.firebaseapp.com",
  databaseURL: "https://userregister-c6f4a.firebaseio.com",
  projectId: "userregister-c6f4a",
  storageBucket: "userregister-c6f4a.appspot.com",
  messagingSenderId: "967176384974",
  appId: "1:967176384974:web:a918e576934fda3770bb9f",
  measurementId: "G-YRC24TBZ2F"
};

if(!firebase.apps.length){
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;