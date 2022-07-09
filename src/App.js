import React from "react";
import Todos from "./Todos";
import "./App.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import firebase from "firebase/compat/app";

const signInWithGoogle = () => {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

}

const SignIn = () => (
  <main>
    <button onClick={ signInWithGoogle }>Sign In With Google</button>
  </main>
)



const App = () => {
  const [user] = useAuthState(auth)
  return user ? <Todos /> : <SignIn />;
};

export default App;
