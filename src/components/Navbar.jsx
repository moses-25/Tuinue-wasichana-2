import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="tw-navbar">
      <div className="navbar-logo">
        <Link to="/">Tuinue Wasichana</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/charities">Charities</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
