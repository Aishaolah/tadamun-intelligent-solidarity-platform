"use client";
import { useState } from "react";

export default function CharitySignup() {
    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        registrationNumber: "",
        location: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        const res = await fetch("http://localhost:3001/api/charities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        // Safely parse JSON only if response has content
        let data = {};
        const text = await res.text();
        if (text) {
            try {
            data = JSON.parse(text);
            } catch (parseErr) {
            console.error("Failed to parse JSON:", parseErr);
            }
        }

        if (!res.ok) {
            throw new Error(data?.message || "Server error");
        }

        alert("Charity account created successfully");

        setForm({
            charityName: "",
            username: "",
            email: "",
            registrationNumber: "",
            location: "",
            password: "",
        });
        } catch (err) {
        alert(err.message || "Something went wrong");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Charity Signup</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                    Name
                </label>
            <input
                name="name"
                placeholder="Charity Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
                </div>

            <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="surname">
                    Username
                </label>
            <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            </div>
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
                </label>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                Phone Number
                </label>
            <input
                name="registrationNumber"
                placeholder="Registration Number"
                value={form.registrationNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Location
                </label>
            <input
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
                </label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
            />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#468B6E] hover:bg-[#245943] text-white font-semibold rounded-lg"
            >
                {loading ? "Creating..." : "Sign Up"}
            </button>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#245943] hover:underline">
                Login
            </a>
            </p>
        </div>
        </div>
    );
}
