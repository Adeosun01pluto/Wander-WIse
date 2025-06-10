// src/components/PackageCard.jsx
import React from 'react';
import { FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

// Package Card Component
const PackageCard = ({ package: pkg }) => {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'bg-green-500';
      case 'New': return 'bg-blue-500';
      case 'Limited Offer': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link to={`/packages/${pkg.id}`}> {/* Make the entire card clickable */}
        <div className="relative">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-48 object-cover"
          />
          {pkg.badge && (
            <div className={`absolute top-4 left-4 ${getBadgeColor(pkg.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
              {pkg.badge}
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full">
            <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.name}</h3>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <FaRegCalendarAlt className="h-4 w-4 mr-1" />
              <span>{pkg.duration}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              pkg.type === 'luxury' ? 'bg-purple-100 text-purple-800' :
              pkg.type === 'budget' ? 'bg-green-100 text-green-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
            </span>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
            <div className="flex flex-wrap gap-2">
              {pkg.includes.map((item, index) => (
                <span key={index} className="flex items-center text-sm text-gray-600">
                  <FaCheckCircle className="h-3 w-3 text-green-500 mr-1" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* We're making the entire card a link, so this button would be redundant if also a link.
              If you want separate click behavior, you'd use a button and useNavigate within its onClick.
              For simplicity and common UI, linking the entire card is often preferred.
          */}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            View Details {/* Changed text from "Book Now" to "View Details" to reflect navigation */}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PackageCard;