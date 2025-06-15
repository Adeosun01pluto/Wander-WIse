// import React, { useState } from 'react'
// import { 
//   FaPlaneDeparture, 
//   FaBars,
//   FaTimes,
// } from 'react-icons/fa';

// // Navbar Component
// const Navbar = ({ currentPage, setCurrentPage }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: 'Home', page: 'home' },
//     { name: 'Destinations', page: 'destinations' },
//     { name: 'Packages', page: 'packages' },
//     { name: 'Blog', page: 'blog' },
//     { name: 'About', page: 'about' },
//     { name: 'Contact', page: 'contact' }
//   ];

//   return (
//     <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
//             <FaPlaneDeparture className="h-8 w-8 text-blue-600 mr-2" />
//             <span className="font-bold text-xl text-gray-800">WanderWise</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.page}
//                   onClick={() => setCurrentPage(item.page)}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                     currentPage === item.page
//                       ? 'bg-blue-600 text-white'
//                       : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setCurrentPage('book-trip')}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
//               >
//                 Book Trip
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.page}
//                   onClick={() => {
//                     setCurrentPage(item.page);
//                     setIsOpen(false);
//                   }}
//                   className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
//                     currentPage === item.page
//                       ? 'bg-blue-600 text-white'
//                       : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button
//                 onClick={() => {
//                   setCurrentPage('book-trip');
//                   setIsOpen(false);
//                 }}
//                 className="block w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
//               >
//                 Book Trip
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar

// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaBars, FaTimes } from 'react-icons/fa'; // Added FaBars, FaTimes for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Site Title */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <FaPlaneDeparture className="h-7 w-7 text-blue-400" />
          <span>WanderWise</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-700 transition-colors duration-300">Home</Link>
          <Link to="/destinations" className="hover:text-blue-700 transition-colors duration-300">Destinations</Link>
          <Link to="/packages" className="hover:text-blue-700 transition-colors duration-300">Packages & Deals</Link>
          <Link to="/blog" className="hover:text-blue-700 transition-colors duration-300">Blog</Link>
          <Link to="/about" className="hover:text-blue-700 transition-colors duration-300">About Us</Link>
          <Link to="/contact" className="hover:text-blue-700 transition-colors duration-300">Contact</Link>
          <Link to="/book-trip" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Book a Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 mt-4 py-4 space-y-4 px-4 rounded-md shadow-lg">
          <Link to="/" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/destinations" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>Destinations</Link>
          <Link to="/packages" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>Packages & Deals</Link>
          <Link to="/blog" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>Blog</Link>
          <Link to="/about" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className="block text-white hover:text-blue-700 transition-colors py-2" onClick={toggleMenu}>Contact</Link>
          <Link to="/book-trip" className="block w-full text-left bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors" onClick={toggleMenu}>
            Book a Trip
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;