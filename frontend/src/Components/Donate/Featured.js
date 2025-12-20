import React from "react";

export default function Featured(){
    return(
    <div className="mt-20 ml-20 m-auto mb-20">
        <h1 className="text-2xl font-bold">Featured Fundraisers</h1>
        <div className="flex flex-1 gap-8 mt-10">

            {/* Card 1 - Blood donation (uses red-crescent image) */}
            <div className="w-[300px] rounded-2xl bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-xl">
                <img
                src="/red-crescent.jpeg"
                alt="Blood donation - Tiaret"
                className="h-44 w-full object-cover"/>
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                Rue Emir Abdelkader, Tiaret
                </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-gray-900">
                Blood donation drive for sick patients
            </h3>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[50%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
                45,000 DZD raised
            </p>
            </div>

            {/* Card 2 - Hunger / family aid (uses children.jpg) */}
            <div className="w-[300px] rounded-2xl bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-xl">
                <img
                src="/children.jpg"
                alt="Food donation for family - Oran"
                className="h-44 w-full object-cover"/>
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                Boulevard Zighout Youcef, Oran
                </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-gray-900">
                Food support for a family in need
            </h3>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[65%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
                60,000 DZD raised
            </p>
            </div>

            {/* Card 3 - Medical support (uses patient.jpg) */}
            <div className="w-[300px] rounded-2xl bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-xl">
                <img
                src="/patient.jpg"
                alt="Medical support - Constantine"
                className="h-44 w-full object-cover"/>
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                Rue Hassiba Benbouali, Constantine
                </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-gray-900">
                Medical assistance for Zahra
            </h3>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[35%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
                120,000 DZD raised
            </p>
            </div>

            {/* Card 4 - Community / general support (uses image-tadamun1.jpg) */}
            <div className="w-[300px] rounded-2xl bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-xl">
                <img
                src="/image-tadamun1.jpg"
                alt="Community support - Annaba"
                className="h-44 w-full object-cover"/>
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                Avenue de l'ALN, Annaba
                </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-gray-900">
                Community support fund — local projects
            </h3>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[20%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
                30,000 DZD raised
            </p>
            </div>

        </div>
        <button className="mt-10 text-[#1E3231] bg-transparent border rounded-sm px-5 py-2 hover:bg-gray-200 hover:border-transparent transition duration-500">See More </button>
        <hr className="mt-15"></hr>
    </div>
    )
}
