import React from 'react'
import Link from 'next/link'
import AddToCartButton from './AddToCartButton';

const DishCard = ({dish}) => {
  return (
    <div className="m-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b132b] p-4 text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#39ff88]/40 hover:shadow-xl hover:shadow-[#39ff88]/5 sm:p-5">
      <div className="flex items-center justify-center overflow-hidden rounded-xl bg-white/5">
        <img src={dish.image} alt={dish.name} className="h-52 w-full rounded-xl object-cover transition duration-500 hover:scale-105 sm:h-60" />
      </div>
      <h1 className="mt-4 line-clamp-1 text-xl font-bold text-white">{dish.name}</h1>
      <p className="mt-2 text-lg font-bold text-[#39ff88]">ETB {dish.price}</p>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{dish.description.substring(0, 45) + '...'}</p>
      <Link href={`/menu/${dish.id}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#39ff88] transition hover:gap-3 hover:text-white">
        View Details
      </Link>
      <div className="mt-4">
        <AddToCartButton dish={dish} />
      </div>
    </div>
  );
}

export default DishCard;