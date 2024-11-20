import React from "react";
import "../PasswordRequirements/PasswordRequirements.scss";
import Picture from "../../assets/password-emoji.png";

function PasswordRequirements() {
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
