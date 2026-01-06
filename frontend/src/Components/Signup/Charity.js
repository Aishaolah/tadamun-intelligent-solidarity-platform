"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

      let data = {};
      const text = await res.text();
      if (text) data = JSON.parse(text);

      if (!res.ok) throw new Error(data?.message || "Server error");

      // ✅ Store user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user || form));

      // ✅ Redirect to home
      router.push("/home");
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
          <input
            name="name"
            placeholder="Charity Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            name="registrationNumber"
            placeholder="Registration Number"
            value={form.registrationNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#468B6E] hover:bg-[#245943] text-white font-semibold rounded-lg"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
