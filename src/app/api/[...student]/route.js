import { NextResponse } from "next/server";

export function GET(request,content) {
    const data = content.params.student;
    return NextResponse.json({ result: data }, { status: 200 });
  }