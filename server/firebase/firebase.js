import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import * as dotenv from 'dotenv';
dotenv.config();
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {db};