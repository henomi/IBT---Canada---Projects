
import React from 'react'
import { Suspense } from 'react';
import DishList from '@/components/Menu/DishList';
import { db } from '@/lib/db';
import CatagoryFilter from '@/components/Menu/CatagoryFilter';

async function Menu({ searchParams }) {
  const { category = 'All' } = await searchParams;
  const allDishes = await db.dish.findMany();
  // const categories = ['All', ...new Set(allDishes.map((dish) => dish.category))]
  const dishes = category === 'All' ? allDishes : allDishes.filter((dish) => dish.category === category);

  return (
    <main className="min-h-screen bg-[#0b132b] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-10">
      {/* <aside>
        <h1>Categories</h1>
        <CatagoryFilter categories={categories} />
      </aside> */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="mb-8 border-b border-white/10 pb-6 sm:mb-10 sm:pb-8">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#39ff88] uppercase">
            Discover our flavors
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="text-[#39ff88]">Menu.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore traditional Ethiopian favorites, comforting classics, and
            delicious dishes prepared to make every meal memorable.
          </p>
        </div>
        <Suspense fallback={<p className="animate-pulse rounded-xl border border-white/10 bg-[#111d3a] p-6 text-sm text-[#39ff88]">Loading dishes...</p>}>
          <DishList dishes={dishes}  />
        </Suspense>
      </section>
    </main>
  );
}

export default Menu;
