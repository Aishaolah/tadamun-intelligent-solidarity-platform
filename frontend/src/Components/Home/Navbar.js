import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "HOME", href: "/home" },
    { name: "RAISING MONEY", href: "/raise" },
    { name: "DONATE", href: "/donate" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] flex justify-between items-center px-8 bg-[#000000] text-[#EFEBE3]/80 shadow-md z-50 border-b border-[#1E3231]/30">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="transition duration-300 hover:scale-105 mt-2"
          />
        </Link>

        <ul className="flex gap-8 ml-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="font-bold hover:text-[#A0E5AD]/75 transition duration-300 hover:scale-105"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-5">
        <Link href="/raise/choose">
          <button className="text-[#1E3231] bg-[#EFEBE3] border border-[#1E3231]/50 rounded-sm px-5 py-2 hover:bg-[#A0E5AD] hover:border-transparent hover:shadow-lg transition duration-500">
            Sign up
          </button>
        </Link>

        <Link href="/login">
          <button className="text-white bg-[#1E3231] border border-[#1E3231] rounded-sm px-5 py-2 hover:bg-[#245943] hover:shadow-lg transition duration-500">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
}
