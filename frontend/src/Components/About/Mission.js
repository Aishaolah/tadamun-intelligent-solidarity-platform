import React from "react";
import Image from "next/image";

function Mission() {
return (
    <div className="min-h-screen text-[#1E3231] mt-16 md:mt-32 pl-4 md:pl-20 pr-4 md:pr-20">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="max-w-md">
        <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-[122%]">
        <span className="text-[#B07E56]">MISSION</span>
        <span className="text-[#000000]"> &amp; VALUE</span></h2>
        <p className="mt-6 md:mt-10 leading-relaxed text-[#1E3231BF] text-base md:text-xl font-bold">lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk </p>
        </div>
        <Image src="/image-tadamun1.jpg" alt="Mission" width={615} height={413} className="rounded-lg object-cover w-full md:w-auto h-64 md:h-auto" />
      </div>
    </div>
);
}

export default Mission;
