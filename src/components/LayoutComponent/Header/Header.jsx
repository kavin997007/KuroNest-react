import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/kurunest.png";
import './Header.css';
import { useAuth } from '../../../context/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
      setMobileMenuOpen(false);
      navigate('/')
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/home" className="logo-container">
          <div className="logo-icon">
            <img src={logo} alt="KuroNest Logo" />
          </div>
          <span className="logo-text">KuroNest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
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
          
          {currentUser ? (
            <div className="user-profile-menu" ref={dropdownRef}>
              <button className="user-avatar-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img 
                  src={currentUser.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80'} 
                  alt={currentUser.displayName || 'User'} 
                />
              </button>
              {dropdownOpen && (
                <div className="user-dropdown-panel">
                  <div className="user-dropdown-header">
                    <span className="user-dropdown-name">{currentUser.displayName || 'KuroNest Member'}</span>
                    <span className="user-dropdown-email">{currentUser.email}</span>
                  </div>
<Link
    to="/profile"
    className="user-dropdown-item"
    onClick={() => setDropdownOpen(false)}
>
    👤 My Profile
</Link>

<Link
    to="/contact"
    className="user-dropdown-item"
    onClick={() => setDropdownOpen(false)}
>
    📞 Contact
</Link>

<button
    className="user-dropdown-item logout-btn"
    onClick={handleLogout}
>
    🚪 Sign Out
</button>                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline login-btn-header">Sign In</Link>
          )}

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
            <NavLink to="/home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/featured" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Featured
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </NavLink>
            <Link to="/contact" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Contact Agent</Link>
            {currentUser ? (
              <div className="mobile-user-profile-summary" style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <div className="mobile-user-profile-info" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <img 
                    src={currentUser.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80'} 
                    alt="User" 
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div className="mobile-user-name" style={{ fontWeight: '700', fontSize: '14px', color: 'var(--bg-dark)' }}>{currentUser.displayName || 'Member'}</div>
                    <div className="mobile-user-email" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{currentUser.email}</div>
                  </div>
                </div>
                <button className="btn btn-outline w-full" onClick={handleLogout}>Sign Out</button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline w-full" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: '10px' }}>Sign In</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
