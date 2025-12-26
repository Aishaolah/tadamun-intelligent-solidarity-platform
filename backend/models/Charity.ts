import mongoose from "mongoose"; /* name surname gmail phone number gender date of birth*/

const CharitySchema = new mongoose.Schema(
    {
        charityname:{
        type: String,
        required: true,
        },

        username: {
        type: String,
        required: true,
        unique: true,
        },

        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },

        registrationNumber:{
        type: String,
        required: true,
        },

        location:{
        type: String,
        },

        password: {
        type: String,
        required: true,
        },

        role: {
        type: String,
        enum: ["charity", "admin"],
        default: "charity",
        },
    },
    { timestamps: true }
    );

export default mongoose.models.Charity || mongoose.model("Charity", CharitySchema);