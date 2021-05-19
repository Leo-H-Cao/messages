import React from "react";
import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

function ChatRoom() {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, {
    idField: "id",
  });

  return (
    <div>
      <h1>ChatRoom</h1>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </div>
  );
}

export default ChatRoom;
