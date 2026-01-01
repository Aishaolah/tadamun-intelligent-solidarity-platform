import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverEme from "@/Components/Emergency/DiscoverEme";
import EmergencyFond from "@/Components/Emergency/EmergencyFond"


export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverEme />
        <EmergencyFond />
        <Footer />
    </div>
}