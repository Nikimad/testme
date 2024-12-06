import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = new URL(request.url);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
