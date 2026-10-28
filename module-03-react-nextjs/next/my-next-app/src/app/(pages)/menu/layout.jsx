
import CatagoryFilter from "@/components/Menu/CatagoryFilter";
import { db } from "@/lib/db";

async function MenuLayout({ children }) {
  const allDishes = await db.dish.findMany();

  const categories = [
    "All",
    ...new Set(allDishes.map((dish) => dish.category)),
  ];

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-[#0b132b] p-4 text-white sm:gap-8 sm:p-6 lg:flex-row lg:gap-10 lg:p-8">
      <aside className="w-full shrink-0 rounded-2xl border border-white/10 bg-[#111d3a] p-5 shadow-lg shadow-black/10 lg:sticky lg:top-24 lg:h-fit lg:w-64">
        <h2 className="mb-5 border-b border-white/10 pb-4 text-lg font-extrabold tracking-tight sm:text-xl">
          Categories <span className="text-[#39ff88]">.</span>
        </h2>

        <CatagoryFilter categories={categories} />
      </aside>

      <main className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}

export default MenuLayout;
