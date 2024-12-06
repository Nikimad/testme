import { NextResponse } from "next/server";
import { api } from "./lib/api";
import { cookies } from "next/headers";

export async function middleware(request) {
  const url = new URL(request.url);
  
  if (url.pathname === "/signin" || url.pathname === "/signup") {
    const [_, user] = await api.getUser(cookies().toString());
    if (user) return NextResponse.redirect(new URL("/", request.url));
  }
  
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
