import { db } from '@/lib/db';

async function OrderHistory() {
  const orders = await db.order.findMany();
  return (
    <div>
      <h1>Order History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h2>{order.dishes.map((dish) => dish.name).join(', ')}</h2>
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <p>Created At: {order.createdAt}</p>
            <p>Updated At: {order.updatedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;