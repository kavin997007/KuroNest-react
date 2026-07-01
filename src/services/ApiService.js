import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiService = {
  /**
   * Get properties dynamically with support for server-side filtering and pagination.
   * Handles JSON Server v1.x pagination schema (_page and _per_page).
   * @param {Object} params - Query filters & pagination parameters
   * @returns {Promise<Array>} List of properties
   */
  async getProperties(params = {}) {
    try {
      const { page = 1, limit = 10, searchQuery, location, type, minPrice, maxPrice } = params;
      
      // Build query parameters for JSON Server v1.x
      const queryParams = {
        _page: page,
        _per_page: limit, // JSON Server v1.x uses _per_page instead of _limit
      };

      if (searchQuery) { 
        queryParams.q = searchQuery;
      }
      
      if (location && location !== 'All') {
        queryParams.location = location;
      }
      
      if (type && type !== 'All') {
        queryParams.type = type;
      }
      
      if (minPrice && minPrice > 0) {
        queryParams.price_gte = minPrice;
      }
      
      if (maxPrice && maxPrice > 0) {
        queryParams.price_lte = maxPrice;
      }

      const response = await api.get('/properties', { params: queryParams });
      // JSON Server v1.x paginated results are wrapped as: { first, prev, next, last, pages, items, data: [...] }
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        return response.data.data;
      }
      
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  },

  /**
   * Get a single property by ID
   */
  async getPropertyById(id) {
    try {
      const response = await api.get(`/properties/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching property with ID ${id}:`, error);
      throw error;
    }
  },
};

export default ApiService;
