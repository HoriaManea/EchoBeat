import React from "react";
import "./Login.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <form className="form">
      <h1>Login</h1>
      <div className="input-container">
        <input type="text" placeholder="Email" required></input>
        <MdEmail className="user-icon" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password" required />
        <RiLockPasswordFill className="password-icon" />
      </div>
      <div className="remember-container">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
      </div>
      <button className="btn" type="submit">
        Login
      </button>
      <div className="register-container">
        <p>
          Don't have an account?{" "}
          <a className="register-link" href="#">
            Register
          </a>
        </p>
      </div>
    </form>
  );
}

export default Login;
