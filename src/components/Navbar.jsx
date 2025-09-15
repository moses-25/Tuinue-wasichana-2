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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="tw-navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/"><span>Tuinue</span> Wasichana</Link>
        </div>
        <button 
          className="menu-icon"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-links"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        <ul 
          id="navbar-links"
          className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/programs" onClick={closeMobileMenu}>Programs</Link></li>
          <li><Link to="/stories" onClick={closeMobileMenu}>Stories</Link></li>
          <li><Link to="/charities" onClick={closeMobileMenu}>Charities</Link></li>
          <li><Link to="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard" onClick={closeMobileMenu}>Dashboard</Link></li>
              <li><button onClick={() => { handleLogout(); closeMobileMenu(); }} className="logout-button">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={closeMobileMenu}>Login</Link></li>
              <li><Link to="/register" onClick={closeMobileMenu}>Register</Link></li>
            </>
          )}
          <li><Link to="/donate" className="donate-nav-btn" onClick={closeMobileMenu}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

