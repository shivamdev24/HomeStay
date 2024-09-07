import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Contact from "@/models/contactModels";
import {getDataFromToken} from "@/utils/getDataFromToken";

// Connect to the database
connect();






export async function PATCH(request: NextRequest) {
  try {
    // Get user ID from token
    const tokenResponse = getDataFromToken(request);
    if (tokenResponse.error) {
      return NextResponse.json(
        { success: false, error: tokenResponse.error },
        { status: 401 }
      );
    }


    // Extract ID from the URL path
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, error: "Valid Contact ID is required." },
        { status: 400 }
      );
    }

    // Parse the incoming request body
    const { contacted } = await request.json();

    if (typeof contacted !== "boolean") {
      return NextResponse.json(
        { success: false, error: "Invalid contacted status." },
        { status: 400 }
      );
    }

    // Update the contact
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { contacted },
      { new: true }
    );

    if (!updatedContact) {
      return NextResponse.json(
        { success: false, error: "Contact not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}



export async function GET(request: NextRequest) {
  try {

     const tokenResponse = getDataFromToken(request);
     if (tokenResponse.error) {
       return NextResponse.json(
         { success: false, error: tokenResponse.error },
         { status: 401 }
       );
     }




    // Extract ID from the URL path
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, error: "Valid Contact ID is required." },
        { status: 400 }
      );
    }

    // Find the contact by ID
    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, error: "Contact not found." },
        { status: 404 }
      );
    }

    // Return the contact details
    return NextResponse.json({ success: true, data: contact }, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
