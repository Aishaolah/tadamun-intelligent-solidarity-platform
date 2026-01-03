import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    category: {
        type: String,
        enum: [
            "medical",
            "education",
            "family",
            "emergency",
            "basic_needs",
            "housing",
        ],
        required: true,
        },

        fundraiserName: { type: String, required: true },

        contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        },

        description: { type: String, required: true },

        images: [{ type: String }],
        videos: [{ type: String }],

        // ===== STATUS =====
        accountStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
        },

        // ===== MONEY (DZD) =====
        targetAmount: {
        type: Number, // stored in DZD
        required: true,
        min: 0,
        },

        receivedAmount: {
        type: Number, // stored in DZD
        default: 0,
        min: 0,
        },

        currency: {
        type: String,
        default: "DZD",
        immutable: true, // cannot be changed later
        },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
