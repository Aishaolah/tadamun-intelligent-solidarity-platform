"use client";
import React from "react";
import Link from "next/link";
import { IoSchoolSharp } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

const categories = [
  { name: "Education", icon: IoSchoolSharp, slug: "education" },
  { name: "Medical", icon: FaStethoscope, slug: "medical" },
  { name: "Emergency", icon: MdEmergency, slug: "emergency" },
  { name: "Community", icon: FaHandsHelping, slug: "community" },
  { name: "Orphans", icon: MdFamilyRestroom, slug: "orphans" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-[#A0E5AD]/75">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#1E3231]">
        Browse by Category
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.slug}
              href={`/posts?category=${cat.slug}`}
              className="bg-white/50 rounded-xl p-6 flex flex-col items-center justify-center
                         shadow-sm hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
            >
              <Icon className="text-4xl text-primary mb-3" />
              <span className="font-semibold">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
