import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
//import User from "../../../models/User";
//import Charity from "../../../models/Charity";
import Needy from "@/models/Needy";
import { connectDB } from "../../../lib/db";

// ===== POST /api/login =====
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await Needy.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: "Login successful", userId: user._id },
      { status: 200 }
    );
  } catch (err) {
    console.error("POST /api/login error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// ===== Optional GET for testing / listing users without passwords =====
export async function GET() {
  try {
    await connectDB();
    const users = await Needy.find().select("-password");
    return NextResponse.json(users);
  } catch (err) {
    console.error("GET /api/login error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
