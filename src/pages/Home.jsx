import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, PenTool as Tool, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Import Swiper styles
import { Autoplay } from 'swiper'; // Import Autoplay module from Swiper

export const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const heroImages = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 here to create space for navbar */}
      {/* Hero Section with Swiper for image carousel */}
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={0}
          slidesPerView={1}
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                  <div className="text-center text-white px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      Power Your Projects with Quality
                    </h1>
                    <p className="mt-4 text-xl">
                      Premium electrical components and tools for professionals
                    </p>
                    <Link
                      to="/products"
                      className="mt-8 inline-block bg-white text-yellow-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-500">
              <Zap className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Quality Products</h3>
            <p className="mt-2 text-gray-500">Industry-leading electrical components</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-500">
              <Tool className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Professional Tools</h3>
            <p className="mt-2 text-gray-500">Equipment for every job</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-500">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Safety First</h3>
            <p className="mt-2 text-gray-500">Certified safety equipment</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-yellow-500">
              <Truck className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-500">Quick and reliable shipping</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Floating Arrow */}
        <div className="absolute right-0 bottom-0 mb-6 mr-6">
          <button
            onClick={() => window.location.href = "/products"} // Redirect to products page
            className="relative inline-block bg-gray-900 text-white p-4 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-110 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
            </svg>
          </button>
          <p className="absolute right-0 top-10 text-sm text-gray-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            View All Products
          </p>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Expertise</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img src="/path/to/transformer-logo.svg" alt="Transformer Technology" className="w-16 h-16 mx-auto mb-4" />
            <p className="font-semibold">Transformer Technology</p>
          </div>
          <div className="text-center">
            <img src="/path/to/power-systems-logo.svg" alt="Power Systems" className="w-16 h-16 mx-auto mb-4" />
            <p className="font-semibold">Power Systems</p>
          </div>
          <div className="text-center">
            <img src="/path/to/high-voltage-logo.svg" alt="High Voltage Engineering" className="w-16 h-16 mx-auto mb-4" />
            <p className="font-semibold">High Voltage Engineering</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="font-semibold">Amit Sharma</h3>
              <p className="text-gray-500">CEO</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="font-semibold">Priya Desai</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="text-center">
              <img src="/path/to/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="font-semibold">Vikram Patel</h3>
              <p className="text-gray-500">Lead Electrical Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow rounded-lg">
              <p className="text-gray-500 italic">"The best transformer solutions provider in India. Their products are reliable and efficient!"</p>
              <h3 className="font-semibold text-lg mt-4">Rajesh Kumar</h3>
              <p className="text-gray-500">Factory Manager, Tata Power</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <p className="text-gray-500 italic">"Excellent customer service, and their transformers have consistently delivered great results."</p>
              <h3 className="font-semibold text-lg mt-4">Ritu Singh</h3>
              <p className="text-gray-500">Senior Electrical Engineer, BHEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
