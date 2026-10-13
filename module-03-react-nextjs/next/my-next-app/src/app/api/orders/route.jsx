import { db, createOrder } from "@/lib/db";

export async function POST(req) {
    try {
        const body = await req.json();
        const { dishes } = await body;
        if (!Array.isArray(dishes) || dishes.length === 0) {
            return Response.json
            ({message: "your cart is empty"}, { status: 400 });
        }

        const orderItems=[];

        for (const dish of dishes) {
            const dishItem = await db.dish.findUnique({where: {id: dish.id}});
            orderItems.push(dishItem);
        
        if(!dishItem || !dishItem.available){
            return Response.json
            ({message: `dish ${dish.id} is not available`}, { status: 400 });
        }
        const quantity = Number(dish.quantity);
        if(!Number.isInteger(quantity) || quantity > dishItem.available){
            return Response.json
            ({message: `dish ${dish} invalid quantity`}, { status: 400 });
        }
        orderItems.push({
        dishId:dishItem.id,
        name:dishItem.name,
        price:dishItem.price,
        quantity:quantity,});

        }
        const totalPrice = orderItems.reduce((acc, dishItem) => acc + dishItem.price * dishItem.quantity, 0);
        const order = await createOrder({
            dishes: orderItems,
            totalPrice: totalPrice,
            currency: "ETB",
        });

        return Response.json({message: `order created successfully`}, { status: 201 });
    }
    catch (error) {
        console.error(error);
        return Response.json({message: "unable to create your order"}, { status: 500 });
    }


}


