"use client";

import { useState } from "react";
import recentDonations from "../../data/recentDonations";
import RecentDonationItem from "./RecentDonationItem";
import DonorProfileModal2 from "./DonorProfileModal2";

export default function RecentDonations() {
    const [selectedDonor, setSelectedDonor] = useState(null);

    return (
        <div className="p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Recent Donations</h2>

            <div>
                {recentDonations.map((d, idx) => (
                    <RecentDonationItem
                        key={d.id}
                        donation={d}
                        index={idx}
                        onClick={() => setSelectedDonor(d)}
                    />
                ))}
            </div>

            {selectedDonor && (
                <DonorProfileModal2
                    donor={selectedDonor}
                    onClose={() => setSelectedDonor(null)}
                />
            )}
        </div>
    );
}
