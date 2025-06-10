import React, { useEffect, useState } from 'react'
import {testimonials} from '../data/testimonialsData'; // Assuming this path
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
// Testimonial Slider Component
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Travelers Say</h2>
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <FaQuoteLeft className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center justify-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                <div className="flex items-center justify-center mt-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default TestimonialSlider