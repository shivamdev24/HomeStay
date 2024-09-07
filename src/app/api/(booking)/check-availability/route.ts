import { connect } from "@/utils/db"; // Your MongoDB connection utility
import Booking from "@/models/bookingModels"; // Import your Booking schema
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

// Connect to the database
connect();

// GET - Check room availability for a given date range
export async function GET(request: NextRequest) {
  try {
   
  

    // Extract query parameters
    const checkInDateStr = request.nextUrl.searchParams.get("checkInDate");
    const checkOutDateStr = request.nextUrl.searchParams.get("checkOutDate");
    const roomType = request.nextUrl.searchParams.get("roomType");

    // Validate query parameters
    if (!checkInDateStr || !checkOutDateStr || !roomType) {
      return NextResponse.json(
        {
          message: "Check-in date, check-out date, and room type are required",
        },
        { status: 400 }
      );
    }

    // Convert date strings to Date objects
    const checkInDate = new Date(checkInDateStr);
    const checkOutDate = new Date(checkOutDateStr);

    // Validate date range
    if (checkInDate >= checkOutDate) {
      return NextResponse.json(
        { message: "Check-out date must be after check-in date" },
        { status: 400 }
      );
    }

    // Find overlapping bookings
    const overlappingBookings = await Booking.find({
      room: roomType,
      $or: [
        {
          checkInDate: { $lt: checkOutDate },
          checkOutDate: { $gt: checkInDate },
        },
      ],
    });

    const isAvailable = overlappingBookings.length === 0;

    // Return the result
    return NextResponse.json({
      message: isAvailable ? "Room is available" : "Room is not available",
      isAvailable,
    });
  } catch (error: any) {
    console.error("Error checking room availability:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
