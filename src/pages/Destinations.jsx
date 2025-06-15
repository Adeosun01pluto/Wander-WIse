// src/pages/Destinations.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaFilter, FaSearch } from 'react-icons/fa';
import { destinationsData } from '../data/destinationsData'; // Corrected import: assuming named export from data.js
import DestinationCard from '../components/DestinationCard';

// Destinations Page Component
// No longer needs 'setCurrentPage' or 'setSelectedDestination' props
const Destinations = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [filters, setFilters] = useState({
    continent: '',
    budget: '',
    season: '',
    search: ''
  });

  useEffect(() => {
    let filtered = destinationsData;

    if (filters.continent) {
      filtered = filtered.filter(dest => dest.continent === filters.continent);
    }
    if (filters.budget) {
      filtered = filtered.filter(dest => dest.budget === filters.budget);
    }
    if (filters.season) {
      filtered = filtered.filter(dest => dest.season === filters.season);
    }
    if (filters.search) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        dest.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // New function to handle navigation when a destination card is clicked
  const handleDestinationClick = (destinationId) => {
    navigate(`/destinations/${destinationId}`);
    console.log(destinationId)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Preserved original styling */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover incredible places around the world and find your next adventure
          </p>
        </div>
      </section>

      {/* Filters Section - Preserved original styling and functionality */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* On small screens, stack items vertically and center. On medium screens and up, use flex and space-between */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center justify-center sm:justify-start"> {/* Center filter icon and text on small screens */}
              <FaFilter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>

            {/* On small screens, this will stack the inputs vertically. On medium and up, it will wrap them. */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 flex-1">
              <div className="relative w-full sm:w-auto"> {/* Make search input full width on small screens */}
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full" /* w-full added */
                />
              </div>

              {/* Added w-full for full width on small screens, sm:w-auto for natural width on larger screens */}
              <select
                value={filters.continent}
                onChange={(e) => handleFilterChange('continent', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
              >
                <option value="">All Continents</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
              </select>

              <select
                value={filters.budget}
                onChange={(e) => handleFilterChange('budget', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
              >
                <option value="">All Budgets</option>
                <option value="budget">Budget</option>
                <option value="mid-range">Mid-range</option>
                <option value="luxury">Luxury</option>
              </select>

              <select
                value={filters.season}
                onChange={(e) => handleFilterChange('season', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
              >
                <option value="">All Seasons</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
                <option value="year-round">Year Round</option>
              </select>
            </div>

            {/* Place the clear all button at the bottom center on small screens, to the right on medium screens and up */}
            <button
              onClick={() => setFilters({ continent: '', budget: '', season: '', search: '' })}
              className="text-blue-600 hover:text-blue-800 font-medium mt-4 sm:mt-0 self-center sm:self-auto" /* Added margin-top for spacing and alignment classes */
            >
              Clear All
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid - Preserved original styling */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} of {destinationsData.length} destinations
            </p>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  // Now passing handleDestinationClick to the DestinationCard
                  // The DestinationCard component will need to accept this prop
                  // and use it on its main clickable element.
                  onClick={() => handleDestinationClick(destination.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <FaSearch className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => setFilters({ continent: '', budget: '', season: '', search: '' })}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;