import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthContext();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="tw-navbar">
      <div className="navbar-brand">
        <Link to="/"><span>Tuinue</span> Wasichana</Link>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {/* You can use an actual icon here, e.g., a Font Awesome icon or SVG */}
        ☰
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/programs" onClick={toggleMobileMenu}>Programs</Link></li>
        <li><Link to="/stories" onClick={toggleMobileMenu}>Stories</Link></li>
        <li><Link to="/charities" onClick={toggleMobileMenu}>Charities</Link></li>
        <li><Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard" onClick={toggleMobileMenu}>Dashboard</Link></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={toggleMobileMenu}>Login</Link></li>
            <li><Link to="/register" onClick={toggleMobileMenu}>Register</Link></li>
          </>
        )}
        <li><Link to="/donate" className="donate-nav-btn" onClick={toggleMobileMenu}>Donate</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

