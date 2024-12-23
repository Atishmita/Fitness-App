import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import Logo from "../../Assets/Black_logo.png";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { ShopContext } from "../../Context/ShopContext";
import { MdAccountCircle } from "react-icons/md";
import { BiHome, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("clothing");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  return (
    <div className="navbar">
      <img className="nav-logo" src={Logo} alt="Logo" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("clothing")}>
          <Link to="/shopping" style={{ textDecoration: "none" }}>
            Fashion
          </Link>
          {menu === "clothing" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("gymfood")}>
          <Link to="/shopping/gymfood" style={{ textDecoration: "none" }}>
            Gym Food
          </Link>
          {menu === "gymfood" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("equipments")}>
          <Link to="/shopping/equipments" style={{ textDecoration: "none" }}>
            Equipments
          </Link>
          {menu === "equipments" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("accessories")}>
          <Link to="/shopping/accessories" style={{ textDecoration: "none" }}>
            Accessories
          </Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-search">
        <div className="search-container">
          <BiSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <button className="search-btn">Search</button>
      </div>
      <div className="nav-login-cart">
        <BiHome className="nav-icon" onClick={() => navigate("/")} />
        <MdAccountCircle className="nav-icon" />
        <Link to="/shopping/cart" style={{ textDecoration: "none" }}>
          <IoCartOutline className="cart-icon nav-icon" size={34} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;