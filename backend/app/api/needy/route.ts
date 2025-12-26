import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

    // ===== Needy Model =====
    const NeedySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
    );

    const Needy =
    mongoose.models.Needy || mongoose.model("Needy", NeedySchema);

    // ===== GET /api/signup/needy =====
    export async function GET() {
    try {
        await connectDB();
        const needyUsers = await Needy.find().select("-password");
        return NextResponse.json(needyUsers);
    } catch (err) {
        console.error("GET /api/signup/needy error:", err);
        return NextResponse.json(
        { message: "Server error" },
        { status: 500 }
        );
    }
    }

    // ===== POST /api/signup/needy =====
    export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const requiredFields = [
        "name",
        "surname",
        "email",
        "phone",
        "address",
        "password",
        ];

        for (const field of requiredFields) {
        if (!body[field]) {
            return NextResponse.json(
            { message: `Field '${field}' is required` },
            { status: 400 }
            );
        }
        }

        // Check if email already exists
        const existingUser = await Needy.findOne({ email: body.email });
        if (existingUser) {
        return NextResponse.json(
            { message: "Email already already registered" },
            { status: 409 }
        );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(body.password, 10);

        const needy = await Needy.create({
        ...body,
        password: hashedPassword,
        });

        console.log("Created needy user:", needy);

        return NextResponse.json(
        { message: "Needy account created successfully" },
        { status: 201 }
        );
    } catch (err) {
        console.error("POST /api/signup/needy error:", err);
        return NextResponse.json(
        { message: "Server error" },
        { status: 500 }
        );
    }
}
