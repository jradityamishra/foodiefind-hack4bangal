import { NextResponse } from "next/server";
import { Register } from "../../../../lib/mongo/models/Register";
import { connectDb } from "../../../../lib/mongo/index";

export const POST = async (request) => {
  const url = new URL(request.url);

  const paramEmail = url.searchParams.get("email");
  const body = await request.json();
  const userEmail = body.email;

  try {
    await connectDb();
    if (paramEmail === userEmail) {
      return NextResponse.json(
        { error: "action forbidden", result: null },
        { status: 403 }
      );
    } else {
      const follow = await Register.findOne({ email: paramEmail });
      console.log(follow);
      //   return NextResponse.json(
      //     { error: null, result: "follow" },
      //     { status: 200 }
      //   );
      const following = await Register.findOne({ email: userEmail });

      if (!follow.followers.includes(body)) {
        await follow.updateOne({ $push: { followers: body } });
        await following.updateOne({ $push: { following: email } });

        return NextResponse(
          { error: null, result: "user followed!!" },
          { status: 200 }
        );
      } else {
        await follow.updateOne({ $pull: { followers: body } });
        await following.updateOne({ $pull: { following: email } });
        return NextResponse(
          { error: null, result: "userUnfollowed" },
          { status: 403 }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, result: null }, { status: 500 });
  }
};
