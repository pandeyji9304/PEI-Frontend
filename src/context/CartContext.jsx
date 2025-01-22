import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios'; // Ensure you have axios installed

const CartContext = createContext(null);

// Initial state for the cart
const initialState = {
  items: [],
  total: 0,
};

// Reducer to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload.item],
        total: state.total + action.payload.item.price * action.payload.item.quantity,
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload.productId),
        total: state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    case 'SET_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Function to get the authorization token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('token'); // Assuming the token is stored in localStorage
  };

  

  // Add item to the cart
  const addToCart = async (productId, quantity) => {
    try {
      const token = getAuthToken();
      const response = await axios.post(
        'http://localhost:5001/api/cart/add', 
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
        }
      );
      dispatch({ type: 'ADD_TO_CART', payload: response.data });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Update item quantity in the cart
  const updateCartItem = async (productId, quantity) => {
    try {
      const token = getAuthToken();
      const response = await axios.put(
        'http://localhost:5001/api/cart/update',
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
        }
      );
      dispatch({ type: 'UPDATE_QUANTITY', payload: response.data });
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  // Remove item from the cart
  const removeFromCart = async (productId) => {
    try {
      const token = getAuthToken();
      const response = await axios.delete(
        'http://localhost:5001/api/cart/delete',
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
          data: { productId }, // Send the productId for deletion in the request body
        }
      );
      dispatch({ type: 'REMOVE_FROM_CART', payload: response.data });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Fetch cart data
const fetchCart = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get('http://localhost:5001/api/cart', {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to the Authorization header
      },
    });
    console.log('Fetched Cart Data:', response.data); // Log the response data
    dispatch({ type: 'SET_CART', payload: response.data });
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};


return (
  <CartContext.Provider value={{ state, addToCart, updateCartItem, removeFromCart, fetchCart }}>
    {children}
  </CartContext.Provider>
);
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
