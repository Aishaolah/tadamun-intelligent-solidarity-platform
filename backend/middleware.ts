import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
    if (req.method === "OPTIONS") {
        return new NextResponse(null, {
        status: 204,
        headers: res.headers,
        });
    }

    return res;
}

// Apply only to API routes
export const config = {
    matcher: "/api/:path*",
};
