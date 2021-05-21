import "./css/App.css";
import Header from "./components/Header";
import MessageSpace from "./components/MessageSpace";
import "stream-chat-react/dist/css/index.css";
import { useState } from "react";

function App() {
  const [otherUserName, setOtherUserName] = useState("");
  const [otherUserID, setOtherUserID] = useState("");
  return (
    <div className="App">
      <Header
        otherUserName={otherUserName}
        setOtherUserName={setOtherUserName}
        setOtherUserID={setOtherUserID}
      />
      <MessageSpace
        setOtherUserName={setOtherUserName}
        setOtherUserID={setOtherUserID}
        otherUserID={otherUserID}
      />
    </div>
  );
}

export default App;
