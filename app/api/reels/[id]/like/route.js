import { NextResponse } from "next/server";
import { Reel } from "../../../../../lib/mongo/models/Reel";
import { connectDb } from "../../../../../lib/mongo/index";

export const PUT = async (request, { params }) => {
  // const url = new URL(request.url);
  // const id = url.searchParams.get("id");
  const { id } = params;
  const { email } = await request.json();

  console.log(email);
  console.log(id);

  try {
    await connectDb();
    const post = await Reel.findById(id);
    if (post.like.includes(email)) {
      await post.updateOne({ $pull: { like: email } });
      return NextResponse.json(
        { error: null, result: "Post disliked" },
        { status: 200 }
      );
    } else {
      await post.updateOne({ $push: { like: email } });
      return NextResponse.json(
        { error: null, result: "Post liked" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
