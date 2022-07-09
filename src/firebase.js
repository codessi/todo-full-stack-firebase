import firebase from 'firebase/compat/app'
// import firebase from 'firebase/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/functions'

firebase.initializeApp(
  {apiKey: "AIzaSyBWZNwp6rOch-ywbRh0EZo4TkjRJ0sQlbo",
  authDomain: "keep-clone-438dc.firebaseapp.com",
  projectId: "keep-clone-438dc",
  storageBucket: "keep-clone-438dc.appspot.com",
  messagingSenderId: "616460949525",
  appId: "1:616460949525:web:004692c1809340d82a161c",
  measurementId: "G-HQ4SE59NNZ"}
)

export const auth = firebase.auth()
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;