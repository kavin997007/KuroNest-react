import React from 'react';
import './index.css';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'Principal Broker & Founder',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'With over 15 years in luxury real estate, Sarah founded HomeNest with a vision to redefine high-end brokerage. Her dedication has consistently positioned her among the top brokers in Miami.'
  },
  {
    name: 'Marcus Vance',
    role: 'Managing Partner (New York & Chicago)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Marcus oversees operations in New York and Chicago. His analytical approach to market trends and negotiation ensures clients secure premium deals in highly competitive metros.'
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Advisor (Pacific Northwest)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Elena is an expert in ecological and modern craftsman homes in Seattle and Denver. She specializes in guiding clients to homes that balance lifestyle aesthetics with energy efficiency.'
  }
];

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <h1>About HomeNest</h1>
          <p>Elevating the real estate experience and connecting clients with modern sanctuaries since 2010.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story container">
        <div className="story-grid">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" alt="Modern House Design" />
          </div>
          <div className="story-text">
            <span className="section-label">Our History</span>
            <h2>Redefining Modern Living Space</h2>
            <p>
              HomeNest began as a boutique brokerage firm in Miami with a single mission: to make the search for architectural excellence seamless. We realized that premium real estate is more than just transactions; it is about matching individuals with designs that echo their lifestyles.
            </p>
            <p>
              Today, HomeNest handles exclusive residential listings across the nation's key metropolitan regions. While we have grown, our boutique client-first advisory model remains unchanged, backed by robust data-driven market insights and premium advisory experts.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-center-header">
            <span className="section-label">Our Philosophy</span>
            <h2>The Principles that Guide Us</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="ri-shield-check-line"></i>
              </div>
              <h3>Unwavering Trust</h3>
              <p>Transparency is at the heart of our client relationships. We stand committed to honesty and ethical brokerage practices at every step.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="ri-award-line"></i>
              </div>
              <h3>Excellence in Design</h3>
              <p>We filter listings meticulously, cataloging only those properties that feature premium structural design, premium materials, and premium finishes.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="ri-lightbulb-line"></i>
              </div>
              <h3>Smart Innovation</h3>
              <p>By leveraging modern tech integrations, dynamic analytics, and virtual previews, we bring speed and convenience to luxury acquisitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team container">
        <div className="about-center-header">
          <span className="section-label">Our Experts</span>
          <h2>Meet Our Premier Advisors</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar-wrap">
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                  <a href="#" aria-label="Email"><i className="ri-mail-line"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
