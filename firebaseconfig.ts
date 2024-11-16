import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAtQ2LW2EwJBItn5Ct_-7otsnufgO5SgA',
  authDomain: 'testgme-df513.firebaseapp.com',
  projectId: 'testgme-df513',
  storageBucket: 'testgme-df513.firebasestorage.app',
  messagingSenderId: '285125692107',
  appId: '1:285125692107:web:8e76ee84ab18c02b67294e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
