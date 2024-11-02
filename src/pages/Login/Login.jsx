import React from "react";
import "./Login.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <form className="auth-form login-page">
      <h1 className="form-title">Login</h1>
      <div className="input-container">
        <input type="text" placeholder="Email" required></input>
        <MdEmail className="user-icon" />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password" required />
        <RiLockPasswordFill className="password-icon" />
      </div>
      <div className="remember-container">
        <label >
          <input type="checkbox" className="register-link" />
          Remember Me
        </label>
      </div>
      <button className="btn" type="submit">
        Login
      </button>
      <div className="register-container">
        <p className="create-account">
          Don't have an account?{" "}
          <Link className="register-link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
