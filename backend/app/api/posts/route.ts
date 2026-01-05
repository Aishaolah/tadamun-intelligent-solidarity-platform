import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Post from "../../../models/Post";

// ===== MongoDB connection =====
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not defined");
}

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

// ===== CORS Headers =====
const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// ===== OPTIONS =====
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

// ===== GET /api/posts =====
// Example:
// /api/posts?category=education&accountStatus=active&limit=6
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const accountStatus = searchParams.get("accountStatus");
    const limit = searchParams.get("limit");
    const featured = searchParams.get("featured");

    // ===== Build filter =====
    const filter: any = {};

    if (category) {
      filter.category = category;
    }

    if (accountStatus) {
      filter.accountStatus = accountStatus;
    }

    // ===== Build query =====
    let query = Post.find(filter).sort({ createdAt: -1 });

    if (featured === "true") {
      query = Post.find(filter).sort({ receivedAmount: -1 });
    }

    if (limit) {
      query = query.limit(Number(limit));
    }

    const posts = await query;

    return NextResponse.json(posts, { headers: corsHeaders });
  } catch (err: any) {
    console.error("GET /api/posts error:", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ===== POST /api/posts =====
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      title,
      category,
      fundraiserName,
      contact,
      description,
      targetAmount,
      images,
    } = body;

    // ===== Validation =====
    if (
      !title ||
      !category ||
      !fundraiserName ||
      !contact ||
      !description ||
      !targetAmount
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!contact.phone || !contact.email || !contact.address) {
      return NextResponse.json(
        { message: "Contact info incomplete" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!images || images.length === 0) {
      return NextResponse.json(
        { message: "At least one image is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const validCategories = [
      "medical",
      "education",
      "family",
      "emergency",
      "basic_needs",
      "housing",
    ];

    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { message: "Invalid category" },
        { status: 400, headers: corsHeaders }
      );
    }

    // ===== Create post =====
    const post = await Post.create({
      title,
      category,
      fundraiserName,
      contact,
      description,
      targetAmount,
      receivedAmount: 0,
      accountStatus: "inactive", // requires admin approval
      images,
      currency: "DZD",
    });

    return NextResponse.json(
      { message: "Post created successfully", post },
      { status: 201, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("POST /api/posts error:", err);
    return NextResponse.json(
      { message: err.message || "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ===== PATCH /api/posts =====
// Update status or receivedAmount
export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    const { id, accountStatus, receivedAmount } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const updateData: any = {};

    if (accountStatus) {
      if (!["active", "inactive"].includes(accountStatus)) {
        return NextResponse.json(
          { message: "Invalid accountStatus" },
          { status: 400, headers: corsHeaders }
        );
      }
      updateData.accountStatus = accountStatus;
    }

    if (receivedAmount !== undefined) {
      if (typeof receivedAmount !== "number" || receivedAmount < 0) {
        return NextResponse.json(
          { message: "Invalid receivedAmount" },
          { status: 400, headers: corsHeaders }
        );
      }
      updateData.receivedAmount = receivedAmount;
    }

    const post = await Post.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { message: "Post updated successfully", post },
      { headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("PATCH /api/posts error:", err);
    return NextResponse.json(
      { message: err.message || "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ===== DELETE /api/posts =====
export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { headers: corsHeaders }
    );
  } catch (err: any) {
    console.error("DELETE /api/posts error:", err);
    return NextResponse.json(
      { message: err.message || "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
