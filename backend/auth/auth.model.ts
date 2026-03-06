import mongoose from "mongoose";
import Auth from '../types/auth.types'

const authSchema : Auth = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    minLength: [8, "Should be greater than 8"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email"],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    match: [
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      "Password must be 8+ chars with letters, numbers & special character",
    ],
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: function (value: string) {
        return value === this.password;
      },
      message: "Password do not match",
    },
  },
});

const auth = mongoose.model("Auth", authSchema);
export default auth; 
