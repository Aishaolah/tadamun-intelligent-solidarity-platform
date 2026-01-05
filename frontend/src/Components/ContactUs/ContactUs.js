// ContactUs.js
"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mt-17 min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:flex-1 bg-[#468B6E] text-white flex flex-col justify-center items-center p-10 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6">We Are Here For You</h1>
        <p className="text-lg md:max-w-sm">
          Our website is by your side. If you need help, have questions, or just
          want to reach out, don’t hesitate to contact us. We’re always ready to
          listen and assist you.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:flex-1 bg-gray-100 flex justify-center items-center p-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
          <p className="text-gray-600 text-center mb-6">
            Send us a message and we’ll get back to you shortly.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-center">
              Your message has been sent!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Message"
              required
              rows="4"
              className="px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-[#468B6E] hover:bg-green-700 text-white font-bold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
