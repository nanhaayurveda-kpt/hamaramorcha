import * as arctic from "arctic";
import { NextResponse } from "next/server";
import {
  STATE_COOKIE,
  VERIFIER_COOKIE,
  createGoogleClient,
} from "@/lib/auth";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;
  const returnTo = requestUrl.searchParams.get("returnTo") ?? "/";

  const google = createGoogleClient(origin);
  const state = arctic.generateState();
  const codeVerifier = arctic.generateCodeVerifier();
  const scopes = ["openid", "profile", "email"];

  const authUrl = google.createAuthorizationURL(state, codeVerifier, scopes);

  const response = NextResponse.redirect(authUrl);
  const secure = requestUrl.protocol === "https:";

  response.cookies.set(STATE_COOKIE, `${state}|${returnTo}`, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  response.cookies.set(VERIFIER_COOKIE, codeVerifier, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return response;
}