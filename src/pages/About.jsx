// src/pages/About.jsx
import React from 'react';
import { FaGlobe, FaHandshake, FaUsers, FaHeart } from 'react-icons/fa'; // Example icons

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About WanderWise</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in crafting unforgettable travel experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                WanderWise was founded in 2009 with a simple yet profound mission: to make travel accessible, enjoyable, and truly transformative. What started as a small team of passionate adventurers planning bespoke trips for friends and family has grown into a leading travel agency, serving thousands of happy travelers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that travel is more than just visiting new places; it's about experiencing new cultures, stepping out of your comfort zone, and creating memories that last a lifetime. Our dedicated team of travel experts works tirelessly to craft itineraries that cater to every dream, budget, and style, ensuring a seamless and unforgettable journey from start to finish.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2020/02/15/11/56/fantasy-4850743_1280.jpg"
                alt="Our Story"
                className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (re-using sections from Home if applicable, or new) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust & Transparency</h3>
              <p className="text-gray-600">We build relationships based on honesty and clear communication.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion for Travel</h3>
              <p className="text-gray-600">Our team lives and breathes travel, bringing expertise and enthusiasm.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client-Centric</h3>
              <p className="text-gray-600">Your satisfaction and unique needs are at the heart of everything we do.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
              <p className="text-gray-600">Connecting you to amazing destinations all over the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional, but good for About Us) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-blue-600">CEO & Founder</p>
              <p className="text-gray-600 mt-2">Passionate about connecting people with unforgettable travel moments.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://randomuser.me/api/portraits/women/76.jpg"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-blue-600">Head of Operations</p>
              <p className="text-gray-600 mt-2">Ensuring every trip runs smoothly and every client is delighted.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="Alex Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alex Johnson</h3>
              <p className="text-blue-600">Lead Travel Consultant</p>
              <p className="text-gray-600 mt-2">Expert in crafting personalized itineraries for adventurers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Can be same as Home, or tailored) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Happy Travelers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Destinations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;