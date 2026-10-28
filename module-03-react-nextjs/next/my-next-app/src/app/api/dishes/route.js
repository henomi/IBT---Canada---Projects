
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/authorization";

export async function GET() {
  try {
    const dishes = await db.dish.findMany();
    return NextResponse.json(dishes);
  } catch (error) {
    console.error("Fetch dishes error:", error);
    return NextResponse.json(
      { message: "Unable to fetch dishes." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const auth = await requireAdmin();

  if (auth.error) {
    return NextResponse.json(
      {
        message:
          auth.error === "UNAUTHENTICATED"
            ? "Please sign in."
            : "Admin access required.",
      },
      {
        status: auth.error === "UNAUTHENTICATED" ? 401 : 403,
      }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { message: "Dish details must be an object." },
      { status: 400 }
    );
  }

  const { name, description, price, category, available } = body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.trim().length > 100 ||
    typeof description !== "string" ||
    description.trim().length > 1000 ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price <= 0 ||
    typeof category !== "string" ||
    !category.trim() ||
    category.trim().length > 50 ||
    (available !== undefined && typeof available !== "boolean")
  ) {
    return NextResponse.json(
      { message: "Invalid dish details." },
      { status: 400 }
    );
  }

  try {
    const dish = await db.dish.create({
      data: {
        name: name.trim(),
        description: description.trim(),
        price,
        category: category.trim(),
        available: available ?? true,
      },
    });

    return NextResponse.json(
      { message: "Dish created successfully.", dish },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create dish error:", error);
    return NextResponse.json(
      { message: "Unable to create dish." },
      { status: 500 }
    );
  }
}
