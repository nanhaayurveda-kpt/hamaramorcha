import { decodeIdToken } from "arctic";
import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  STATE_COOKIE,
  VERIFIER_COOKIE,
  createGoogleClient,
  createSession,
} from "@/lib/auth";

interface GoogleIdTokenClaims {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
}

function readCookie(request: Request, name: string): string | undefined {
  return request.headers
    .get("cookie")
    ?.split("; ")
    .find((part) => part.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;

  const code = requestUrl.searchParams.get("code");
  const state = requestUrl.searchParams.get("state");

  const storedState = readCookie(request, STATE_COOKIE);
  const codeVerifier = readCookie(request, VERIFIER_COOKIE);

  if (!code || !state || !storedState || !codeVerifier) {
    return NextResponse.redirect(new URL("/?login=failed", origin));
  }

  const [expectedState, returnTo = "/"] =
    decodeURIComponent(storedState).split("|");

  if (state !== expectedState) {
    return NextResponse.redirect(new URL("/?login=failed", origin));
  }

  try {
    const google = createGoogleClient(origin);
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const claims = decodeIdToken(tokens.idToken()) as GoogleIdTokenClaims;

    if (!claims.sub || !claims.email) {
      return NextResponse.redirect(new URL("/?login=failed", origin));
    }

    const token = await createSession({
      sub: claims.sub,
      name: claims.name ?? claims.email,
      email: claims.email,
      picture: claims.picture,
    });

    const safeReturnTo = returnTo.startsWith("/") ? returnTo : "/";
    const response = NextResponse.redirect(new URL(safeReturnTo, origin));
    const secure = requestUrl.protocol === "https:";

    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    response.cookies.delete(STATE_COOKIE);
    response.cookies.delete(VERIFIER_COOKIE);

    return response;
  } catch (error) {
    console.error("Google OAuth callback failed:", error);
    return NextResponse.redirect(new URL("/?login=failed", origin));
  }
}
