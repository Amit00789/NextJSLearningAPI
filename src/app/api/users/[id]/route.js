import { NextResponse } from "next/server";
import { user } from "../../../../db";

export function GET(request, content) {
  const data = user.filter((item) => item.id == content.params.id);
  return NextResponse.json({ result: data[0] }, { status: 200 });
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  if (
    !payload ||
    !payload.id ||
    !payload.name ||
    !payload.age ||
    !payload.city
  ) {
    return NextResponse.json(
      { result: "please send the required fields !!" },
      { status: 200 }
    );
  }
  return NextResponse.json({ result: payload }, { status: 200 });
}

//that's how we create put apis
// it should be hadled with dynamic route
