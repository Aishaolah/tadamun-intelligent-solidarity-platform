// models/User.ts
import mongoose from "mongoose"; /* name surname gmail phone number gender date of birth*/

const UserSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        trim: true,
        },

        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
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
