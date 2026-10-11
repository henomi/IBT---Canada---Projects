import React from 'react'
import Link from 'next/link'
import AddToCartButton from './AddToCartButton';

const DishCard = ({dish}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 text-black">
      <div className="flex justify-center items-center  ">
        <img src={dish.image} alt={dish.name} className="w-90 h-60 rounded-lg" />
      </div>
      <h1>{dish.name}</h1>
      <p>ETB  {dish.price}</p>
      <p>{dish.description.substring(0, 45) + '...'}</p>
      <Link href={`/menu/${dish.id}`}>View Details</Link>
      <AddToCartButton dish={dish} />
    </div>
  );
}

export default DishCard;