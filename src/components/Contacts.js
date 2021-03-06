import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "../css/Contacts.css";

import { useCollectionData } from "react-firebase-hooks/firestore";

function Contacts(props) {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("contacts");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [contacts] = useCollectionData(query, { idField: "id" });

  function SingleContact(props) {
    if (props.currentUID == props.uid) {
      return null;
    }
    return (
      <li
        onClick={() => {
          props.handleClick(props.uid);
          props.chooseName(props.name);
        }}
      >
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
              uid={contact.uid}
              key={contact.id}
              name={contact.name}
              photoURL={contact.photoURL}
              handleClick={props.selectUser}
              currentUID={props.currentUID}
              chooseName={props.selectUserName}
            />
          ))}
      </ul>
    </div>
  );
}

export default Contacts;
