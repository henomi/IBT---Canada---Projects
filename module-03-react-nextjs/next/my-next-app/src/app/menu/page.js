import React from 'react'
import { Suspense } from 'react';
import DishList from '@/components/Menu/DishList';
// import dishes from '@/data/Dishes.json';
import { db } from '@/lib/db';
import CatagoryFilter from '@/components/Menu/CatagoryFilter';

async function Menu() {
  const dishes = await db.dish.findMany();
  return (
    <main>
      <CatagoryFilter categories={['All',
        ...new Set(dishes.map((dish) => dish.category))]
      } />

      <Suspense>
        <DishList dishes={dishes} fallback={<p>Loading...</p>} />
      </Suspense>
    </main>
  );
}

export default Menu;