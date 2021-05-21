import React from "react";
import "../css/ContactEntry.css";
import { useState } from "react";

function ContactEntry(props) {
  const [name, setName] = useState("");
  const [uid, setUID] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form
          onSubmit={(e) =>
            props.handleSubmit(e, uid, name, photoURL, props.handleClose)
          }
        >
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="uid">User ID</label>
          <input
            value={uid}
            type="uid"
            className="form-control"
            id="uid"
            onChange={(e) => setUID(e.target.value)}
          />
          <label htmlFor="photoURL">Photo URL</label>
          <input
            className="form-control"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <button className="form-control btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactEntry;
