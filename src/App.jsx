// src/App.jsx
import React from 'react'; // Removed useState as it's no longer necessary for destination selection
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Packages from './pages/Packages'; // Assuming this is still used
import BookingForm from './components/BookingForm'; // Assuming this is still used
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import './index.css';
import PackageDetail from './pages/PackageDetail';

const App = () => {
  // Removed selectedDestination state. Home doesn't need to set it for DestinationDetail.
  // If Home still needs to pass something like a destination ID to a different component
  // (e.g., if you had a "Quick Book" component that needed a pre-selected ID),
  // then you'd keep it or adjust. For standard navigation to detail pages, it's not needed.

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Routes>
          {/* Home component no longer needs setSelectedDestination */}
          <Route path="/" element={<Home />} /> 
          <Route path="/destinations" element={<Destinations />} />
          {/* Destination Detail route with a parameter for the ID */}
          <Route
            path="/destinations/:id"
            element={<DestinationDetail />} // No props needed here for DestinationDetail
          />
          {/* Packages Routes */}
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetail />} /> 
          {/* This route will handle /packages/1, /packages/2, etc. */}
          {/* <Route path="/packages" element={<Packages />} /> */}
          <Route path="/book-trip" element={<BookingForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:id"
            element={<BlogDetail />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route for 404 Not Found (optional) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;