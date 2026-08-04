import "server-only";
import * as arctic from "arctic";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const authSecret = process.env.AUTH_SECRET;

if (!clientId || !clientSecret || !authSecret) {
  throw new Error("Missing Google OAuth or auth secret environment variables");
}

const secretKey = new TextEncoder().encode(authSecret);

export const SESSION_COOKIE = "hm_session";
export const STATE_COOKIE = "hm_oauth_state";
export const VERIFIER_COOKIE = "hm_oauth_verifier";

export function getRedirectUri(origin: string): string {
  return `${origin}/api/auth/callback/google`;
}

export function createGoogleClient(origin: string) {
  return new arctic.Google(clientId!, clientSecret!, getRedirectUri(origin));
}

export interface SessionUser {
  sub: string;
  name: string;
  email: string;
  picture?: string;
}

export async function createSession(user: SessionUser): Promise<string> {
  return await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secretKey);
}

export async function getSession(): Promise<SessionUser | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secretKey);
    return {
      sub: String(payload.sub ?? payload.userId ?? ""),
      name: String(payload.name ?? ""),
      email: String(payload.email ?? ""),
      picture: payload.picture ? String(payload.picture) : undefined,
    };
  } catch {
    return null;
  }
}
