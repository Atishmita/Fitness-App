import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate.push("/");
  };
  return (
    <form className="loginsignup" onSubmit={handleSubmit}>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <div className="field-group">
            <label className="signup-label">
              Your Name <span className="required">*</span>
            </label>
            <input
              className="signup-input"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="field-group">
            <label className="signup-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              className="signup-input"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="field-group">
            <label className="signup-label">
              Password <span className="required">*</span>
            </label>
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="field-group">
            <label className="signup-label">
              Confirm Password <span className="required">*</span>
            </label>
            <input
              className="signup-input"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="field-group">
            <label className="signup-label">
              Age <span className="required">*</span>
            </label>
            <input
              className="signup-input"
              type="number"
              placeholder="Age"
              min="1"
              required
            />
          </div>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button className="signup-continue" onClick={() => navigate("/")}>
          Continue
        </button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            Login here
          </span>
        </p>
      </div>
    </form>
  );
};
export default Signup;