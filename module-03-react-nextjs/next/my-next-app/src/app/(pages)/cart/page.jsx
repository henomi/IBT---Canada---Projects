
"use client";

import { useCart } from "@/Context/cartContext";
import Link from "next/link";


function Cart() {
  const { cart , removeFromCart,} = useCart();
  return (
    <div className="min-h-screen bg-[#0b132b] px-4 py-8 text-white sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:mb-10 lg:text-left">
          Your Cart <span className="text-[#39ff88]">.</span>
        </h1>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
      <div className="min-w-0">
      <ul className="space-y-5">
        {cart.map((dish) => (
          <li key={dish.id}>
            <div className="flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#111d3a] p-4 shadow-lg shadow-black/10 transition duration-300 hover:border-[#39ff88]/30 sm:flex-row sm:items-center sm:p-5">
              <div className="flex shrink-0 justify-center items-center">
                <img src={dish.image} alt={dish.name} className="h-52 w-full rounded-xl object-cover sm:h-36 sm:w-44 lg:h-40 lg:w-48" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{dish.name}</h1>
                <p className="mt-2 text-lg font-bold text-[#39ff88]">ETB  {dish.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{dish.description.substring(0, 45) + '...'}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href={`/menu/${dish.id}`} className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#39ff88]/50 hover:text-[#39ff88]">View Details</Link> 
                &nbsp;
              <button onClick={() => removeFromCart(dish)} className="inline-flex items-center rounded-full border border-red-400/20 bg-red-400/5 px-4 py-2 text-sm font-semibold text-red-300 transition hover:border-red-400/50 hover:bg-red-400/10">Remove</button>
              </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="h-fit rounded-2xl border border-white/10 bg-[#111d3a] p-6 shadow-xl shadow-black/20 lg:sticky lg:top-24">
        <h1 className="text-lg font-bold text-white">Order Summary</h1>
        <div className="my-5 border-t border-white/10"></div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-400">Total</p>
          <p className="text-2xl font-extrabold text-[#39ff88]">ETB  {cart.reduce((acc, dish) => acc + dish.price * (dish.quantity || 1), 0)}</p>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">Your order total is calculated from the items in your cart.</p>
        <Link href="/checkout" className="mt-6 flex w-full items-center justify-center rounded-full bg-[#39ff88] px-5 py-3.5 text-sm font-bold text-[#0b132b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#65ffa3] hover:shadow-[0_8px_25px_rgba(57,255,136,0.15)]">Continue to checkout →</Link>
        {/* <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-6 w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>  */}

  {/* {error && <p className="mt-3 text-sm text-red-600">{error}</p>} */}
      </div>
        </div>
      </div>
    </div>
  );
}





export default Cart;
