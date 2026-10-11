"use client";

import { useCart } from "@/Context/cartContext";
import Link from "next/link";


function Cart() {
  const { cart , removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
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
              </div>
              <button onClick={() => removeFromCart(dish)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;