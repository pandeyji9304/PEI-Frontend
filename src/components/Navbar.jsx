import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Zap, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AuthModal } from '../components/AuthModal';

export const Navbar = () => {
  const { state, dispatch } = useCart(); // Access cart context
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const navigate = useNavigate(); // Hook for navigation

  // Fetch cart items from API on initial render
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('/api/cart', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (data.items) {
            // Dispatch to update the context
            dispatch({ type: 'SET_CART_ITEMS', payload: data.items });
          }
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();

    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [dispatch]); // Ensure the fetch is only triggered once

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    // Clear user-specific data (e.g., auth tokens)
    localStorage.removeItem('token');
    setIsAuthenticated(false);

    // Optionally redirect the user and reload the page
    navigate('/'); // Redirect to home
    window.location.reload(); // Reload the page to reset all state and persisted data
  };

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

            {/* Conditional Login Button or Profile Dropdown */}
            {isAuthenticated ? (
              <div className="relative group">
                <User className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
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
              {state.items && state.items.length > 0 && (
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
