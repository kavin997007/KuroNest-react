import React, { useState } from 'react';
import { motion } from 'framer-motion'

const Hero = ({ locations = [], types = [], onSearch }) => {
  const [heroSearch, setHeroSearch] = useState({
    location: 'All',
    type: 'All',
    budget: 'All',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(heroSearch);
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.h1 
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          Find Your Perfect Sanctuary
        </motion.h1>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.3}}
        >
          Discover luxurious properties in exclusive neighborhoods tailored to your distinct lifestyle.
        </motion.p>

        <form className="hero-search-bar" onSubmit={handleSubmit}>
          <div className="search-field">
            <label htmlFor="hero-location-select">Location</label>
            <select 
              id="hero-location-select"
              value={heroSearch.location} 
              onChange={(e) => setHeroSearch({ ...heroSearch, location: e.target.value })}
            >
              <option value="All">Any Location</option>
              {locations.filter(l => l !== 'All').map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          
          <div className="search-field">
            <label htmlFor="hero-type-select">Property Type</label>
            <select 
              id="hero-type-select"
              value={heroSearch.type} 
              onChange={(e) => setHeroSearch({ ...heroSearch, type: e.target.value })}
            >
              <option value="All">Any Type</option>
              {types.filter(t => t !== 'All').map((tp) => (
                <option key={tp} value={tp}>{tp}</option>
              ))}
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="hero-budget-select">Max Budget</label>
            <select 
              id="hero-budget-select"
              value={heroSearch.budget} 
              onChange={(e) => setHeroSearch({ ...heroSearch, budget: e.target.value })}
            >
              <option value="All">No Max</option>
              <option value="0-500000">Under $500,000</option>
              <option value="500000-1000000">$500k - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-5000000">Over $2M</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary search-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
