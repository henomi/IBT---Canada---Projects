
import { cookies } from "next/headers";
import { createToken, verifyToken } from "./token";

const COOKIE_NAME = "adis_eatery_session";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

export async function createSession(user) {
  const token = await createToken(user);
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    ...cookieOptions,
    maxAge: 60 * 60,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return null;

  return verifyToken(token);
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    ...cookieOptions,
    maxAge: 0,
  });
}
