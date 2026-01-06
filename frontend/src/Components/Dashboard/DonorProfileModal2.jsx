"use client";

export default function DonorProfileModal2({ donor, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-2xl p-8 animate-fadeIn">
                
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
                >
                    ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold">
                        {donor.name.split(" ")[0][0]}
                        {donor.name.split(" ")[1]?.[0]}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">{donor.name}</h3>
                        <p className="text-gray-500">Volunteer & Donor</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-sm text-gray-400">Last Donation</p>
                        <p className="font-semibold">{donor.amount} DZD</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Cause</p>
                        <p className="font-semibold">{donor.cause}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Last Active</p>
                        <p className="font-semibold">{donor.timeAgo}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Profession</p>
                        <p className="font-semibold">{donor.job}</p>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-400 mb-1">About</p>
                    <p className="text-gray-700 leading-relaxed">
                        {donor.bio}.
                    </p>
                </div>
            </div>
        </div>
    );
}
