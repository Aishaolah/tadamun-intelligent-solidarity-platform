// models/User.ts
import mongoose from "mongoose"; /* name surname gmail phone number gender date of birth*/

const UserSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        trim: true,
        },

        surname: {
        type: String,
        required: true,
        },

        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },

        phoneNumber: {
        type: String,
        required: true,
        },

        gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
        },

        password: {
        type: String,
        required: true,
        },

        role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
        },
    },
    { timestamps: true }
    );

export default mongoose.models.User || mongoose.model("User", UserSchema);
