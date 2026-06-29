import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ApiService from '../../services/ApiService';
import { formatPrice, formatArea } from '../../utils/helpers';
import './index.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this property and would like to schedule a viewing.',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getPropertyById(id);
        setProperty(data);
        setActiveImageIndex(0);
        setLoading(false);
      } catch (err) {
        setError('Failed to load property details. The property may not exist or the server is offline.');
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyDetails();
    }
  }, [id]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate API submit
    setContactSubmitted(true);
    setTimeout(() => {
      // Clear form except message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: 'I am interested in this property and would like to schedule a viewing.',
      });
    }, 3000);
  };

  if (loading) {
    return (
      <div className="container details-loading-state">
        <div className="spinner"></div>
        <p>Fetching property details...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container details-error-state fade-in">
        <div className="error-card">
          <h2>Property Not Found</h2>
          <p>{error || 'The requested property could not be loaded.'}</p>
          <Link to="/home" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="property-details-page container fade-in">
      {/* Back navigation */}
      <div className="details-navigation">
        <button  onClick={() => navigate(-1)} className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Listings
        </button>
      </div>

      {/* Main Header Information */}
      <section className="details-header">
        <div className="header-left">
          <div className="type-badge-row">
            <span className="type-badge">{property.type}</span>
            {property.featured && <span className="featured-badge">Premium Listing</span>}
          </div>
          <h1>{property.title}</h1>
          <p className="location-info">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {property.location}
          </p>
        </div>
        <div className="header-right">
          <span className="price-label">Asking Price</span>
          <span className="price-value">{formatPrice(property.price)}</span>
        </div>
      </section>

      {/* Interactive Image Gallery */}
      <section className="gallery-section">
        <div className="main-image-viewport">
          <img src={property.images[activeImageIndex]} alt={`${property.title} main`} />
        </div>
        {property.images.length > 1 && (
          <div className="thumbnails-grid">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                className={`thumbnail-btn ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <img src={img} alt={`${property.title} preview ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Grid Content Layout */}
      <div className="details-grid">
        {/* Main Content Side */}
        <main className="details-main-content">
          {/* Key Stats Bar */}
          <div className="property-stats-bar">
            <div className="stat-box">
              <span className="stat-label">Bedrooms</span>
              <span className="stat-value">{property.bedrooms}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Bathrooms</span>
              <span className="stat-value">{property.bathrooms}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Area Size</span>
              <span className="stat-value">{formatArea(property.area)}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Property ID</span>
              <span className="stat-value">{property.id}</span>
            </div>
          </div>

          {/* Description */}
          <div className="details-card">
            <h2>About this Property</h2>
            <p className="description-text">{property.description}</p>
          </div>

          {/* Amenities Checklist */}
          <div className="details-card">
            <h2>Amenities</h2>
            <ul className="amenities-list">
              {property.amenities.map((amenity, idx) => (
                <li key={idx} className="amenity-item">
                  <svg className="check-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </main>

        {/* Sidebar Widgets (Agent info & Contact Form) */}
        <aside className="details-sidebar">
          <div className="agent-widget">
            <h3>Listing Agent</h3>
            <div className="agent-profile">
              <img src={property.contact.avatar} alt={property.contact.name} className="agent-avatar" />
              <div className="agent-info">
                <h4>{property.contact.name}</h4>
                <p>HomeNest Premier Advisor</p>
              </div>
            </div>

            <div className="agent-quick-contact">
              <div className="contact-row">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{property.contact.phone}</span>
              </div>
              <div className="contact-row">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{property.contact.email}</span>
              </div>
            </div>

            <hr className="divider" />

            {contactSubmitted ? (
              <div className="success-banner">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p>Inquiry Sent Successfully!</p>
                <span className="success-sub">The agent will contact you shortly.</span>
              </div>
            ) : (
              <form className="agent-contact-form" onSubmit={handleContactSubmit}>
                <h4>Inquire About Property</h4>

                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email</label>
                  <input
                    id="form-email"
                    type="email"
                    placeholder="yourname@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-phone">Phone</label>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PropertyDetails;
