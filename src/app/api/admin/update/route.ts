import { connect } from "@/utils/db";
import Admin from "@/models/adminModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { getDataFromToken } from "@/utils/getDataFromToken";

connect();

export async function PATCH(request: NextRequest) {
  try {


     const tokenResponse = getDataFromToken(request);
     if (tokenResponse.error) {
       return NextResponse.json(
         { success: false, error: tokenResponse.error },
         { status: 401 }
       );
     }


    const reqBody = await request.json();
    const { id, username, password } = reqBody;

    if (!id || !username || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log(reqBody);

    const user = await Admin.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    user.username = username;
    user.password = hashedPassword;

    const updatedUser = await user.save();
    console.log(updatedUser);

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during user update:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
