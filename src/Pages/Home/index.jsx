import React, { useState, useEffect, useRef, useCallback } from 'react';
import ApiService from '../../services/ApiService';
import Hero from '../../components/UIComponents/Hero/Hero';
import FilterPanel from '../../components/UIComponents/FilterPanel/FilterPanel';
import PropertyCard from '../../components/UIComponents/PropertyCard/PropertyCard';
import Loader from '../../components/UIComponents/Loader/Loader';
import { filterProperties } from '../../utils/helpers';
import './index.css';

const LOCATIONS = [
  'All', 'Miami, FL', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 
  'Seattle, WA', 'Denver, CO', 'San Francisco, CA', 'Austin, TX', 
  'Boston, MA', 'Las Vegas, NV'
];

const TYPES = ['All', 'Villa', 'Apartment', 'House', 'Penthouse', 'Townhouse'];
const LIMIT = 10;

const Home = () => {
  // Database store
  const [allProperties, setAllProperties] = useState([]);
  // Filtered properties
  const [filteredProperties, setFilteredProperties] = useState([]);
  
  // UI Display Slice
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters State
  const [filters, setFilters] = useState({
    searchQuery: '',
    location: 'All',
    type: 'All',
    minPrice: '',
    maxPrice: '',
  });

  const observerRef = useRef(null);

  // Initial Fetch of all 100 properties
  useEffect(() => {
    const loadAllProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        // Call without pagination params to fetch all 100 records
        const data = await ApiService.getProperties({ page: 1, limit: 1000 });
        setAllProperties(data);
        setFilteredProperties(data);
        setDisplayedProperties(data.slice(0, LIMIT));
        setHasMore(data.length > LIMIT);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch property listings. Please ensure your mock backend is running.');
        setLoading(false);
      }
    };
    loadAllProperties();
  }, []);

  // Update filtered list & reset viewport slice when filters change
  useEffect(() => {
    const filtered = filterProperties(allProperties, filters);
    setFilteredProperties(filtered);
    setPage(1);
    setDisplayedProperties(filtered.slice(0, LIMIT));
    setHasMore(filtered.length > LIMIT);
  }, [allProperties, filters]);

  // Load next chunk of properties
  const loadNextPage = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate slight smooth loader delay for realistic feel
    setTimeout(() => {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        const endIndex = nextPage * LIMIT;
        setDisplayedProperties(filteredProperties.slice(0, endIndex));
        setHasMore(endIndex < filteredProperties.length);
        return nextPage;
      });
      setLoading(false);
    }, 400);
  }, [loading, hasMore, filteredProperties]);

  // Scroll sentinel observer callback
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadNextPage();
      }
    });
    
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, loadNextPage]);

  // Quick search handler from Hero banner
  const handleHeroSearch = ({ location, type, budget }) => {
    let minP = '';
    let maxP = '';
    
    if (budget !== 'All') {
      const [minStr, maxStr] = budget.split('-');
      minP = minStr ? parseInt(minStr, 10) : '';
      maxP = maxStr ? parseInt(maxStr, 10) : '';
    }

    setFilters((prev) => ({
      ...prev,
      location,
      type,
      minPrice: minP,
      maxPrice: maxP,
    }));

    document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset Filters handler
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      location: 'All',
      type: 'All',
      minPrice: '',
      maxPrice: '',
    });
  };

  return (
    <div className="home-page fade-in">
      <Hero 
        locations={LOCATIONS} 
        types={TYPES} 
        onSearch={handleHeroSearch} 
      />

      <section className="listings-section container" id="properties-section">
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="sub-title">Explore HomeNest</span>
            <h2>Discover Premium Listings</h2>
          </div>
          <span className="listing-count">
            Showing {displayedProperties.length} of {filteredProperties.length} Properties
          </span>
        </div>

        <div className="listings-layout">
          <FilterPanel 
            filters={filters}
            locations={LOCATIONS}
            types={TYPES}
            onChange={setFilters}
            onClear={handleResetFilters}
          />

          <main className="listings-grid-container">
            {error && (
              <div className="state-message error">
                <p>{error}</p>
                <p className="hint">Run `npx json-server db.json --port 5000` to start the backend database.</p>
              </div>
            )}

            {displayedProperties.length === 0 && !loading && !error && (
              <div className="state-message empty">
                <p>No listings match your search criteria.</p>
                <button className="btn btn-primary" onClick={handleResetFilters}>Reset Filters</button>
              </div>
            )}

            {displayedProperties.length > 0 && (
              <div className="grid grid-3">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}

            {/* Infinite Scroll Sentinel indicator */}
            <div ref={lastElementRef} className="scroll-sentinel" style={{ minHeight: '60px', marginTop: '20px' }}>
              {loading && <Loader message="Loading more listings..." />}
              {!loading && !hasMore && displayedProperties.length > 0 && (
                <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-muted)', fontWeight: '600' }}>
                  You have viewed all listings.
                </div>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Home;
