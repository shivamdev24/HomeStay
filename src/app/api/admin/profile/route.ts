import { connect } from "@/utils/db";
import { getDataFromToken } from "@/utils/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import Admin from "@/models/adminModels";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
     if (userId.error) {
       return NextResponse.json(
         { success: false, error: userId.error },
         { status: 401 }
       );
     }

    const user = await Admin.findById({ _id: userId }).select("-password");

    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
