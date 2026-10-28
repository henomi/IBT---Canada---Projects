

import { getSession } from "./session";
import { findUserByEmail } from "./users";

export async function requireUser() {
  const session = await getSession();

  if (!session?.sub || !session?.email) {
    return { user: null, error: "UNAUTHENTICATED" };
  }

  const user = await findUserByEmail(session.email);

  if (!user || user.id !== session.sub) {
    return { user: null, error: "UNAUTHENTICATED" };
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    error: null,
  };
}

export async function requireAdmin() {
  const result = await requireUser();

  if (result.error) {
    return result;
  }

  if (result.user.role !== "admin") {
    return { user: null, error: "FORBIDDEN" };
  }

  return result;
}
