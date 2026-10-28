"use client";

import { orderSchema } from "@/lib/schema";
import { useState } from "react";
import { useCart } from "@/Context/cartContext";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const input = ({
        email,
        name,
        phone,
        address,
        dishes: cart.map((dish) => ({ id: dish.id, quantity: dish.quantity, name: dish.name || 1 })),
        notes,
      });
      const valid = orderSchema.safeParse(input);
      if (!valid.success) {
        setError(valid.error.issues.map((issue) => issue.message).join(", "));
        return;
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valid.data),
      });

      const result = await response.json();
      console.log("API result:", result);

      if (!response.ok) {
        throw new Error(result.message || "Checkout failed.");
      }

      // Clear the cart only after a successful order.
      clearCart();
      router.push(`/order`);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-white/10 bg-[#111d3a] p-5 text-white shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-[#39ff88] focus:ring-2 focus:ring-[#39ff88]/20"
        />
        <label
          htmlFor="phone"
          className="block pt-3 text-sm font-semibold text-slate-200"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-[#39ff88] focus:ring-2 focus:ring-[#39ff88]/20"
        />
        <label
          htmlFor="name"
          className="block pt-3 text-sm font-semibold text-slate-200"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-[#39ff88] focus:ring-2 focus:ring-[#39ff88]/20"
        />
        <label htmlFor="address" className="block pt-3 text-sm font-semibold text-slate-200">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-[#39ff88] focus:ring-2 focus:ring-[#39ff88]/20"
        />
        <label
          htmlFor="notes"
          className="block pt-3 text-sm font-semibold text-slate-200"
        >
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          type="text"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          className="min-h-28 w-full resize-y rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-[#39ff88] focus:ring-2 focus:ring-[#39ff88]/20"
        />
      </div>
      <button
        type="submit" disabled={loading || cart.length === 0}
        className="w-full rounded-xl bg-[#39ff88] px-5 py-3.5 text-sm font-extrabold text-[#0b132b] shadow-lg shadow-[#39ff88]/10 transition duration-200 hover:bg-[#24e978] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111d3a] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Loading..." : "Checkout"}
      </button>
      {error && <p className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm leading-6 text-red-400">{error}</p>}
    </form>
  );
}