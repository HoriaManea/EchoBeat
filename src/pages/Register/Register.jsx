import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiRepeatFill } from "react-icons/ri";
import "./Register.scss";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import PasswordRequirements from "../../components/PasswordRequirements/PasswordRequirements";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRequirements, setShowRequirements] = useState(false);

  const signIn = async (e) => {
    try {
      e.preventDefault();
      if (password.length < 6) {
        setTimeout(() => {
          setShowRequirements(true);
        }, 1000);
      }
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {showRequirements && <PasswordRequirements />}
      <form className="auth-form register-page">
        <h1 id="register-light">Register</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <MdEmail className="user-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password..."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <RiLockPasswordFill className="password-icon" />
        </div>
        {/* <div className="input-container">
        <input type="password" placeholder="Repeat Password" required />
        <RiRepeatFill className="password-icon" />
      </div> */}

        <button className="btn" type="submit" onClick={signIn}>
          Register
        </button>
        <button onClick={logout}>Logout</button>
      </form>
    </>
  );
}

export default Register;
