import React from "react";
import Image from "next/image";

function Story() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20 py-12 gap-10 md:gap-16">
      
      {/* Text Section */}
      <div className="max-w-lg md:max-w-xl flex flex-col items-start">
        <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#245943]">
          FOUNDER&apos;S STORY
        </h2>

        <p className="mt-6 md:mt-8 text-[#1E3231BF] text-lg md:text-xl font-medium leading-relaxed">
          This platform was born from a simple belief: no one should face hardship alone.
          After witnessing how small acts of kindness could transform lives, the founder
          created this space to make helping others easier, more transparent, and more human.
        </p>

        <div className="mt-8 md:mt-12">
          <button className="bg-[#245943] hover:bg-[#1f4f3f] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-[439px] h-64 md:h-auto rounded-xl shadow-xl overflow-hidden">
        <Image
          src="/image-tadamun2.jpg"
          alt="Founder story"
          height={100}
          width={615}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Story;
