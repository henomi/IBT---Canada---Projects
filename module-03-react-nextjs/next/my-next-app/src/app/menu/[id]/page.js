
import { db } from '@/lib/db';

async function dishesDetail({params}) {
    const {id} = await params;
  const dish = await db.dish.findUnique({where: {id}});

  return (
   <div className="bg-white shadow-md rounded-lg p-4 m-4 text-black">
      <div className="flex justify-center items-center  ">
        <img src={dish.image} alt={dish.name} className="w-90 h-60 rounded-lg" />
      </div>
      <h1>{dish.name}</h1>
      <p>ETB  {dish.price}</p>
      <p>{dish.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default dishesDetail;