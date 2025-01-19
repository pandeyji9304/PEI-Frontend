import React from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const blogPosts = [
    {
      title: 'The Importance of Quality Electrical Components',
      date: 'January 15, 2025',
      excerpt: 'Learn why using high-quality electrical components can make all the difference in your projects.',
    },
    {
      title: 'How to Choose the Right Tools for Your Electrical Projects',
      date: 'January 10, 2025',
      excerpt: 'A guide to selecting the best tools for efficiency and safety in your electrical work.',
    },
    {
      title: 'Top Electrical Safety Tips for Professionals',
      date: 'January 5, 2025',
      excerpt: 'Stay safe with these essential electrical safety tips every professional should know.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <div className="mt-4">
              <Link
                to={`/blog/${index}`}
                className="text-yellow-500 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
