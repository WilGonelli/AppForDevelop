import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyDWeDoHR8wRM7F0GAS8EZTOU7ABcWlyxlA",
    authDomain: "userregister-c6f4a.firebaseapp.com",
    projectId: "userregister-c6f4a",
    storageBucket: "userregister-c6f4a.appspot.com",
    messagingSenderId: "967176384974",
    appId: "1:967176384974:web:a918e576934fda3770bb9f"
  };
  
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

  export default getCities;