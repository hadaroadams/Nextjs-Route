import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const requestHeader = new Headers(req.headers);
  const headerList = headers();
  const theme = req.cookies.get("theme");
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));
  cookies().set("resultsPerPage", "20");
  console.log(requestHeader.get("Authorization"));
  console.log(headerList.get("Authorization"));
  return new Response("Get Profile data", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
};
