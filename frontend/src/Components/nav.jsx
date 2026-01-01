"use client";
import React, { useState } from "react";
// ...existing code...
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="text-lg font-semibold">Tadamun</a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm hover:underline">Home</a>
          <a href="/programs" className="text-sm hover:underline">Programs</a>
          <a href="/donate" className="text-sm hover:underline">Donate</a>
          <a href="/get-involved" className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">Get Involved</a>
        </div>

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col px-4 py-3 space-y-2">
            <li><a href="/" className="block">Home</a></li>
            <li><a href="/programs" className="block">Programs</a></li>
            <li><a href="/donate" className="block">Donate</a></li>
            <li><a href="/get-involved" className="block">Get Involved</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
// ...existing code...