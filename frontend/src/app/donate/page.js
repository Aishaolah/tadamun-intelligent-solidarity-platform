
import Donate from "@/Components/Donate/Donate";
import Categories from "@/Components/Donate/Categories";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Featured from "@/Components/Test/Featured";

export default function SignUpPage() {
    return (
        <div className="mx-5 my-0">
            <Navbar />
            <Donate />
            <Categories />
            <Featured />
            <Footer />
        </div>
    );
}