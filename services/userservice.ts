import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig';

export const updateUserScore = async (userId: string, score: number) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { score });
};
