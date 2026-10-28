import { z } from "zod";
export const orderSchema = z.object({
    email: z.email({ error: "Email is required", }),
    name: z.string({ error: "Name is required", }).min(2, "Name must be at least 2 characters"),
    phone: z.string({ error: "Phone number is required", }).regex(/^(?:\+251|0)[79]\d{8}$/, "Phone number must start with 09… or +2519… followed by 8 digits"),
    dishes: z.array(z.object({
        id: z.union([z.string(), z.number()]), // match whatever your cart ids are
        quantity: z.number().int().min(1, "Quantity must be at least 1"),})).min(1, "Your cart is empty"),
        notes: z.string().max(200, "Notes cannot exceed 200 characters").optional(),

});