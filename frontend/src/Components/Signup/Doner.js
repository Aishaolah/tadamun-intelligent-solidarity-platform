// pages/signup/donor.tsx
import React from "react";

const DonorSignup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Donor Signup</h2>
            
            <form className="space-y-4">
            {/* Full Name */}
            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Full Name
                </label>
                <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                Phone Number
                </label>
                <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
                Sign Up
            </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
            </p>
        </div>
        </div>
    );
    };

export default DonorSignup;
