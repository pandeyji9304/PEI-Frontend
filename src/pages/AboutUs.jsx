import React from 'react';

export const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Pandey Electrical Industries, we strive to provide high-quality electrical components and tools for professionals in the industry. Our mission is to power projects with reliable, safe, and cost-effective products that meet the evolving needs of our customers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Founded in [Year], Pandey Electrical Industries has become a trusted name in the electrical industry. Our journey began with a single goal – to supply the highest quality electrical products to customers across the region. Over the years, we've grown and expanded, and we're committed to providing exceptional service and innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
