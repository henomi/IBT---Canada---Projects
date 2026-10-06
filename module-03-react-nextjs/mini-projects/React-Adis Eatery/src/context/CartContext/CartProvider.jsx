import { useEffect, useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("adis-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("adis-favorites");

    return savedFavorites
        ? JSON.parse(savedFavorites)
        : [];
  });

  /* Save cart whenever it changes */
  useEffect(() => {
    localStorage.setItem(
      "adis-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "adis-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (dish) => {
  setFavorites((currentFavorites) => {

    const alreadyFavorite = currentFavorites.some(
      (item) => item.id === dish.id
    );

    if (alreadyFavorite) {
      return currentFavorites.filter(
        (item) => item.id !== dish.id
      );
    }

    return [
      ...currentFavorites,
      dish,
    ];
  });
};


  const addToCart = (dish) => {

    setCart((currentCart) => {

      const existingDish = currentCart.find(
        (item) => item.id === dish.id
      );

      if (existingDish) {

        return currentCart.map((item) =>
          item.id === dish.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...dish,
          quantity: 1,
        },
      ];

    });
  };


  const removeFromCart = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );

  };

  const clearCart = () => {
  setCart([]);
  };


  const increaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  const decreaseQuantity = (id) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };


  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,

        favorites,
        toggleFavorite,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;