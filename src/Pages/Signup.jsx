import React from 'react'
import "./css/Signup.css";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create your account</h1>

        <div className="field">
          <input
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="field">
          <input
            type="email"
            placeholder="Email address"
          />
        </div>

        <div className="field password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
          >
            👁
          </button>
        </div>

        <button className="primary-btn">Sign up</button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="secondary-btn">
          Continue with a one-time code
        </button>

        <div className="footer-text">
          Already have an account? <a href="/login">Log in</a>
        </div>

        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Signup