import React from 'react';
import { FaPlaneDeparture, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// Note: FaCheckCircle is not typically used in a static footer, removed for correctness.

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <FaPlaneDeparture className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl">WanderWise</span>
            </div>
            <p className="text-gray-300 mb-4">
              Travel Smarter. Explore Better. Your trusted partner for unforgettable adventures around the world.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="/packages" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li> {/* Added Blog link */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaPhone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-4 w-4 mr-2" />
                <span>info@wanderwise.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                <span>123 Travel St, Adventure City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 WanderWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;