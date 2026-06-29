import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-container-footer">
            <div className="logo-icon-footer">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <span className="logo-text-footer">HomeNest</span>
          </div>
          <p className="brand-description">
            Your premium partner in finding modern, luxurious properties in exclusive neighborhoods. Elevating your real estate experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/featured">Featured Listings</Link></li>
            <li><Link to="/about">About Our Firm</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@homenest.com</p>
          <p>Phone: +1 (800) 555-NEST</p>
          <p>Location: 500 Luxury Way, Miami FL</p>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to receive property listings and updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} HomeNest. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
            <a href="#" aria-label="Twitter"><i className="ri-twitter-x-fill"></i></a>
            <a href="#" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
