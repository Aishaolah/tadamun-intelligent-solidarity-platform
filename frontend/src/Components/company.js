"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Company() {
  const logos = [
    { src: "/red-crescent.jpeg", alt: "Algerian Red Crescent" },
    { src: "/unicef.jpeg", alt: "UNICEF" },
    { src: "/fao.svg", alt: "FAO" },
    { src: "/djezzy.jpeg", alt: "Djezzy" },
    { src: "/ooredoo.jpeg", alt: "Ooredoo" },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#DFDACA] py-12">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl md:text-4xl font-semibold mb-10 text-gray-800"
      >
        Our Trusted Partners In Humanitarian Collaboration
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center"
      >
        {logos.map((logo) => (
          <motion.div key={logo.alt} variants={item} className="text-center">
            <div
              className="group relative h-28 w-28 sm:h-32 sm:w-32
                         rounded-full bg-white/80 ring-1 ring-black/5
                         flex items-center justify-center overflow-hidden
                         shadow-md transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-2xl hover:ring-black/10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="128px"
                className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
