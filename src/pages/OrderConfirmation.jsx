import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state;

  if (!orderDetails) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-16">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Order Confirmed!
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your order. Your order number is #{orderDetails.orderId}
        </p>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Order Details</h2>
        
        <div className="border-t border-b py-4">
          {orderDetails.items.map(item => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xl font-semibold">
            <span>Total:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
          <address className="not-italic">
            {orderDetails.shippingAddress.fullName}<br />
            {orderDetails.shippingAddress.street}<br />
            {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}<br />
            Phone: {orderDetails.shippingAddress.phone}
          </address>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};