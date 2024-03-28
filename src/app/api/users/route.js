import { NextResponse } from "next/server";
import { user } from "../../../db";

export function GET(request) {
  const data = user;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Please send the required fields" },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "user details created successfuly for " + payload.name },
    { status: 201 }
  );
}

// that's how we make api route in next js
// for ui routes we used to make folder which will be the route and in that page.js
// but for api route we create folder with route.js file
// it's mandatory to create route.js file
// here we can have get post put delete all the requests
// that's how we can create post request
// to get the body of the request we use request.json
// it's an await function so we have to make post function as async
