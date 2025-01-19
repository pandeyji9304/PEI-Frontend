import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AuthModal } from '../components/AuthModal';

export const Navbar = () => {
  const { state } = useCart();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-gray-900">Pandey Electrical Industries</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {/* Primary Navigation Links */}
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>

            {/* Conditional Login Button or User Icon */}
            {isAuthenticated ? (
              <Link to="/profile">
                <User className="h-6 w-6 text-gray-700 hover:text-gray-900" />
              </Link>
            ) : (
              <button
                onClick={handleOpenModal}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600"
              >
                Login
              </button>
            )}

            {/* Cart Icon with Item Count */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* AuthModal Component */}
      {isModalOpen && (
        <AuthModal onClose={handleCloseModal} setAuthenticated={setIsAuthenticated} />
      )}
    </nav>
  );
};
