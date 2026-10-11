"use client";

import { useCart } from "@/Context/cartContext";

const AddToCartButton = ({ dish }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(dish);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;