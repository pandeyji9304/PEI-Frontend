import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Package, Shield, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('/products')}
        className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <span className="ml-2 text-green-600">In Stock ({product.stock} available)</span>
          </div>

          <button
            onClick={() => {
              dispatch({ type: 'ADD_TO_CART', payload: product });
              navigate('/cart');
            }}
            className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors flex items-center justify-center space-x-2 mb-6"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart and Checkout</span>
          </button>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Product Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-yellow-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-500" />
                <span>Warranty Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-yellow-500" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>

          {/* Enhanced description section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Detailed Description</h3>
            <p className="text-gray-600 mb-4">
              This {product.name} is built for industrial use, offering high performance and reliability. It is designed to provide maximum protection against overcurrents, ensuring the safety of your electrical installations.
            </p>
            <h4 className="text-md font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Heavy-duty construction for demanding environments</li>
              <li>Meets all industry standards for safety and reliability</li>
              <li>Easy installation with clear instructions</li>
              <li>Compact design for space-saving installations</li>
            </ul>
            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Usage Instructions:</h4>
            <p className="text-gray-600 mb-4">
              Ensure that the circuit breaker is installed by a licensed professional. For optimal performance, follow the manufacturer's instructions carefully.
            </p>
            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Product Benefits:</h4>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Protects your electrical systems from damage</li>
              <li>Increases safety for both residential and commercial installations</li>
              <li>Reduces downtime by preventing system failures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
