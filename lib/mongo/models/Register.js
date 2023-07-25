import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
    },
    email: {
      type: String,
    },
    profileImg: {
      type: String,
    },

    followers: [],
    following: [],
  },
  {
    timestamps: true,
  }
);
export const Register = models.Register || model("Register", userSchema);
