import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap your app and provide the cart state and setter function
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Use useState to manage the cart state

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to the cart
  };
  console.log(cart);
  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Empty the cart
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
