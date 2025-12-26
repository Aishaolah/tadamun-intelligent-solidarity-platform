import { NextResponse } from "next/server";
import mongoose from "mongoose";

// ===== MongoDB connection =====
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
    }

    async function connectDB() {
    if (mongoose.connection.readyState === 0) {
        try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected");
        } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
        }
    }
    }

    // ===== Charity Model =====
    const CharitySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true },
        registrationNumber: { type: String, required: true },
        location: { lat: Number, lng: Number },
        password: { type: String, required: true },
    },
    { timestamps: true }
    );

    const Charity = mongoose.models.Charity || mongoose.model("Charity", CharitySchema);

    // ===== GET /api/charities =====
    export async function GET() {
    try {
        await connectDB();
        const charities = await Charity.find();
        return NextResponse.json(charities);
    } catch (err) {
        console.error("GET /api/charities error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
    }

    // ===== POST /api/charities =====
    export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        // Basic validation
        const requiredFields = ["name", "username", "email", "registrationNumber", "password"];
        for (const field of requiredFields) {
        if (!body[field]) {
            return NextResponse.json(
            { message: `Field '${field}' is required` },
            { status: 400 }
            );
        }
        }

        // Create charity
        const charity = await Charity.create(body);
        console.log("Created charity:", charity);

        return NextResponse.json(charity, { status: 201 });
    } catch (err) {
        console.error("POST /api/charities error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
