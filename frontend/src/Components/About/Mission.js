import React from "react";
import Image from "next/image";

function Mission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-[#1E3231] mt-16 md:mt-18 px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text Section */}
        <div className="max-w-lg md:max-w-xl">
          <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-[#B07E56]">MISSION</span>{" "}
            <span className="text-[#1E3231]">&amp; VALUE</span>
          </h2>

          <p className="mt-6 md:mt-10 text-[#1E3231BF] text-lg md:text-xl font-medium leading-relaxed">
            Our mission is to bring people together through compassion and solidarity.
            We aim to connect those who want to help with individuals and families in need,
            creating a transparent, trusted, and impactful way to support one another.
          </p>

          <div className="mt-8 md:mt-12">
            <button className="bg-[#B07E56] hover:bg-[#a36e4e] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[615px] h-64 md:h-auto rounded-xl shadow-xl overflow-hidden">
          <Image
            src="/image-tadamun1.jpg"
            alt="Mission"
            height={100}
            width={615}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
