"use client";

export default function RecentDonationItem({ donation, index, onClick }) {
    
    const getInitials = (name) => {
        const parts = name.split(" ");
        if (parts.length === 1) return parts[0][0].toUpperCase();
        return (parts[0][0] + parts[1][0]).toUpperCase();
    };

    const avatarColors = [
        "bg-blue-200",
        "bg-green-200",
        "bg-indigo-200",
        "bg-purple-200",
        "bg-pink-200",
        "bg-teal-200",
        "bg-yellow-100"
    ];

    const avatarColor = avatarColors[index % avatarColors.length];

    return (
        <div
            onClick={onClick}
            className={`flex items-start p-3 bg-white rounded-xl shadow mb-3 border border-gray-200
            transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
>

        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-gray-800 font-bold text-lg mr-3 ${avatarColor}`}>
            {getInitials(donation.name)}
        </div>

        <div className="flex-1">
            <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">{donation.name}</span>
            <span className="font-bold text-gray-900">{donation.amount}</span>
            </div>
            <div className="text-sm text-gray-500">{`donated to ${donation.cause}`}</div>
            <div className="text-xs text-gray-400">{donation.timeAgo}</div>
        </div>
        </div>
    );
}
