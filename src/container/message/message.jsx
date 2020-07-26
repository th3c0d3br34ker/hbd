import React from "react";

export default function Message({ id, message }) {
  return (
    <div id={id} className={"message-div message-div-" + id}>
      <div className="message">{message}</div>
    </div>
  );
}
