import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { state, addToCart, updateCartItem, removeFromCart, fetchCart } = useCart();

  useEffect(() => {
    // Fetch cart data when the component mounts
    fetchCart();
  }, [fetchCart]);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    updateCartItem(id, quantity);  // Use the updateCartItem from context
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {state.items.map(item => (
          <div key={item.productId} className="flex items-center py-6 border-b">
            <img
              src={item.image} // Assuming the image path is correct in the item object
              alt={item.name}
              className="h-24 w-24 object-cover rounded"
            />
            
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <button
                onClick={() => removeFromCart(item.productId)} // Using removeFromCart from context
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-8">
          <div className="flex justify-between text-xl font-semibold">
            <span>Total:</span>
            <span>${state.total.toFixed(2)}</span>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Link
              to="/products"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
