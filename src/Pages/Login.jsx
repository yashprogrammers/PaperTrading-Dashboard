import React from 'react'
import "./css/Login.css";
import { useState } from "react";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Enter your password</h1>

        <div className="field email-field">
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

        <a href="#" className="forgot-link">
          Forgot password?
        </a>

        <button className="primary-btn">Continue</button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="secondary-btn">
          Log in with a one-time code
        </button>

        <div className="footer-text">
          Not have an account? <a href="/signup">Sign Up</a>
        </div>
        
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Login