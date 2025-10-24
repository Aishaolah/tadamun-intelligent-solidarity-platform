
import MapClient from '@/Components/MapClient';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Company from '@/Components/company';
import Diagram from '@/Components/Diagram';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />   {/* animated partners */}
      <h1>My Leaflet Map</h1>
      <MapClient />
      <Diagram />   {/* now clean, no logos */}
    </div>
  );
}

