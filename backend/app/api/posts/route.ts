import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Post from "../../../models/Post";

// ===== MongoDB connection =====
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("MONGODB_URI not defined");

async function connectDB() {
  if (mongoose.connection.readyState === 0) await mongoose.connect(MONGODB_URI);
}

// ===== POST /api/posts =====
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const { title, category, fundraiserName, contact, description, targetAmount, images } = body;

    if (!title || !category || !fundraiserName || !contact || !description || !targetAmount || !images || !images.length) {
      return NextResponse.json({ message: "Missing required fields or images" }, { status: 400 });
    }

    const post = await Post.create({
      title,
      category,
      fundraiserName,
      contact,
      description,
      targetAmount,
      receivedAmount: 0,
      accountStatus: "inactive",
      images,
      currency: "DZD",
    });

    return NextResponse.json({ message: "Post created successfully", post }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/posts error:", err);
    return NextResponse.json({ message: err.message || "Server error" }, { status: 500 });
  }
}

// ===== GET /api/posts =====
export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    console.error("GET /api/posts error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
