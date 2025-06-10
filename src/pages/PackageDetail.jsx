// src/pages/PackageDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaRegCalendarAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaMapMarkerAlt, // Example icon for location
  FaUsers,        // Example icon for group size
} from 'react-icons/fa';
import { packagesData } from '../data/packagesData'; // Import your packages data

const PackageDetail = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [pkg, setPkg] = useState(null); // State to hold the fetched package

  useEffect(() => {
    // Determine if your package IDs are numbers or strings.
    // If numbers:
    const packageIdNum = parseInt(id);
    const foundPackage = packagesData.find(p => p.id === packageIdNum);
    
    // If strings (and if parseInt doesn't solve it):
    // const foundPackage = packagesData.find(p => p.id === id);

    if (foundPackage) {
      setPkg(foundPackage);
    } else {
      // If package not found, navigate back to the packages list
      console.warn(`Package with ID '${id}' not found. Redirecting.`);
      navigate('/packages'); // Navigate to the packages list page
    }
  }, [id, navigate]);

  // Display loading or not found message if package isn't loaded yet
  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package not found or loading...</h2>
          <button
            onClick={() => navigate('/packages')} // Use navigate for back button
            className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
          >
            <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Packages
          </button>
        </div>
      </div>
    );
  }

  // Helper to determine badge color (copied from PackageCard)
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'bg-green-500';
      case 'New': return 'bg-blue-500';
      case 'Limited Offer': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <button
              onClick={() => navigate('/packages')}
              className="mb-4 text-white hover:text-blue-200 flex items-center"
            >
              <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Packages
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{pkg.name}</h1>
            <p className="text-lg md:text-xl font-medium mb-4">{pkg.description}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-lg">{pkg.location}</span>
              </div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="h-5 w-5 mr-2" />
                <span className="text-lg">{pkg.duration}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="h-5 w-5 mr-2" />
                <span className="text-lg">{pkg.groupSize || 'Any Size'}</span>
              </div>
              {pkg.badge && (
                <span className={`${getBadgeColor(pkg.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {pkg.badge}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold mt-4">{pkg.price}</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Detailed Description */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {pkg.fullDescription || pkg.description + " A comprehensive and exciting journey awaits, meticulously planned to offer you the best experience."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Experience the beauty and culture of {pkg.location} with this exclusive package.
                From breathtaking sights to authentic local experiences, every detail is covered.
                Book now and create unforgettable memories!
              </p>
            </section>

            {/* Inclusions */}
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.includes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Optional: Itinerary (if your packagesData has it) */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-6">
                      <h3 className="font-semibold text-lg text-gray-800">{item.day}: {item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

             {/* Photo Gallery (if your packagesData has it) */}
             {pkg.gallery && pkg.gallery.length > 0 && (
                <section className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {pkg.gallery.map((imgSrc, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img
                        src={imgSrc}
                        alt={`${pkg.name} Gallery ${index}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    ))}
                </div>
                </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Facts / Booking Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
              <div className="space-y-3 mb-6 text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Price:</span>
                  <span className="font-semibold text-blue-600 text-xl">{pkg.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duration:</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Type:</span>
                  <span className="font-medium capitalize">{pkg.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Location:</span>
                  <span className="font-medium">{pkg.location}</span>
                </div>
                {pkg.bestSeason && (
                    <div className="flex justify-between items-center">
                    <span>Best Season:</span>
                    <span className="font-medium capitalize">{pkg.bestSeason}</span>
                    </div>
                )}
                {pkg.groupSize && (
                    <div className="flex justify-between items-center">
                    <span>Group Size:</span>
                    <span className="font-medium">{pkg.groupSize}</span>
                    </div>
                )}
              </div>

              <button
                onClick={() => navigate('/book-trip')} // Example route for a booking form
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Book This Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;