import mongoose, { Schema, Document } from "mongoose";

interface IContact extends Document {
  username: string;
  email: string;
  password: string;
  // isVerified: boolean;
  // isAdmin?: boolean; // Optional field for tracking contact status
}

const AdminSchema: Schema<IContact> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide an UserName"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide an password"],
  },
  // isVerified: {
  //   type: Boolean,
  //   default: false,
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  // forgotPasswordToken: String,
  // forgotPasswordTokenExpiry: Date,
  // verifyToken: String,
  // verifyTokenExpiry: Date,
});

const Admin =
  mongoose.models.Admin || mongoose.model<IContact>("Admin", AdminSchema);

export default Admin;
