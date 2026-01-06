"use client";

export default function DonorProfileModal({ donor, onClose }) {
    if (!donor) return null;

    const getInitials = (name) => {
        const parts = name.split(" ");
        return parts.length > 1
        ? (parts[0][0] + parts[1][0]).toUpperCase()
        : parts[0][0].toUpperCase();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        
        <div
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="relative bg-white w-[90%] max-w-3xl rounded-3xl shadow-2xl p-8 animate-scaleIn">
            
            <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-xl"
            >
            ✕
            </button>

            <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">
                {getInitials(donor.name)}
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                {donor.name}
                </h2>
                <p className="text-gray-500">{donor.job}</p>
                <p className="text-sm text-gray-400 mt-1">
                Last active: {donor.lastActive}
                </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
                <p className="text-sm text-gray-500">Total Donations</p>
                <p className="text-2xl font-bold text-green-600">
                {donor.totalAmount.toLocaleString()} DZD
                </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
                <p className="text-sm text-gray-500">Donations Count</p>
                <p className="text-2xl font-bold text-gray-800">
                {donor.donationsCount}
                </p>
            </div>
            </div>

            <div>
            <h3 className="font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed">
                {donor.bio}
            </p>
            </div>

        </div>
        </div>
    );
}
