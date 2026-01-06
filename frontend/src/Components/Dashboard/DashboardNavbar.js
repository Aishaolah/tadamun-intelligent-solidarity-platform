import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/outline";

export default function DashboardNavbar() {
    return (
        <nav className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
        

        <div className="flex items-center gap-2">
            <Image className='mt-8 ml-5 transition duration-300 hover:scale-105' src='/تضامن.svg' alt='logo' width={100} height={100} />
        </div>

        <div className="flex-1 mx-6">
            <input
            type="text"
            placeholder="Search cases, donors..."
            className="w-full max-w-md mx-auto block px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="flex items-center gap-4">
            <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
            <Image
            src="/tadamun11.png"
            alt="User"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
            />
        </div>

        </nav>
    );
}
