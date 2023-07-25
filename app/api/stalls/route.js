import { NextResponse } from "next/server";
import { connectDb } from "../../../lib/mongo/index";
import { Stall } from "../../../lib/mongo/models/Stall";

export const GET = async (request) => {
  try {
    await connectDb();
    const get = await Stall.find({});
    if (get) {
      return NextResponse.json(
        { error: null, result: JSON.stringify(get) },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDb();
    const body = await request.json();
    await Stall.create(body);
    return NextResponse.json(
      { error: null, result: "stall created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
