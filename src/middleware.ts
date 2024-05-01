// import { match } from "assert";
import { NextRequest, NextResponse } from "next/server";
// export const middleware = (req: NextRequest) => {
//   return NextResponse.redirect(new URL("/", req.url));
// };

// export const config ={
//     matcher:'/profile',
// }

// export const middleware = (req: NextRequest) => {
//   if (req.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", req.url));
//   }
// };

export const middleware = (req: NextRequest) => {
  const response = NextResponse.next();

  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header","custom value")
  return response;
};
