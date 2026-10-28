import React from 'react'
import DishCard from './DishCard'

async function DishList({dishes}) {
// await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default DishList;