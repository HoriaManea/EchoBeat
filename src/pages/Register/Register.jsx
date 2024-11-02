import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiRepeatFill } from "react-icons/ri";
import "./Register.scss";
function Register() {
  return (
    <form className="auth-form register-page">
      <h1 id="register-light">Register</h1>
      <div className="input-container">
        <input type="text" placeholder="Email" required></input>
        <MdEmail className="user-icon" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password" required />
        <RiLockPasswordFill className="password-icon" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Repeat Password" required />
        <RiRepeatFill className="password-icon" />
      </div>

      <button className="btn" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
