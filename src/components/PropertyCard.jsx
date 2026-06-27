import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, formatArea } from '../utils/helpers';

const PropertyCard = ({ property }) => {
  const { id, title, type, location, price, images, bedrooms, bathrooms, area, featured } = property;
  
  return (
    <div className="property-card">
      <div className="card-image-wrap">
        <img src={images[0]} alt={title} loading="lazy" />
        <span className="property-type-tag">{type}</span>
        {featured && <span className="featured-tag">Featured</span>}
        <span className="price-tag">{formatPrice(price)}</span>
      </div>
      
      <div className="card-details">
        <div className="card-location">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {location}
        </div>
        
        <h3 className="card-title">{title}</h3>
        
        <div className="card-specs">
          <span>
            <strong>{bedrooms}</strong> Beds
          </span>
          <span>
            <strong>{bathrooms}</strong> Baths
          </span>
          <span>
            <strong>{formatArea(area)}</strong>
          </span>
        </div>
        
        <div className="card-footer">
          <Link to={`/property/${id}`} className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
