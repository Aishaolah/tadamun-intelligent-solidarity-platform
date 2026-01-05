"use client";

import { useState } from "react";

export default function NeedySignup() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
        const res = await fetch("http://localhost:3001/api/needy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message || "Signup failed");
            return;
        }

        setSuccess("Account created successfully 🎉");
        setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
            password: "",
        });
        } catch (err) {
        setError("Something went wrong");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
            Beneficiary Signup
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex gap-4">
                <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                    Name
                </label>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
                />
                </div>

                <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="surname">
                    Surname
                </label>
                <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                Phone Number
            </label>
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Address
                </label>
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
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
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg"
            />
            </div>

            {error && (
                <p className="text-red-500 text-sm text-center">
                {error}
                </p>
            )}

            {success && (
                <p className="text-green-600 text-sm text-center">
                {success}
                </p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#468B6E] hover:bg-[#245943] text-white font-semibold rounded-lg"
            >
                {loading ? "Signing up..." : "Sign Up"}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#245943] hover:underline">
                Login
            </a>
            </p>
            </form>
        </div>
        </div>
    );
}
