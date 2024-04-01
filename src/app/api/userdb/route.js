import { connectionStr } from "@/lib/database";
import { User } from "@/lib/model/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await User.find();
  } catch (error) {
    data = [{ success: false }];
  }
  return NextResponse.json({ result: data, success: true });
}

export async function POST(req) {
  const payload = await req.json();
  let result = [];
  try {
    const user = new User(payload);
    await mongoose.connect(connectionStr);
    result = await user.save();
  } catch (error) {
    result = [{ success: false }];
  }
  return NextResponse.json({ result: result, success: true });
}
