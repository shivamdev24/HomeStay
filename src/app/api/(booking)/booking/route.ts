import { connect } from "@/utils/db"; // Your MongoDB connection utility
import Booking from "@/models/bookingModels"; // Import your Booking schema
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

// Connect to the database
connect();

// POST - Create a new booking
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const reqBody = await request.json();

    const {
      name,
      phone,
      email,
      address,
      room,
      adults,
      children,
      checkInDate,
      checkOutDate,
      numberOfNights,
    } = reqBody;

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !room ||
      adults === undefined ||
      children === undefined ||
      !checkInDate ||
      !checkOutDate ||
      !numberOfNights
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create and save the new booking
    const newBooking = new Booking({
      name,
      phone,
      email,
      address,
      room,
      adults,
      children,
      checkInDate: new Date(checkInDate),
      checkOutDate: new Date(checkOutDate),
      numberOfNights,
    });

    const savedBooking = await newBooking.save();
    console.log("Booking saved:", savedBooking);

    // Return the saved booking in the response
    return NextResponse.json({
      message: "Booking created successfully",
      booking: savedBooking,
    });
  } catch (error: any) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET - Fetch all bookings
export async function GET(request: NextRequest) {
  try {
 const tokenResponse = getDataFromToken(request);
 if (tokenResponse.error) {
   return NextResponse.json(
     { success: false, error: tokenResponse.error },
     { status: 401 }
   );
 }

    const bookings = await Booking.find();
    return NextResponse.json({ bookings });
  } catch (error: any) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
