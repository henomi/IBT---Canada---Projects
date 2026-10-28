
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import AddToCartButton from '@/components/Menu/AddToCartButton';

async function dishesDetail({params}) {
    const {id} = await params;
  const dish = await db.dish.findUnique({where: {id}});
  if (!dish) notFound();
  

  return (
   <div className="min-h-screen bg-[#0b132b] px-4 py-8 text-white sm:px-6 sm:py-12">
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111d3a] shadow-2xl shadow-black/20">
      <div className="flex justify-center items-center overflow-hidden bg-[#15213d]">
        <img src={dish.image} alt={dish.name} className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80 lg:h-[440px]" />
      </div>
      <div className="p-5 sm:p-8 lg:p-10">
      <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#39ff88] uppercase">Adis Eatery · Made with care</p>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{dish.name}</h1>
      <p className="mt-5 text-2xl font-extrabold text-[#39ff88] sm:text-3xl">ETB  {dish.price}</p>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{dish.description}</p>
      <div className="mt-8 border-t border-white/10 pt-6">
      <AddToCartButton dish={dish} />
      </div>
      </div>
    </div>
   </div>
  );
}

export default dishesDetail;
