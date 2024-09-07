import { connect } from "@/utils/db";
import User from "@/models/adminModels";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();
    const { token } = reqBody;

    console.log(reqBody);
    
    const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}})
    

    if(!user) {
        return NextResponse.json({ message: "Invlaid Token" }, { status: 400 });
    }


    console.log(user);

    user.isVerified = true
    user.isVerifyToken = undefined
    user.isVerifyExpiry = undefined

    await user.save()

    return NextResponse.json({ message: "Email verified successfully" }, { status: 400 });

  } catch (error: any) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
