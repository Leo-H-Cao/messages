import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useState, useRef } from "react";
import "../css/MessageSpace.css";
import "./ContactEntry";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Contacts from "./Contacts";
import ContactEntry from "./ContactEntry";

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

function MessageSpace() {
  const [user] = useAuthState(auth);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const togglePopup = () => {
    setPopUpOpen(!popUpOpen);
  };

  return (
    <div>
      <section className="contacts">
        {user ? <Contacts /> : <div></div>}
        <button onClick={togglePopup}>Add Contacts</button>
      </section>
      <section className="chat">{user ? <ChatRoom /> : <SignIn />}</section>
      <section>
        {popUpOpen && <ContactEntry handleClose={togglePopup} />}
      </section>
    </div>
  );
}

function addContact() {} /* Pop up entry for uid, name, photoURL*/

function ChatRoom() {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, {
    idField: "id",
  });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(auth.currentUser);
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      uid: uid,
      photoURL: photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div ref={dummy}></div>
      <div className="dummy">Loading...</div>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
        />
        <button type="submit">⌲</button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
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
