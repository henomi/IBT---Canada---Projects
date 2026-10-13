"use client";

import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart((currentCart)=> {
      const existingDish = currentCart.find((item) => item.id === dish.id);
      if (existingDish) {
        return currentCart.map((item) => {
          item.id === dish.id ? item.quantity = item.quantity + 1 : item;
        });
      }
      return [...currentCart, dish];
    });
  };

  const removeFromCart = (dish) => {
    const newCart = cart.filter((item) => item.id !== dish.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);