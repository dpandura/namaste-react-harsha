import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;