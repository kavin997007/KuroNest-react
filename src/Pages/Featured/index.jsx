import React, { useState, useEffect } from 'react';
import ApiService from '../../services/ApiService';
import PropertyCard from '../../components/UIComponents/PropertyCard/PropertyCard';
import Loader from '../../components/UIComponents/Loader/Loader';
import './index.css';

const Featured = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch properties (requesting a high limit to get all records)
        const data = await ApiService.getProperties({ page: 1, limit: 1000 });
        const featured = data.filter((item) => item.featured === true);
        setFeaturedProperties(featured);
        setLoading(false);
      } catch (err) {
        setError('Failed to load featured properties. Please check if your server is running.');
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="featured-page fade-in">
      {/* Premium Luxury Gold Banner */}
      <section className="featured-hero">
        <div className="featured-hero-overlay"></div>
        <div className="container featured-hero-content">
          <span className="gold-badge">Curated Collections</span>
          <h1>Our Signature Residences</h1>
          <p>Explore an elite collection of hand-picked premium properties featuring unmatched design and amenities.</p>
        </div>
      </section>

      {/* Grid List Section */}
      <section className="featured-grid-section container">
        {loading && (
          <div className="featured-state-wrap">
            <Loader message="Fetching signature collections..." />
          </div>
        )}

        {error && (
          <div className="state-message error">
            <p>{error}</p>
            <p className="hint">Run `npx json-server db.json --port 5000` to start the backend database.</p>
          </div>
        )}

        {!loading && !error && featuredProperties.length === 0 && (
          <div className="state-message empty">
            <p>No featured residences are currently available.</p>
          </div>
        )}

        {!loading && !error && featuredProperties.length > 0 && (
          <>
            <div className="featured-count-row">
              <h2>Featured Properties Collection</h2>
              <span className="count-badge">{featuredProperties.length} Exclusive Residences Available</span>
            </div>
            <div className="grid grid-3">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Featured;
