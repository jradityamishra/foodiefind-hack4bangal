import { connectDb } from "../../../../lib/mongo/index";
import { Test } from "../../../../lib/mongo/models/testModel";
import { NextResponse } from "next/server";

/**
 * @param {import('next/server').NextRequest} request
 */
export async function POST(request) {
  const { name } = await request.json();
  console.log(name);
  await connectDb();
  try {
    const test = await Test.create({ name });
    return NextResponse.json({ error: null, result: test });
  } catch (err) {
    return NextResponse.json({ error: err, result: null });
  }
}
