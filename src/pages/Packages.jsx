import React, { useEffect, useState } from 'react'
import { packagesData } from '../data/packagesData'; // Assuming this path
import PackageCard from '../components/PackageCard';

// Packages Page Component
const Packages = () => {
  const [filteredPackages, setFilteredPackages] = useState(packagesData);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    let filtered = packagesData;
    if (filter !== 'all') {
      filtered = packagesData.filter(pkg => pkg.type === filter);
    }
    setFilteredPackages(filtered);
  }, [filter]);

  return (
    <div className=" min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Packages & Deals</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our carefully curated travel packages designed for every budget and style
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'budget', 'luxury', 'group'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type === 'all' ? 'All Packages' : `${type.charAt(0).toUpperCase() + type.slice(1)} Travel`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Packages