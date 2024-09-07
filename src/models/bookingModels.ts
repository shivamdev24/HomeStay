import mongoose, { Schema, Document } from "mongoose";

// Interface for Booking
interface IBooking extends Document {
  name: string;
  phone: string;
  email: string;
  address: string;
  room: string;
  adults: number;
  children: number;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfNights: number;
}

// Booking schema definition
const BookingSchema: Schema<IBooking> = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },

    address: { type: String, required: true },
    room: { type: String, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    numberOfNights: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
