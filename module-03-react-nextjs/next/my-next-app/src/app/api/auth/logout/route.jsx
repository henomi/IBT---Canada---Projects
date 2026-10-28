
import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth/session";

export async function POST() {
  try {
    await deleteSession();

    return NextResponse.json({
      message: "Signed out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { message: "Unable to sign out." },
      { status: 500 }
    );
  }
}
