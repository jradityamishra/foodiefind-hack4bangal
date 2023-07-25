import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/mongo/index";
import { Stall } from "../../../../../lib/mongo/models/Stall";

export const POST=async(request,{params})=>{
    try {
        await connectDb();
        const { id } = params;
        const { report } = await request.json();
    
        const stall = await Stall.findById(id);
        console.log(id);
        if (stall) {
          stall.reports.push({
            report:report,
            stallid:id
          });
          await stall.save();
          return NextResponse.json(
            { error: null, result: stall.reports },
            { status: 200 }
          );
        }
      } catch (error) {
        return NextResponse.json({ error, result: null }, { status: 500 });
      }
}