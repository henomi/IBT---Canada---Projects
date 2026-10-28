import { NextResponse } from "next/server";
import { orderSchema } from "@/lib/schema";
import { getDish, createOrder } from "@/lib/db";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = orderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues.map((i) => i.message).join(", ") },
      { status: 400 }
    );
  }

  const { email, name, phone, dishes, notes, address } = parsed.data;

  // Look up real dishes and prices on the server
  const items = [];
  let total = 0;

  for (const { id, quantity } of dishes) {
    const dish = await getDish(id);
    if (!dish || !dish.available) {
      return NextResponse.json(
        { message: `Dish ${id} is not available.` },
        { status: 400 }
      );
    }
    items.push({
      dishId: dish.id,
      name: dish.name,
      price: dish.price,
      quantity,
    });
    total += dish.price * quantity;
  }

  const order = await createOrder({
    customer: { email, name, phone, address },
    items,
    total,
    notes,
    currency: "ETB",
  });

  return NextResponse.json({ orderId: order.id }, { status: 201 });
}