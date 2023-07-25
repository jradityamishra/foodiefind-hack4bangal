import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/mongo/index";
import { Stall } from "../../../../lib/mongo/models/Stall";

export const PUT = async (request, { params }) => {
  try {
    await connectDb();
    const { id } = params;
    const { email, ...otherDetails } = await request.json();

    const post = await Stall.findById(id);
    console.log(post);
    if (post.postedBy == email) {
      await post.updateOne({ $set: otherDetails });
      return NextResponse.json(
        { error: null, result: "updated successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: null, result: "you are not the correct user" },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const { id } = params;
    const stall = await Stall.findById(id);
    if (stall) {
      return NextResponse.json(
        { error: null, result: JSON.stringify(stall) },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
