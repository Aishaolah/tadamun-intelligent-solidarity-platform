"use client";

import { TrophyIcon } from "@heroicons/react/24/outline";

const avatarColors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-yellow-100"
];


export default function TopDonorItem({ donor, rank, onClick }) {
    const getInitials = (name) => {
        const parts = name.split(" ");
        if (parts.length === 1) return parts[0][0].toUpperCase();
        return (parts[0][0] + parts[1][0]).toUpperCase();
    };

    const avatarColor = avatarColors[(rank - 1) % avatarColors.length];

    return (
        <div
            onClick={onClick}
                className="flex items-center justify-between p-3 bg-white rounded-xl shadow mb-3 border border-gray-200
                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
>

        <div className="flex items-center gap-3">
            <TrophyIcon className="w-6 h-6 text-yellow-500" />
            
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${avatarColor}`}>
            {getInitials(donor.name)}
            </div>


            <div>
            <div className="font-semibold text-gray-800">{donor.name}</div>
            <div className="text-sm text-gray-500">{donor.donationsCount} donations</div>
            </div>
        </div>


        <div className="font-bold text-gray-800 text-right">{donor.totalAmount.toLocaleString()}</div>
        </div>
    );
}
