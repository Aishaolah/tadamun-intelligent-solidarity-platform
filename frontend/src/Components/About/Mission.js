import React from "react";
import Image from "next/image";

function Mission() {
return (
    <div className="min-h-screen text-[#1E3231] mt-32 pl-20 pr-20">
    <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
        <h2 className="font-bold text-7xl leading-[122%]">
        <span className="text-[#B07E56]">MISSION</span>
        <span className="text-[#000000]"> &amp; VALUE</span></h2>
        <p className="mt-10 leading-relaxed text-[#1E3231BF] text-xl font-bold">lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk </p>
        </div>
        <Image src="/image-tadamun1.jpg" alt="Mission" width={615} height={413} className="rounded-lg object-cover" />
      </div>
    </div>
);
}

export default Mission;
