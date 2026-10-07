import React from 'react'
import DishList from '@/components/Menu/DishList';

async function Menu({menu}) {
  return (
    <main>
      <DishList dishes={menu} />
    </main>
  );
}

export default Menu;