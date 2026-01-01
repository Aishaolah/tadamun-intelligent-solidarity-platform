import Link from "next/link";
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t bg-black text-sm text-white mt-20">
        {/* Top section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Donate */}
            <div>
            <h4 className="font-semibold mb-4 text-[#A0E5AD]">Donate</h4>
            <ul className="space-y-3">
                <li><Link href="#">Categories</Link></li>
                <li><Link href="#">Crisis relief</Link></li>
                <li><Link href="#">Social Impact Funds</Link></li>
                <li><Link href="#">Supporter Space</Link></li>
            </ul>
            </div>

            {/* Fundraise */}
            <div>
            <h4 className="font-semibold mb-4 text-[#A0E5AD]">Fundraise</h4>
            <ul className="space-y-3">
                <li><Link href="#">How to start on Tadamun</Link></li>
                <li><Link href="#">Fundraising categories</Link></li>
                <li><Link href="#">Team fundraising</Link></li>
                <li><Link href="#">Fundraising Blog</Link></li>
                <li><Link href="#">Charity fundraising</Link></li>
                <li><Link href="#">Sign up as a nonprofit</Link></li>
            </ul>
            </div>

            {/* About */}
            <div>
            <h4 className="font-semibold mb-4 text-[#A0E5AD]">About</h4>
            <ul className="space-y-3">
                <li><Link href="#">How Tadamun works</Link></li>
                <li><Link href="#">Tadamun Giving Guarantee</Link></li>
                <li><Link href="#">Supported countries</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">About Tadamun</Link></li>
            </ul>
            </div>

            {/* Company */}
            <div>
            <h4 className="font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-3">
                <li><Link href="#">Newsroom</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Tadamun.org</Link></li>
                <li><Link href="#">Tadamun Partnerships</Link></li>
                <li><Link href="#">Tadamun Pro for nonprofits</Link></li>
            </ul>
            </div>
        </div>

        {/* Bottom section */}
        <div className="border-t">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            

            {/* Social icons */}
            <div className="flex items-center gap-5 text-lg">
                <FaFacebookF />
                <FaYoutube />
                <FaXTwitter />
                <FaInstagram />
            </div>
            </div>

            {/* Legal */}
            <div className="max-w-7xl mx-auto px-6 pb-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <p>© 2025-2026 Tadamun</p>
            <div className="flex flex-wrap gap-4">
                <Link href="#">Terms</Link>
                <Link href="#">Privacy Notice</Link>
                <Link href="#">Legal</Link>
                <Link href="#">Accessibility Statement</Link>
                <Link href="#">Cookie Policy</Link>
                <Link href="#">Manage Cookie Preferences</Link>
                <Link href="#">Your Privacy Choices</Link>
            </div>
            </div>
        </div>
        </footer>
    );
}
