import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const response = NextResponse.redirect(new URL("/", origin), 303);
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
