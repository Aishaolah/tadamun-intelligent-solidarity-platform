import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverFam from "@/Components/Family/DiscoverFam";
import FamilyFond from "@/Components/Family/FamilyFond";

export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverFam />
        <FamilyFond />
        <Footer />
    </div>
}