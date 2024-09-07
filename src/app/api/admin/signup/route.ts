

import { connect } from "@/utils/db";
import Admin from "@/models/adminModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/utils/mailer';

connect();

export async function POST(request: NextRequest) {
  try {
    // Await the parsed JSON body
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Validation (TODO: add your validation logic)
    console.log(reqBody);



     if (!username || !email || !password) {
       return NextResponse.json(
         { message: "Missing required fields" },
         { status: 400 }
       );
     }


    // Check if any user already exists in the database
    const existingUser = await Admin.countDocuments();
    if (existingUser >= 1) {
      return NextResponse.json(
        {
          message: "you are not allowed to signup. Only one Admin are allowed.",
        },
        { status: 400 }
      );
    }

    // Check if the user already exists with either the same email or username
    // const existingUser = await Admin.findOne({
    //   $or: [{ email }, { username }]
    // });

    // if (existingUser) {
    //   // Check which field is duplicated and return an appropriate message
    //   if (existingUser.email === email) {
    //     return NextResponse.json(
    //       { error: "Email is already registered" },
    //       { status: 400 }
    //     );
    //   }
    //   if (existingUser.username === username) {
    //     return NextResponse.json(
    //       { error: "Username is already taken" },
    //       { status: 400 }
    //     );
    //   }
    // }

    // Hash the password using bcryptjs
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create and save the new user
    const newUser = new Admin({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
