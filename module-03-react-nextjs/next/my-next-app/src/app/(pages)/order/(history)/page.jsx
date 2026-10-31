import { db } from "@/lib/db";
import Link from "next/link";

async function OrderHistory() {
  const orders = await db.order.findMany();

  const sorted = [...orders].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (sorted.length === 0) {
    return (
      <div className="mx-auto min-h-screen bg-[#0b132b] px-4 py-10 text-white sm:px-6 lg:px-10">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Order History
        </h1>
        <p className="rounded-2xl border border-white/10 bg-[#111d3a] p-6 text-slate-300 shadow-lg">
          No orders found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b132b] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-10">
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Order History
      </h1>
      <h2 className="mb-8 text-sm font-semibold text-slate-400">
        Orders <span className="text-[#39ff88]">{sorted.length}</span>
      </h2>
      <ul className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        {sorted.map((order) => (
          <li
            key={order.id}
            className="rounded-2xl border border-white/10 bg-[#111d3a] p-5 shadow-lg shadow-black/10 transition duration-300 hover:border-[#39ff88]/40 hover:shadow-xl sm:p-6"
          >
            <p className="mb-4 break-words text-lg font-bold text-white sm:text-xl">{order.customer.name}</p>
            <p className="mb-3 text-lg font-bold text-[#39ff88]">{order.id}</p>
            <h2 className="mb-4 break-words text-lg font-bold text-white sm:text-xl">
              {order.items.map((order) => order.name).join(", ")}
            </h2>
            <p className="mb-3 text-lg font-bold text-[#39ff88]">
              Total Price: {order.total}
            </p>
            <p className="mb-2 text-sm text-slate-300 sm:text-base">
              Status: <span className="font-semibold text-white">{order.status}</span>
            </p>
            <p className="mb-2 break-words text-sm text-slate-400 sm:text-base">
              Created At: {order.createdAt}
            </p>
            {/* <p className="break-words text-sm text-slate-400 sm:text-base">
              Updated At: {order.updatedAt}
            </p> */}
            <Link href="/track">
            <p className="mb-3 text-lg font-bold text-[#39ff88] hover:text-white hover:shadow-xl sm:p-6">Track your meal</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;