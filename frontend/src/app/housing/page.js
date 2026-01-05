import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverHouse from "@/Components/Housing/DiscoverHouse";
import HouseFond from "@/Components/Test/HouseFond";



export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverHouse />
        <HouseFond />
        <Footer />
    </div>
}