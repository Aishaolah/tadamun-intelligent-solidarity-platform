import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
    return (
        <div className="mt-25 mb-20 px-4">
        <div className="bg-[#1E3231] max-w-[95%] md:max-w-[85%] mx-auto rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="flex-1 px-6 md:px-10 py-10 space-y-6">
            <h1 className="text-[#EFEBE3] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
                welcome to
                <span className="text-[#A0E5AD] block"> tadamun</span>
            </h1>

            <p className="text-[#EFEBE3] text-base md:text-xl max-w-md">
                Your Intelligent Solidarity Platform that connects those in need with compassionate supporters.
            </p>

            <div className="flex flex-wrap gap-4">
                <Link href="/category">
                <button className="bg-[#A0E5AD] text-[#1E3231] px-5 py-2 rounded-lg hover:bg-[#78F392] transition">
                    Want to help
                </button>
                </Link>

                <Link href="/signupneedy">
                <button className="bg-[#EFEBE3] text-[#245943] px-5 py-2 rounded-lg hover:bg-[#D9D9D9] transition">
                    Needs help
                </button>
                </Link>

                <Link href="/demo">
                <button className="bg-[#A0E5AD] text-[#1E3231] px-5 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#78F392] transition">
                    🤖 AI VERIFICATION
                </button>
                </Link>
            </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden md:block flex-1 h-full w-full">
            <Image
                src="/photos1.svg"     // <-- ONE image
                alt="Hero image"
                height={1000}
                width={1000}
                priority
                className="object-cover rounded-r-2xl"
            />
            </div>

        </div>
        </div>
    );
}

export default Home;
