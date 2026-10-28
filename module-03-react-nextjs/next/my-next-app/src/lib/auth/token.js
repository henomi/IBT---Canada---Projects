
import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret || new TextEncoder().encode(secret).length < 32) {
  throw new Error(
    "JWT_SECRET must contain at least 32 bytes of secret material."
  );
}

const secretKey = new TextEncoder().encode(secret);

export async function createToken(user) {
  return new SignJWT({
    email: user.email,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secretKey);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch {
    return null;
  }
}
