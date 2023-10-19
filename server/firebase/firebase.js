import { collection, getDocs, getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFZ7i8I29tgzjH9Cz1ypXlEqKO4tu0IVk",
    authDomain: "bitstra.firebaseapp.com",
    projectId: "bitstra",
    storageBucket: "bitstra.appspot.com",
    messagingSenderId: "978694069595",
    appId: "1:978694069595:web:b259af60e2ece4acf98e7e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getCompaniesByCategory(db,category) {
    const companiesCol = collection(db, category);
    const companiesSnapshot = await getDocs(companiesCol);
    const companiesList = companiesSnapshot.docs.map(doc => doc.data());
    return companiesList;
  }

export {db, getCompaniesByCategory};