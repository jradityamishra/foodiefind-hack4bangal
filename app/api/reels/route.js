import { NextResponse } from "next/server";
import { Reel } from "../../../lib/mongo/models/Reel";
import { connectDb } from "../../../lib/mongo/index";

export const GET = async (request) => {
  try {
    await connectDb();
    const get = await Reel.find({});
    if (get) {
      return NextResponse.json(
        { error: null, result: JSON.stringify(get) },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDb();
    const body = await request.json();
    console.log(body);

    const newReel = new Reel(body);

    await newReel.save();
    return NextResponse.json(
      { error: null, result: "posted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
