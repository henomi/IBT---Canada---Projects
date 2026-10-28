
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/authorization";

function authorizationResponse(auth) {
  if (!auth.error) return null;

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

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const dish = await db.dish.findUnique({ where: { id } });

    if (!dish) {
      return NextResponse.json(
        { message: "Dish not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(dish);
  } catch (error) {
    console.error("Fetch dish error:", error);
    return NextResponse.json(
      { message: "Unable to fetch dish." },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  const auth = await requireAdmin();
  const authResponse = authorizationResponse(auth);

  if (authResponse) return authResponse;

  let body;
  let id;

  try {
    ({ id } = await params);
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { message: "Dish updates must be an object." },
      { status: 400 }
    );
  }

  const allowedFields = [
    "name",
    "description",
    "price",
    "category",
    "available",
  ];

  const updates = {};

  for (const field of allowedFields) {
    if (Object.hasOwn(body, field)) {
      updates[field] = body[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(
      { message: "No valid fields provided." },
      { status: 400 }
    );
  }

  if (
    ("name" in updates &&
      (typeof updates.name !== "string" ||
        !updates.name.trim() ||
        updates.name.trim().length > 100)) ||
    ("description" in updates &&
      (typeof updates.description !== "string" ||
        updates.description.trim().length > 1000)) ||
    ("category" in updates &&
      (typeof updates.category !== "string" ||
        !updates.category.trim() ||
        updates.category.trim().length > 50)) ||
    ("price" in updates &&
      (typeof updates.price !== "number" ||
        !Number.isFinite(updates.price) ||
        updates.price <= 0)) ||
    ("available" in updates &&
      typeof updates.available !== "boolean")
  ) {
    return NextResponse.json(
      { message: "Invalid dish data." },
      { status: 400 }
    );
  }

  if (typeof updates.name === "string") {
    updates.name = updates.name.trim();
  }

  if (typeof updates.description === "string") {
    updates.description = updates.description.trim();
  }

  if (typeof updates.category === "string") {
    updates.category = updates.category.trim();
  }

  try {
    const existingDish = await db.dish.findUnique({
      where: { id },
    });

    if (!existingDish) {
      return NextResponse.json(
        { message: "Dish not found." },
        { status: 404 }
      );
    }

    const updatedDish = await db.dish.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updatedDish);
  } catch (error) {
    console.error("Update dish error:", error);
    return NextResponse.json(
      { message: "Unable to update dish." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = await requireAdmin();
  const authResponse = authorizationResponse(auth);

  if (authResponse) return authResponse;

  try {
    const { id } = await params;

    const existingDish = await db.dish.findUnique({
      where: { id },
    });

    if (!existingDish) {
      return NextResponse.json(
        { message: "Dish not found." },
        { status: 404 }
      );
    }

    const deletedDish = await db.dish.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Dish deleted successfully.",
      dish: deletedDish,
    });
  } catch (error) {
    console.error("Delete dish error:", error);
    return NextResponse.json(
      { message: "Unable to delete dish." },
      { status: 500 }
    );
  }
}
