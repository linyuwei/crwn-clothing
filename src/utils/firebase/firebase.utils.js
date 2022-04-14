import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDiyb2DmisUBEHe5F2MnO0DyATILuWHT6s",
  authDomain: "crwn-clothing-db-805ca.firebaseapp.com",
  projectId: "crwn-clothing-db-805ca",
  storageBucket: "crwn-clothing-db-805ca.appspot.com",
  messagingSenderId: "539272687434",
  appId: "1:539272687434:web:4b1c1f1f0c87fff6519bb3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfomation={}) => {
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  // console.log(userAuth)

  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  // if user data does not exists,
  // create or set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfomation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  
    // if user data exists    
    return userDocRef
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}