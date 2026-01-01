import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverHouse from "@/Components/Housing/DiscoverHouse";
import HousingFond from "@/Components/Housing/HousingFond";



export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverHouse />
        <HousingFond />
        <Footer />
    </div>
}