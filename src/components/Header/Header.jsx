import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import White_logo from "../../Assets/White_logo.png";
import "./Header.css";
const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="header">
      <img src={White_logo} alt="POWER" className="logo" />
      <ul className="header-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Workout</li>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>Premium</li>
        <li>Contact us</li>
      </ul>
      <div className="right-h">
        {user ? (
          <span className="welcome-text">Hi, {user}</span>
        ) : (
          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div></div> );};
export default Header;
