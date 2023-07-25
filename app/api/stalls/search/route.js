import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/mongo/index";
import { Stall } from "../../../../lib/mongo/models/Stall";

export const GET=async(request)=>{
    const url=new URL(request.url);

    const name=url.searchParams.get("stallname");
    console.log(name);
    try{
        await connectDb();

        const stall=await Stall.find({stallname:{$regex:name,$options:"i"}});

        return NextResponse.json({error:null,result:stall},{status:200});
    }catch(error){
        return NextResponse.json({error,result:null},{status:500})
    }
}

