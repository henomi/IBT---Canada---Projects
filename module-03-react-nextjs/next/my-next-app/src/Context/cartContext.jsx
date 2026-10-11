"use client";

import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    const newCart = [...cart, dish];
    setCart(newCart);
  };

  const removeFromCart = (dish) => {
    const newCart = cart.filter((item) => item.id !== dish.id);
    setCart(newCart);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);