import { connect } from "@/utils/db"
import User from "@/models/adminModels"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    // Await the parsed JSON body
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Validation (TODO: add your validation logic)
    console.log(reqBody);

    // Check if the user already exists with either the same email or username
    const user = await User.findOne();

    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 400 }
      );
    }

    // Hash the password using bcryptjs
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { error: "Check your credentials" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
console.log(token);
    const response = NextResponse.json({
      message: "User login successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    

    return response;





  } catch (error: any) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
