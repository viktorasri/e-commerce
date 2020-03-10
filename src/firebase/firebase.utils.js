// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBwZ5obc-T_Jjq39ULTsmGxFMTv8VKk5J0',
  authDomain: 'e-commerce-40dd9.firebaseapp.com',
  databaseURL: 'https://e-commerce-40dd9.firebaseio.com',
  projectId: 'e-commerce-40dd9',
  storageBucket: 'e-commerce-40dd9.appspot.com',
  messagingSenderId: '123677768762',
  appId: '1:123677768762:web:dcc98ee4bc1aa32a4bc903',
  measurementId: 'G-J329JJFRWL'
};

firebase.initializeApp(config);
//  firestore and auth services declaration
export const auth = firebase.auth();
// export const firestore = firebase.firestore();

//  setup google authentification with prompt window for account selection
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;