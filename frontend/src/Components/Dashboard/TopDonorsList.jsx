"use client";

import { useState } from "react";
import TopDonorItem from "./TopDonorItem";
import DonorProfileModal from "./DonorProfileModal";
import { topDonors } from "../../data/donorsData";

export default function TopDonorsList() {
    const [selectedDonor, setSelectedDonor] = useState(null);

    return (
        <div className="p-4 bg-gray-50 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Top Donors</h2>

        {topDonors.map((donor, idx) => (
            <TopDonorItem
            key={donor.id}
            donor={donor}
            rank={idx + 1}
            onClick={() => setSelectedDonor(donor)}
            />
        ))}

        <DonorProfileModal
            donor={selectedDonor}
            onClose={() => setSelectedDonor(null)}
        />
        </div>
    );
}
