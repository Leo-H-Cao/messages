import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import ChatRoom from "./ChatRoom";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCaotVCZH_Y3v5WF1C8yW0y-peVb4EmH-Y",
  authDomain: "messaging-40ff3.firebaseapp.com",
  projectId: "messaging-40ff3",
  storageBucket: "messaging-40ff3.appspot.com",
  messagingSenderId: "985137402901",
  appId: "1:985137402901:web:2f05e681f796d75bb06a1c",
  measurementId: "G-NCK92MBCJP",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function MessageSpace() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

function SignOut() {
  const signOutWithGoogle = () => {
    auth.signOut();
  };
  if (auth.currentUser) {
    return <button onClick={signOutWithGoogle}>Sign Out</button>;
  }
}

export default MessageSpace;
