import React, { createContext, useState, useEffect } from "react";

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to wrap your app and provide the cart state and setter function
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Use useState to manage the cart state

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse and set the saved cart
    }
  }, []);

 
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Empty the cart
    localStorage.removeItem("cart");
  };

  console.log(cart); // Logs the current state of the cart





  return (
    <CartContext.Provider value={{ cart, addItemToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
