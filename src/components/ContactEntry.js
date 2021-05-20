import React from "react";
import "../css/ContactEntry.css";

function ContactEntry(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <button
          className="form-control btn btn-primary"
          type="submit"
          onClick={props.handleClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactEntry;
