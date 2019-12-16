
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDM9o5GTokE9FbTqQ9aLSj0WuQ5aTVYPb0",
    authDomain: "nz-db-9c284.firebaseapp.com",
    databaseURL: "https://nz-db-9c284.firebaseio.com",
    projectId: "nz-db-9c284",
    storageBucket: "nz-db-9c284.appspot.com",
    messagingSenderId: "648810017281",
    appId: "1:648810017281:web:3f7fa420629a8b0c104600",
    measurementId: "G-78F8EF886H"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:  'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;