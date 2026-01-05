import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverEme from "@/Components/Emergency/DiscoverEme";
import EmeFond from "@/Components/Test/EmeFond"


export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverEme />
        <EmeFond />
        <Footer />
    </div>
}