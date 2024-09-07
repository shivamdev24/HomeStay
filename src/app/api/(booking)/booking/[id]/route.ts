import { connect } from "@/utils/db"; // Your MongoDB connection utility
import Booking from "@/models/bookingModels"; // Import your Booking schema
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

// Connect to the database
connect();


// GET - Fetch a booking by ID
export async function GET(request: NextRequest) {
  try {



     const tokenResponse = getDataFromToken(request);
     if (tokenResponse.error) {
       return NextResponse.json(
         { success: false, error: tokenResponse.error },
         { status: 401 }
       );
     }

    const id = request.nextUrl.searchParams.get("id"); // Get ID from query parameters

    if (!id) {
      return NextResponse.json(
        { message: "Booking ID is required" },
        { status: 400 }
      );
    }

    // Find booking by ID
    const booking = await Booking.findById(id);

    if (!booking) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }

    // Return the booking in the response
    return NextResponse.json({
      message: "Booking retrieved successfully",
      booking,
    });
  } catch (error: any) {
    console.error("Error fetching booking:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
