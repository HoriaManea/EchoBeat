import React from "react";
import "../PasswordRequirements/PasswordRequirements.scss";
import Picture from "../../assets/password-emoji.png";
import errorSound from "../../assets/sounds/error__message.mp3";

function PasswordRequirements() {
  function errorAlert() {
    const audio = new Audio(errorSound);
    audio.play();
  }

  errorAlert();
  return (
    <div className="passwordrequirements">
      <p className="passwordrequirements__text">
        The password must have at least 6 characters.
      </p>
      <span className="passwordrequirements__emoji">🙎🏻‍♀️</span>
    </div>
  );
}

export default PasswordRequirements;
