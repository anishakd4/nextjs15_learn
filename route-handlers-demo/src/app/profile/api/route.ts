// export async function GET() {
//   return new Response("Profile API data");
// }

import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
