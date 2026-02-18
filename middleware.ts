import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    const pathname = request.nextUrl.pathname;
    
    // Skip middleware for API routes, static files, and Next.js internals
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)$/)
    ) {
        return NextResponse.next();
    }
    
    // If on cheffmate.co.uk, check if visitor is from Norway
    if (hostname === "cheffmate.co.uk" || hostname.includes("cheffmate.co.uk")) {
        // Method 1: Check Vercel's IP country header (preferred - instant, no API calls)
        const country = request.headers.get("x-vercel-ip-country");
        const isNorwegian = country === "NO";
        
        // Method 2: Fallback to Accept-Language header if country header not available
        const acceptLanguage = request.headers.get("accept-language") || "";
        const isNorwegianLanguage = /^(no|nb|nn)/i.test(acceptLanguage);
        
        if (isNorwegian || isNorwegianLanguage) {
            const url = new URL(pathname, "https://cheffmate.org");
            url.search = request.nextUrl.search;
            url.hash = request.nextUrl.hash;
            return NextResponse.redirect(url);
        }
    }
    
    // If on cheffmate.org, force Norwegian language and NOK currency
    if (hostname === "cheffmate.org" || hostname.includes("cheffmate.org")) {
        const response = NextResponse.next();
        // Set cookies for language and currency
        response.cookies.set("lang", "no", { 
            path: "/", 
            maxAge: 60 * 60 * 24 * 365, // 1 year
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        });
        response.cookies.set("currency", "NOK", { 
            path: "/", 
            maxAge: 60 * 60 * 24 * 365, // 1 year
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        });
        return response;
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - files with extensions (images, fonts, etc.)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
    ],
};
