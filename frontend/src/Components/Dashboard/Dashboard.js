"use client";

import React from 'react';
import Image from 'next/image';
import DashboardStats from "./DashboardStats";
import EmergencyCases from "./EmergencyCases";
import DashboardDonations from "./DashboardDonations"; 
import RecentDonations from "./RecentDonations";


export default function Dashboard() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        
        <p>
            Track donations, manage emergency cases, and monitor your impact across Algeria.
        </p>
        <DashboardStats />
        <EmergencyCases />
        <DashboardDonations />
        <RecentDonations />
        </div>
    );
}
