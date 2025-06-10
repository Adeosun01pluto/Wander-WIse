// src/pages/DestinationDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaStar,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaCamera,
  FaWifi,
  FaCar,
  FaUtensils,
  FaUsers,
  FaArrowLeft,
} from 'react-icons/fa';
import { destinationsData } from '../data/destinationsData'; // Corrected import: assuming named export from data.js

// Destination Detail Page Component
const DestinationDetail = () => {
  const { id } = useParams(); // Get the 'id' from the URL (this will be a string)
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // --- THE FIX IS HERE ---
    // Convert the 'id' from useParams to a number for comparison
    // ASSUMING your destinationsData uses numeric IDs.
    const destinationIdNum = parseInt(id); 

    // Find the destination based on the ID from the URL
    // Use the parsed number for comparison
    const foundDestination = destinationsData.find(d => d.id === destinationIdNum); 
    // --- END FIX ---

    if (foundDestination) {
      setDestination(foundDestination);
    } else {
      // If destination not found, navigate back to the destinations list
      console.warn(`Destination with ID '${id}' not found. Redirecting.`); // Added console for debugging
      navigate('/destinations');
    }
  }, [id, navigate]); // Re-run effect if ID changes or navigate function changes

  // Display loading or not found message if destination isn't loaded yet
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination not found or loading...</h2>
          <button
            onClick={() => navigate('/destinations')}
            className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
          >
            <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <button
              onClick={() => navigate('/destinations')}
              className="mb-4 text-white hover:text-blue-200 flex items-center"
            >
              <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Destinations
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaStar className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-lg">{destination.rating}</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="h-5 w-5 mr-1" />
                <span>{destination.duration}</span>
              </div>
              <div className="text-2xl font-bold">{destination.price}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Destination</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {destination.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights && destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Itinerary</h2>
              <div className="space-y-6">
                {destination.tourPlan && destination.tourPlan.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <h3 className="font-semibold text-lg text-gray-800">{item.day}: {item.activity}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.gallery && destination.gallery.map((imgSrc, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={`${destination.name} Gallery ${index}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{destination.price}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Best Season:</span>
                  <span className="font-medium capitalize">{destination.season}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Budget Level:</span>
                  <span className="font-medium capitalize">{destination.budget}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/book-trip')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg mb-4"
              >
                Book This Trip
              </button>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Contact for Custom Trip
              </button>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCamera className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Professional Photography</span>
                </div>
                <div className="flex items-center">
                  <FaWifi className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Free WiFi</span>
                </div>
                <div className="flex items-center">
                  <FaCar className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Airport Transfers</span>
                </div>
                <div className="flex items-center">
                  <FaUtensils className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Daily Breakfast</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Expert Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;