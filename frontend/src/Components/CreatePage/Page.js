"use client";

import { useState } from "react";

export default function CreatePost() {
  const [loading, setLoading] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  // Cloudinary config
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dipr5vdtl/upload";
  const UPLOAD_PRESET = "tadamun_folder"; // Must match your unsigned upload preset

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    setImageFiles(files);
  };

  // Upload multiple images to Cloudinary
  const uploadImages = async () => {
    if (imageFiles.length === 0) return [];

    const uploadedUrls = await Promise.all(
      imageFiles.map(async (file) => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", UPLOAD_PRESET); // must exist in Cloudinary
          formData.append("folder", "fundraisers");

          const res = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
          });

          const data = await res.json();

          if (data.error) {
            console.error("Cloudinary error:", data.error.message);
            return null;
          }

          if (!data.secure_url) {
            console.error("No secure_url returned:", data);
            return null;
          }

          return data.secure_url;
        } catch (err) {
          console.error("Upload failed:", err);
          return null;
        }
      })
    );

    const filtered = uploadedUrls.filter(Boolean);
    if (filtered.length !== imageFiles.length) {
      console.warn("Some images failed to upload");
    }

    return filtered;
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate target amount
    const targetAmount = Number(formData.get("targetAmount"));
    if (!targetAmount || targetAmount <= 0) {
      alert("Please enter a valid target amount in DZD");
      setLoading(false);
      return;
    }

    try {
      // 1️⃣ Upload images
      const imageUrls = await uploadImages();

      if (imageFiles.length > 0 && imageUrls.length === 0) {
        alert("Image upload failed. Check console for Cloudinary errors.");
        setLoading(false);
        return;
      }

      // 2️⃣ Prepare post payload
      const postBody = {
        title: formData.get("title"),
        category: formData.get("category"),
        fundraiserName: formData.get("fundraiserName"),
        contact: {
          phone: formData.get("phone"),
          email: formData.get("email"),
          address: formData.get("address"),
        },
        description: formData.get("description"),
        targetAmount,
        images: imageUrls,
      };

      // 3️⃣ Send to backend
      const res = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postBody),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create post");
        setLoading(false);
        return;
      }

      alert("Post created successfully!");
      form.reset();
      setPreviews([]);
      setImageFiles([]);
    } catch (err) {
      console.error("Frontend error:", err);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Create Fundraiser Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" required className="input" />

        <select name="category" required className="input">
          <option value="">Select Category</option>
          <option value="medical">Medical</option>
          <option value="education">Education</option>
          <option value="family">Family</option>
          <option value="emergency">Emergency</option>
          <option value="basic_needs">Basic Needs</option>
          <option value="housing">Housing</option>
        </select>

        <input
          name="fundraiserName"
          placeholder="Fundraiser Name"
          required
          className="input"
        />
        <input name="phone" placeholder="Phone" required className="input" />
        <input name="email" placeholder="Email" required className="input" />
        <input name="address" placeholder="Address" required className="input" />

        <textarea
          name="description"
          placeholder="Case Description"
          required
          className="input h-32"
        />

        <input
          type="number"
          name="targetAmount"
          placeholder="Target Amount (DZD)"
          min="1"
          required
          className="input"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />

        {previews.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {previews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Preview ${idx + 1}`}
                className="w-24 h-24 object-cover rounded border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
