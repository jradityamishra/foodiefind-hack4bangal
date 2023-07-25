import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/mongo/index";
import { Stall } from "../../../../../lib/mongo/models/Stall";

export const POST = async (request, { params }) => {
  try {
    await connectDb();
    const { id } = params;
    const { comment, username, email } = await request.json();

    const stall = await Stall.findById(id);
    console.log(id);
    if (stall) {
      stall.comments.push({
        comment: comment,
        username: username,
        email: email,
      });
      await stall.save();
      return NextResponse.json(
        { error: null, result: stall.comments },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
