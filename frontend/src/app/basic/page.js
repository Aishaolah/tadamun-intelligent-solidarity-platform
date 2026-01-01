import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"
import DiscoverBasic from "@/Components/Basic/DiscoverBasic";
import BasicFond from "@/Components/Basic/BasicFond";


export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverBasic />
        <BasicFond />
        <Footer />
    </div>
}