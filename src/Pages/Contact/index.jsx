import React, { useState } from 'react';
import './index.css';

const advisors = [
  {
    name: 'Sarah Jenkins',
    region: 'Miami, FL & Coastal Regions',
    phone: '+1 (305) 555-0199',
    email: 'sarah.j@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Marcus Vance',
    region: 'New York, NY & Chicago, IL',
    phone: '+1 (212) 555-0142',
    email: 'marcus.v@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Elena Rostova',
    region: 'Seattle, WA & Denver, CO',
    phone: '+1 (206) 555-0188',
    email: 'elena.r@homenest.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    advisor: 'General',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        advisor: 'General',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-page fade-in">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container contact-hero-content">
          <h1>Connect With An Advisor</h1>
          <p>Whether buying, listing, or looking for investment opportunities, our advisors are here to guide you.</p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="contact-section container">
        <div className="contact-grid">
          {/* Form Side */}
          <main className="contact-form-card">
            <h2>Send An Inquiry</h2>
            <p className="form-subtitle">Fill out the details below and the selected advisor will reach out to you within 24 hours.</p>
            
            {submitted ? (
              <div className="success-banner contact-success-wrap">
                <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Inquiry Sent Successfully!</h3>
                <p>Thank you for reaching out. We have logged your request and forwarded it to our advisory team.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-main-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="yourname@example.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="Your phone number" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="advisor-select">Select Preferred Advisor</label>
                    <select 
                      id="advisor-select"
                      value={formData.advisor}
                      onChange={(e) => setFormData({ ...formData, advisor: e.target.value })}
                    >
                      <option value="General">First Available Agent</option>
                      {advisors.map((adv, idx) => (
                        <option key={idx} value={adv.name}>{adv.name} ({adv.region.split('&')[0]})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    placeholder="e.g. Schedule a viewing, Listing properties" 
                    required 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message"
                    rows="5" 
                    placeholder="Provide details about your query..." 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full contact-submit-btn">
                  Submit Inquiry
                </button>
              </form>
            )}
          </main>

          {/* Directory Side */}
          <aside className="contact-sidebar">
            <div className="general-office-widget">
              <h3>Corporate Office</h3>
              <p>HomeNest Realty Inc.</p>
              <p>500 Luxury Way, Miami, FL 33101</p>
              <p>Direct: +1 (800) 555-NEST</p>
              <p>Support: support@homenest.com</p>
            </div>

            <div className="advisors-directory-widget">
              <h3>Our Premier Advisors</h3>
              <div className="advisors-list">
                {advisors.map((adv, idx) => (
                  <div key={idx} className="advisor-directory-item">
                    <img src={adv.avatar} alt={adv.name} className="advisor-avatar-sm" />
                    <div className="advisor-details-sm">
                      <h4>{adv.name}</h4>
                      <span className="advisor-region-sm">{adv.region}</span>
                      <p className="advisor-contact-text">{adv.phone}</p>
                      <p className="advisor-contact-text">{adv.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
