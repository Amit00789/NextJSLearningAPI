import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json({name: 'Amit Goyal', age: 22, city: 'Delhi'}, {status: 200})
}



// that's how we make api route in next js
// for ui routes we used to make folder which will be the route and in that page.js
// but for api route we create folder with route.js file
// it's mandatory to create route.js file
// here we can have get post put delete all the requests