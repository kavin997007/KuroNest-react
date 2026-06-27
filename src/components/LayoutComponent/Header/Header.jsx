import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <span className="logo-text">HomeNest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/featured" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Featured
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About Us
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary contact-btn-header">Contact Agent</Link>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          <nav className="nav-mobile">
            <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/featured" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Featured
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </NavLink>
            <Link to="/contact" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Contact Agent</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
