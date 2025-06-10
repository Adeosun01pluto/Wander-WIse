// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from 'react'; // Added useEffect and useState
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { FaArrowLeft, FaUser, FaCalendarAlt } from 'react-icons/fa';

// Import your blog posts data from the centralized data.js
import { blogPostsData } from '../data/blogPostsData'; // Ensure this path is correct relative to BlogDetail.jsx

const BlogDetail = () => {
  const { id } = useParams(); // Get the 'id' from the URL (e.g., '2' from /blog/2)
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [blogPost, setBlogPost] = useState(null); // State to hold the fetched blog post

  useEffect(() => {
    // Find the blog post based on the ID from the URL
    // It's crucial to ensure IDs match. If your data IDs are numbers, convert 'id' to number.
    // If your data IDs are strings, ensure they match exactly.
    // I'll use String(post.id) === id to be safe, assuming data IDs might be numbers or strings.
    const foundPost = blogPostsData.find(post => String(post.id) === id);

    if (foundPost) {
      setBlogPost(foundPost);
    } else {
      // If blog post not found, navigate back to the blog list
      // This handles cases where someone types a non-existent ID in the URL
      navigate('/blog');
    }
  }, [id, navigate]); // Depend on 'id' and 'navigate' to re-run when URL changes or navigate changes

  // Display loading or not found message if blogPost isn't loaded yet
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found or loading...</h2>
          <button
            onClick={() => navigate('/blog')} // Use navigate for back button
            className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
          >
            <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image - Sticking to your former styling */}
      <section className="relative h-96 md:h-[450px]">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <button
              onClick={() => navigate('/blog')} // Use navigate for back button
              className="mb-4 text-white hover:text-blue-200 flex items-center"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
            <div className="flex items-center space-x-4 text-lg">
              <span className="flex items-center"><FaUser className="mr-2" /> {blogPost.author}</span>
              <span className="flex items-center"><FaCalendarAlt className="mr-2" /> {blogPost.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content - Sticking to your former styling */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg p-8">
          <div
            // If blogPost.content is already HTML, dangerouslySetInnerHTML is suitable.
            // If it's plain text or an array of paragraphs, you might need to adjust this.
            // Based on previous example, `content` was an array of paragraphs,
            // so you might want to revert to mapping over paragraphs like:
            // {Array.isArray(blogPost.content) ? blogPost.content.map((p, i) => <p key={i}>{p}</p>) : <p>{blogPost.content}</p>}
            // However, since you used `dangerouslySetInnerHTML={{ __html: blogPost.content }}`,
            // I'll assume your data's `content` property will now contain HTML strings.
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed" // Added text-gray-700 leading-relaxed for styling consistency
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;