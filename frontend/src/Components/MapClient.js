'use client';

import dynamic from 'next/dynamic';

// Dynamically import Map (which itself uses Leaflet)
const Map = dynamic(() => import('./Map'), {
    ssr: false,
});

export default function MapClient() {
    return <Map />;
}