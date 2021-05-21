import React from "react";
import "../css/Header.css";
import { SignOut } from "./MessageSpace";

function Header() {
  return (
    <div className="header">
      <h2>Messaging App</h2>
      <SignOut />
    </div>
  );
}

export default Header;
