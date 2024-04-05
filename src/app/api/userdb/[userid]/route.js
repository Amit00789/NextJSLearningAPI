import mongoose from "mongoose";
import { connectionStr } from "@/lib/database";
import { User } from "@/lib/model/user";
import { NextResponse } from "next/server";

export async function PUT(req,con) {
    const userId = con.params.userid;
    const filter = {_id: userId}
    const payload = await req.json()
    await mongoose.connect(connectionStr)
    const result = await User.findOneAndUpdate(filter,payload)
    return NextResponse.json({result: result, success : true})
}

export async function GET(req,con) {
    const userId = con.params.userid;
    const filter = {_id: userId}
    await mongoose.connect(connectionStr)
    const result = await User.findById(filter)
    return NextResponse.json({result: result, success : true})
}

export async function DELETE(req,con) {
    const userId = con.params.userid;
    const filter = {_id: userId}
    await mongoose.connect(connectionStr)
    const result = await User.deleteOne(filter)
    return NextResponse.json({result: result, success : true})
}