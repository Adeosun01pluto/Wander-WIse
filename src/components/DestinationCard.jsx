
// src/components/DestinationCard.jsx
import React from 'react';
import { FaArrowRight, FaRegCalendarAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

// Destination Card Component
const DestinationCard = ({ destination, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
      // Apply the onClick prop here for the whole card click
      onClick={onClick} 
    >
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
          {destination.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
          <div className="flex items-center">
            <FaStar className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{destination.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <FaRegCalendarAlt className="h-4 w-4 mr-1" />
            <span>{destination.duration}</span>
          </div>
          {/*
            CRUCIAL CHANGE: Use <Link> for navigation for the "View Details" button.
            And importantly, use onClick with e.stopPropagation()
            to prevent the parent card's onClick from also firing.
          */}
          <Link 
            to={`/destinations/${destination.id}`} 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            onClick={(e) => {
              e.stopPropagation(); // Prevents the click from bubbling up to the card's div
            }}
          >
            View Details <FaArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;