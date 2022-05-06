import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'; // for the db

import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyAemsNOxxek1b2KFL4Mhb5VwdnOrDMjelg",
    authDomain: "meretstore-63e9d.firebaseapp.com",
    projectId: "meretstore-63e9d",
    storageBucket: "meretstore-63e9d.appspot.com",
    messagingSenderId: "859513503991",
    appId: "1:859513503991:web:61a3df4bc5c11cde3453f2"

}; 



firebase.initializeApp(config); 

const firestore = firebase.firestore();

const auth = firebase.auth(); 

const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) { return; }   

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`); 

  const snapShot = await userRef.get();

  if (!snapShot.exists) {

    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {

      await userRef.set({displayName, email, createdAt, ...additionalData, });

    } catch (error) {

        console.log('error creating user', error.message);

      }   

   }

return userRef;

}; 



export { firestore, createUserProfileDocument, auth };