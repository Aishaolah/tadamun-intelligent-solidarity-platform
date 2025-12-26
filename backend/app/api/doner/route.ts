import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("MONGODB_URI not defined");

async function connectDB() {
    if (mongoose.connection.readyState === 0) await mongoose.connect(MONGODB_URI);
    }

    // Donor model
    const DonorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    }, { timestamps: true });

    const Donor = mongoose.models.Donor || mongoose.model("Donor", DonorSchema);

    // CORS headers
    const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    };

    // ✅ Preflight OPTIONS
    export async function OPTIONS() {
    return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
    }

    // GET /api/donor
    export async function GET() {
    await connectDB();
    const donors = await Donor.find().select("-password");
    return new NextResponse(JSON.stringify(donors), { headers: CORS_HEADERS });
    }

    // POST /api/donor
    export async function POST(req: Request) {
    await connectDB();
    const body = await req.json();

    const required = ["name", "surname", "email", "phone", "password"];
    for (const field of required) {
        if (!body[field]) return new NextResponse(JSON.stringify({ message: `${field} required` }), { status: 400, headers: CORS_HEADERS });
    }

    const exists = await Donor.findOne({ email: body.email });
    if (exists) return new NextResponse(JSON.stringify({ message: "Email already registered" }), { status: 409, headers: CORS_HEADERS });

    const hashed = await bcrypt.hash(body.password, 10);
    await Donor.create({ ...body, password: hashed });

    return new NextResponse(JSON.stringify({ message: "Donor account created successfully" }), { status: 201, headers: CORS_HEADERS });
}
