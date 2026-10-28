import { getOrder } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/authorization";
import RevenueChart from "./RevenueChart";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function AdminDashboard() {
  const { user, error } = await requireAdmin();

 
  if (error === "UNAUTHENTICATED") {
    redirect("/signin?callbackUrl=%2Fadmin");
  }

  
  if (error === "FORBIDDEN" || !user) {
    redirect("/");
  }
    const orders = await db.dish.findMany();

    const byArea = ["bole", "megenagna", "kality", "piazza"].map((area) => ({ area,
        revenue: orders.filter((order) => order.address === area).reduce((acc, order) => acc + order.total, 0),
    }));

    return <RevenueChart revenue={byArea} />;
}


