
import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { findUserByEmail } from "@/lib/auth/users";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getSession();

    if (!session?.sub || !session?.email) {
      return NextResponse.json(
        { message: "Not authenticated." },
        { status: 401 }
      );
    }

    const user = await findUserByEmail(session.email);

    if (!user || user.id !== session.sub) {
      return NextResponse.json(
        { message: "Not authenticated." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Session check error:", error);

    return NextResponse.json(
      { message: "Unable to verify session." },
      { status: 500 }
    );
  }
}
