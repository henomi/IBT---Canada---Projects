"use client";

import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart((currentCart)=> {
      const existingDish = currentCart.find((item) => item.id === dish.id);
      if (existingDish) {
        return currentCart.map((item) => 
          item.id === dish.id ? {...item,quantity: (item.quantity || 1) + 1} : item
        );
      }
      return [...currentCart, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dish) => {
    setCart((c) => c.filter((item) => item.id !== dish.id));
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