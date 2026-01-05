"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", href: "/home" },
    { name: "RAISING MONEY", href: "/raise" },
    { name: "DONATE", href: "/donate" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-auto md:h-17.5 flex justify-between items-center px-4 md:px-8 bg-[#000000] text-[#EFEBE3]/80 shadow-md z-50 border-b border-[#1E3231]/30 py-3 md:py-0">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 md:gap-16">
        <Link href="/">
          <Image
            src="/تضامن.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-12 h-12 md:w-20 md:h-20 transition duration-300 hover:scale-105 mt-0 md:mt-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-8 ml-0 lg:ml-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="font-bold text-sm lg:text-base hover:text-[#A0E5AD]/75 transition duration-300 hover:scale-105"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE - Desktop Buttons */}
      <div className="hidden md:flex gap-3 lg:gap-5">
        <Link href="/raise/choose">
          <button className="text-[#1E3231] bg-[#EFEBE3] font-bold border border-[#1E3231]/50 rounded-sm px-3 lg:px-5 py-2 text-sm hover:bg-[#A0E5AD] hover:border-transparent hover:shadow-lg transition duration-500">
            Sign up
          </button>
        </Link>

        <Link href="/login">
          <button className="text-white bg-[#1E3231] font-bold border border-[#1E3231] rounded-sm px-3 lg:px-5 py-2 text-sm hover:bg-[#245943] hover:shadow-lg transition duration-500">
            Log in
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#EFEBE3]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#000000] border-b border-[#1E3231]/30 md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="font-bold text-sm hover:text-[#A0E5AD]/75 transition duration-300 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <hr className="border-[#1E3231]/30 my-2" />
            <Link href="/raise/choose" onClick={() => setIsOpen(false)}>
              <button className="w-full text-[#1E3231] bg-[#EFEBE3] border border-[#1E3231]/50 rounded-sm px-3 py-2 text-sm hover:bg-[#A0E5AD] hover:border-transparent hover:shadow-lg transition duration-500">
                Sign up
              </button>
            </Link>

            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full text-white bg-[#1E3231] border border-[#1E3231] rounded-sm px-3 py-2 text-sm hover:bg-[#245943] hover:shadow-lg transition duration-500">
                Log in
              </button>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
