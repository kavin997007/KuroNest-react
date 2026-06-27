/**
 * Format numeric price to standard currency string (USD)
 * @param {number} price 
 * @returns {string}
 */
export const formatPrice = (price) => {
  if (price === undefined || price === null) return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Format area to square feet format
 * @param {number} area 
 * @returns {string}
 */
export const formatArea = (area) => {
  if (!area) return '0 sq ft';
  return `${area.toLocaleString()} sq ft`;
};

/**
 * Filter properties helper
 * @param {Array} properties 
 * @param {Object} filters 
 * @returns {Array}
 */
export const filterProperties = (properties, filters) => {
  if (!properties) return [];

  const { searchQuery, location, type, minPrice, maxPrice } = filters;

  return properties.filter((property) => {
    // 1. Search Query filter (matches title, location, type, description)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchTitle = property.title?.toLowerCase().includes(query);
      const matchLoc = property.location?.toLowerCase().includes(query);
      const matchType = property.type?.toLowerCase().includes(query);
      const matchDesc = property.description?.toLowerCase().includes(query);
      if (!matchTitle && !matchLoc && !matchType && !matchDesc) {
        return false;
      }
    }

    // 2. Location filter
    if (location && location !== 'All') {
      if (!property.location?.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
    }

    // 3. Type filter
    if (type && type !== 'All') {
      if (property.type?.toLowerCase() !== type.toLowerCase()) {
        return false;
      }
    }

    // 4. Min Price filter
    if (minPrice && minPrice > 0) {
      if (property.price < minPrice) {
        return false;
      }
    }

    // 5. Max Price filter
    if (maxPrice && maxPrice > 0) {
      if (property.price > maxPrice) {
        return false;
      }
    }

    return true;
  });
};
