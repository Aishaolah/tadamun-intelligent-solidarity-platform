"use client"; // needed for Next.js App Router client component
import React, { useState } from "react";

const DonorSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    // Handle input changes dynamically
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Submit form to API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("Submitting...");

        try {
        const res = await fetch("http://localhost:3001/api/doner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        setMessage("Signup successful! You can now login.");
        setFormData({ name: "", surname: "", email: "", phone: "", password: "" });
        } catch (err) {
        setMessage(err.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Donor Signup</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name & Surname */}
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                </div>

                <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="surname">
                    Surname
                </label>
                <input
                    type="text"
                    id="surname"
                    placeholder="Enter your surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Phone */}
            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                Phone Number
                </label>
                <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-2 mt-4 bg-[#468B6E] hover:bg-[#245943] text-white font-semibold rounded-lg transition"
            >
                Sign Up
            </button>
            </form>

            {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}

            <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#245943] hover:underline">
                Login
            </a>
            </p>
        </div>
        </div>
    );
};

export default DonorSignup;
