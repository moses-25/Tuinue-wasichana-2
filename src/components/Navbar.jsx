import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span>Tuinue Wasichana</span>
    </div>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/charities">Charities</a></li>
      <li><a href="/donate">Donate</a></li>
      <li><a href="/stories">Stories</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;