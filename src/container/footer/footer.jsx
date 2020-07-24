import React from "react";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-text">{emoji("Made with 🤍 by Jainam Desai")}</div>
    </div>
  );
}
