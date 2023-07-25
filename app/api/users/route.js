import { NextResponse } from "next/server";
import { Register } from "../../../lib/mongo/models/Register";
import { connectDb } from "../../../lib/mongo/index";

export const POST = async (request) => {
  const { id } = await request.json();
  console.log("id", id);
  try {
    await connectDb();
    const user = await Register.findOne({email: id});
    console.log(user);
    return NextResponse.json({ error: null, result: user });
  } catch (error) {
    return NextResponse.json({ error, result: null });
  }
};
