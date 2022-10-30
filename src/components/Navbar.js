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

        <a href="/meet-our-team" className="">
          Meet Our Team
        </a>
      </div>

      <div className="navbar-2">
        <a href="/contact-us" className="">
          Contact Us
        </a>

        <a href="/get-involved" className="">
          Get Involved
        </a>
      </div>
    </div>
  );
}

export default Navbar;
