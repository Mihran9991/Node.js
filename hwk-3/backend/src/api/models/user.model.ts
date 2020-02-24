import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  role: number;
  firstName: string;
  lastName: string;
  userName: string;
  birthday: string;
  email: string;
  password: string;
  bio: string;
  interests: Array<string>;
}

const UserSchema: Schema = new Schema({
  role: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, required: false },
  interests: { type: [String], required: false }
});

export default mongoose.model<IUser>("User", UserSchema);
