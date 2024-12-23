import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./CSS/Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setErrorMessage("Both fields are required");
    } else if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
    } else {
      setErrorMessage("");
      login(username); 
      navigate("/");
    }
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <div className="field-group">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="login-agree">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <button type="submit" className="btn-continue">
            Sign In
          </button>
          <p className="login-login">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="login-link">
              Sign Up here
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};
export default Login;