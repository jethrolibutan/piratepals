import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <div className="navbar-1">
        {/* <img src={LOGO1}></img> */}
        <a href="/" className="site-title">
          Pirate Pals
        </a>

        <a href="" className="about-section">
          Our Mission
        </a>
      </div>

      <div className="navbar-2">
        <a href="/" className="contact-us">
          Contact Us
        </a>

        <a href="/" className="get-involved">
          Get Involved
        </a>
      </div>
    </div>
  );
}

export default Navbar;
