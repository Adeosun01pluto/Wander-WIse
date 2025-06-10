
// src/pages/Blog.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import { FaSearch, FaArrowRight } from 'react-icons/fa'; // Retaining FaSearch as in your original commented code,
// but also including FaArrowRight for the "Read More" button

import { blogPostsData } from '../data/blogPostsData'; // Import your blog posts data

const Blog = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle click on a blog post card
  // This now uses navigate to go to the specific blog post URL
  const handleCardClick = (post) => {
    navigate(`/blog/${post.id}`); // Navigate to the blog detail page using the post's ID
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get inspired with travel tips, destination guides, and stories from fellow adventurers
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPostsData && blogPostsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  // Retained original styling: `hover:shadow-xl transition-all duration-300 cursor-pointer`
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleCardClick(post)} // Use handleCardClick for entire card click
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      By {post.author} on {post.date}
                    </p>
                    {/* Retained description, assuming it's the full description in your data */}
                    <p className="text-gray-700 text-base mb-4 line-clamp-3">{post.description}</p>
                    <Link
                      to={`/blog/${post.id}`} // Use Link component for declarative navigation
                      // Prevent parent card's onClick from firing again when button is clicked
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Read More <FaSearch className="h-3 w-3 ml-1" /> {/* Retained original FaSearch icon */}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Displayed when blogPostsData is empty
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No blog posts found.</h3>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;