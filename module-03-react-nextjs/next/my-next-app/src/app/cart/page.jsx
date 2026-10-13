"use client";

import { useCart } from "@/Context/cartContext";
import { useState } from "react";
import Link from "next/link";


function Cart() {
  const { cart , removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   async function handleCheckout() {

              setLoading(true);
              setError("");

              try {
                const response = await fetch("/api/orders", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ 
                    dishes: cart.map((dish) => ({id: dish.id, quantity: dish.quantity || 1}))
                  }),
                });

                const result = await response.json();

                if (!response.ok) {
                  throw new Error(result.message || "Checkout failed.");
                }

                // Clear the cart only after a successful order.
                clearCart();
                alert(`Order placed! Order ID: ${result.orderId}`);
                
              } catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            
            }
  return (
    <div className="flex justify-between">
      <h1 className="text-center text-3xl font-bold">Cart</h1>
      <div className="flex-1">
      <ul>
        {cart.map((dish) => (
          <li key={dish.id}>
            <div className="flex bg-white shadow-md rounded-lg p-4 m-4 text-black">
              <div className="justify-center items-center  ">
                <img src={dish.image} alt={dish.name} className="w-90 h-60 rounded-lg" />
              </div>
              <div>
                <h1>{dish.name}</h1>
                <p>ETB  {dish.price}</p>
                <p>{dish.description.substring(0, 45) + '...'}</p>
                <Link href={`/menu/${dish.id}`}>View Details</Link> 
                &nbsp;
              <button onClick={() => removeFromCart(dish)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 m-4 h-60 sticky top-0">
        <h1>Total</h1>
        <p>ETB  {cart.reduce((acc, dish) => acc + dish.price * (dish.quantity || 1), 0)}</p>
        <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-6 w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button> 

  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}





export default Cart;