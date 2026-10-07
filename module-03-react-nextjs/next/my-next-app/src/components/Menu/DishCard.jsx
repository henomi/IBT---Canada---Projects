

import React from 'react'

const DishCard = (dish) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-40 m-4">
      <h1>{dish.name}</h1>
      <p>{dish.price}</p>
    </div>
  );
}

export default DishCard;