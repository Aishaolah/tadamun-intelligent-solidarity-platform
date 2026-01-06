"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const links = [
    { name: "HOME", href: "/home" },
    { name: "RAISING MONEY", href: "/raise" },
    { name: "DONATE", href: "/donate" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  // Check user login state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 bg-black text-[#EFEBE3]/80 shadow-md z-50 border-b border-[#1E3231]/30 py-3 md:py-0">
      {/* LEFT */}
      <div className="flex items-center gap-4 md:gap-16">
        <Link href="/">
          <Image
            src="/تضامن.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-12 h-12 md:w-20 md:h-20 hover:scale-105 transition"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 lg:gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`font-bold text-sm lg:text-base transition duration-300 hover:scale-105
                  ${isActive(link.href) ? "text-[#A0E5AD]" : "text-[#EFEBE3]/80 hover:text-[#A0E5AD]/75"}
                `}
              >
                {link.name}
              </Link>
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#A0E5AD] rounded" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="hidden md:flex gap-3 lg:gap-5 items-center relative">
        {!user ? (
          <>
            <Link href="/raise/choose">
              <button className="text-[#1E3231] bg-[#EFEBE3] font-bold border rounded-sm px-4 py-2 text-sm hover:bg-[#A0E5AD] transition">
                Sign up
              </button>
            </Link>
            <Link href="/login">
              <button className="text-white bg-[#1E3231] font-bold border rounded-sm px-4 py-2 text-sm hover:bg-[#245943] transition">
                Log in
              </button>
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A0E5AD] text-black hover:bg-[#245943] transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black py-2 z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#EFEBE3]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black md:hidden border-b border-[#1E3231]/30">
          <ul className="flex flex-col gap-2 p-4">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-bold text-sm transition
                    ${isActive(link.href) ? "text-[#A0E5AD]" : "text-[#EFEBE3]/80 hover:text-[#A0E5AD]/75"}
                  `}
                >
                  {link.name}
                </Link>
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#A0E5AD] rounded" />
                )}
              </li>
            ))}
            {!user ? (
              <>
                <Link href="/raise/choose" onClick={() => setIsOpen(false)}>
                  <button className="w-full text-[#1E3231] bg-[#EFEBE3] border rounded-sm px-3 py-2 text-sm hover:bg-[#A0E5AD] transition">
                    Sign up
                  </button>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full text-white bg-[#1E3231] border rounded-sm px-3 py-2 text-sm hover:bg-[#245943] transition">
                    Log in
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A0E5AD] text-black hover:bg-[#245943] transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <User size={20} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-black py-2 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
