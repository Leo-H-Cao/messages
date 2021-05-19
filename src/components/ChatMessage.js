import React from "react";

function ChatMessage(props) {
  return (
    <div>
      <h3>{props.message.text}</h3>
    </div>
  );
}

export default ChatMessage;
