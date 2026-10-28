import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/authorization";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const { user, error } = await requireAdmin();

 
  if (error === "UNAUTHENTICATED") {
    redirect("/signin?callbackUrl=%2Fadmin");
  }

  
  if (error === "FORBIDDEN" || !user) {
    redirect("/");
  }

  const [dishes, orders] = await Promise.all([
    db.dish.findMany(),
    db.order.findMany(),
  ]);

  const stats = [
    {
      label: "Total dishes",
      value: dishes.length,
      description: "Dishes in your menu",
      href: "/menu",
    },
    {
      label: "Total orders",
      value: orders.length,
      description: "Orders recorded",
      href: "/order",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b132b] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#39ff88]">
              Adis Eatery
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Admin dashboard
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              Welcome back, {user.name}. Manage your restaurant from here.
            </p>
          </div>

          <Link
            href="/"
            className="w-fit rounded-xl border border-white/15 bg-[#111d3a] px-5 py-3 text-sm font-semibold transition duration-300 hover:border-[#39ff88]/60 hover:bg-[#39ff88] hover:text-[#0b132b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
          >
            View restaurant
          </Link>
        </header>

        <section className="mt-9">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Overview
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="group rounded-2xl border border-white/10 bg-[#111d3a] p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#39ff88]/50 hover:shadow-xl hover:shadow-[#39ff88]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] sm:p-7"
              >
                <p className="text-sm font-medium text-slate-400">
                  {stat.label}
                </p>

                <p className="mt-4 text-4xl font-extrabold tabular-nums text-[#39ff88] sm:text-5xl">
                  {stat.value}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-400">
                    {stat.description}
                  </p>
                  <span className="text-xl text-[#39ff88] transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Quick actions
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/menu"
              className="rounded-2xl border border-white/10 bg-[#111d3a] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#39ff88]/50 hover:bg-[#15213d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] sm:p-6"
            >
              <h3 className="font-bold transition-colors group-hover:text-[#39ff88]">
                Manage menu
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Review the dishes available to customers.
              </p>
            </Link>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-white/10 bg-[#111d3a] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#39ff88]/50 hover:bg-[#15213d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] sm:p-6"
            >
              <h3 className="font-bold">View orders</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Open your existing order page.
              </p>
            </Link>

            <div className="rounded-2xl border border-white/10 bg-[#111d3a] p-5 sm:p-6">
              <h3 className="font-bold">Admin account</h3>
              <p className="mt-2 break-words text-sm leading-6 text-slate-400">
                Signed in as {user.email}
              </p>
              <span className="mt-4 inline-block rounded-full border border-[#39ff88]/25 bg-[#39ff88]/10 px-3 py-1 text-xs font-semibold text-[#39ff88]">
                Administrator
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}