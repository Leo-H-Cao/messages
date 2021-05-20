import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useState, useRef } from "react";
import "../css/Contacts.css";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Contacts() {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("contacts");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [contacts] = useCollectionData(query, { idField: "id" });
  console.log(contacts);

  function SingleContact(props) {
    return (
      <li>
        <span>
          <img src={props.photoURL} />
          <br />
          <small>{props.name}</small>
        </span>
      </li>
    );
  }

  return (
    <div>
      <ul id="my-contacts">
        {contacts &&
          contacts.map((contact) => (
            <SingleContact
              key={contact.id}
              name={contact.name}
              photoURL={contact.photoURL}
            />
          ))}
      </ul>
    </div>
  );
}

export default Contacts;
