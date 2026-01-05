import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverFam from "@/Components/Family/DiscoverFam";
import FamFond from "@/Components/Test/FamFond";

export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverFam />
        <FamFond />
        <Footer />
    </div>
}