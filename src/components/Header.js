import React from "react";
import "../css/Header.css";
import { SignOut } from "./MessageSpace";

function Header(props) {
  return (
    <div className="header">
      <h2>Messaging App</h2>
      <div
        onClick={() => {
          props.setOtherUserName("");
          props.setOtherUserID("");
        }}
      >
        <SignOut />
      </div>
      <div>{props.otherUserName}</div>
    </div>
  );
}

export default Header;
