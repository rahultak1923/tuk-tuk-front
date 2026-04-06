import React, { useState } from "react";
import { FaFacebookF, FaApple, FaWeixin, FaPhone, FaGoogle } from "react-icons/fa";
import "./Login.css";
import logo from "../assets/logo.png";
import googleImg from "../assets/google.png";

const Login = () => {
  const [accepted, setAccepted] = useState(false);

  const handleLogin = () => {
    if (!accepted) {
      alert("Please accept Terms and Privacy Policy");
      return;
    }
    console.log("Login clicked");
  };

  return (
    <div className="login-bg">

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center text-white login-card">

          {/* ✅ UPDATED LOGO */}
          <img
  src={logo}
  alt="logo"
  className="logo"
/>

          <h1 className="title">Tuk Tuk</h1>

          <h2 className="users-count">
            13,365,176
          </h2>

          <p className="subtitle">
            user made friends here
          </p>

          {/* Facebook */}
          <button className="glass-button mt-4" onClick={handleLogin} style={{paddingLeft:"4rem"}}>
            <div className="icon-circle">
              <FaFacebookF />
            </div>
           <span>Sign in with Facebook</span> 
          </button>

          {/* ✅ GOOGLE WITH ICON */}
       <button className="glass-button mt-3" onClick={handleLogin} style={{paddingLeft:"4rem"}}>
  <div className="icon-circle google" >
    <img src={googleImg} alt="google" className="google-img" />
  </div>
  Sign in with Google
</button>

          {/* Divider */}
          <div className="divider mt-4">
            <span>More login options</span>
          </div>

          {/* Options */}
          <div className="d-flex justify-content-center gap-4 mt-4">

            {/* ✅ FIXED PHONE ICON */}
            <div className="circle-option phone">
              <FaPhone />
            </div>

            <div className="circle-option">
              <FaApple />
            </div>

            <div className="circle-option">
              <FaWeixin />
            </div>

          </div>

          {/* Checkbox */}
          <div className="form-check mt-5 text-start checkbox-area">
            <input
              type="checkbox"
              className="form-check-input"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />

            <label className="form-check-label">
              I agree to the{" "}
              <strong>Terms and Conditions</strong> and{" "}
              <strong>Privacy Policy</strong>
            </label>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;