import React from 'react';

const FilterPanel = ({ filters, locations = [], types = [], onChange, onClear }) => {
  const handleInputChange = (field, value) => {
    if (onChange) {
      onChange({
        ...filters,
        [field]: value,
      });
    }
  };

  return (
    <aside className="filter-panel">
      <h3>Filter Properties</h3>
      
      <div className="filter-group">
        <label htmlFor="search-input">Search Keywords</label>
        <input 
          id="search-input"
          type="text" 
          placeholder="e.g. pool, fireplace, luxury" 
          value={filters.searchQuery || ''}
          onChange={(e) => handleInputChange('searchQuery', e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="location-select">Location</label>
        <select 
          id="location-select"
          value={filters.location || 'All'}
          onChange={(e) => handleInputChange('location', e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="type-select">Property Type</label>
        <select 
          id="type-select"
          value={filters.type || 'All'}
          onChange={(e) => handleInputChange('type', e.target.value)}
        >
          {types.map((tp) => (
            <option key={tp} value={tp}>{tp}</option>
          ))}
        </select>
      </div>

      <div className="filter-price-range">
        <div className="filter-group">
          <label htmlFor="min-price">Min Price ($)</label>
          <input 
            id="min-price"
            type="number" 
            placeholder="Min" 
            value={filters.minPrice || ''}
            onChange={(e) => handleInputChange('minPrice', e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="max-price">Max Price ($)</label>
          <input 
            id="max-price"
            type="number" 
            placeholder="Max" 
            value={filters.maxPrice || ''}
            onChange={(e) => handleInputChange('maxPrice', e.target.value)}
          />
        </div>
      </div>

      <button className="btn btn-outline reset-btn" onClick={onClear}>
        Clear Filters
      </button>
    </aside>
  );
};

export default FilterPanel;
