import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";

export async function proxy(request) {
  const session = await getSession(request);

  if (!session) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname.startsWith("/admin") && session.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/order/:path*", "/admin/:path*","/track/:path*"],
};