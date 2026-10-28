"use client";

import { useCart } from "@/Context/cartContext";

const AddToCartButton = ({ dish }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(dish);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full rounded-xl bg-[#39ff88] px-4 py-3 font-bold text-[#0b132b] shadow-md shadow-[#39ff88]/10 transition duration-200 hover:bg-[#24e878] hover:shadow-lg hover:shadow-[#39ff88]/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;