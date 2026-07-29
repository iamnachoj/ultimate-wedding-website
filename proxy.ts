import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");

  if (!auth) {
    return unauthorized();
  }

  const [, encoded] = auth.split(" ");

  const decoded = Buffer.from(encoded, "base64").toString();

  const [username, password] = decoded.split(":");

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return unauthorized();
  }

  return NextResponse.next();
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Wedding Admin"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};