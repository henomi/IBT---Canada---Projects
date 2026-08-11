import {withVat} from "./pricing.js"
import format from "./pricing.js";
import { total } from "./pricing.js";
import { orders } from "./orders.js";

const ordersWithTotal = orders.map(order => {
    return {
        ...order,
        subtotal: total(order.items),
        total: withVat(total(order.items))
    };
});

const filteredOrders =
    ordersWithTotal.filter(order => order.total > 500);

const grandTotal = filteredOrders.reduce((sum, order) => {
    return sum + order.total;
}, 0);



console.log(ordersWithTotal);
console.log(filteredOrders);
console.log(format(grandTotal));