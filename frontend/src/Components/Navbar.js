import React from 'react'
import Image from 'next/image'

/*import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
})*/


function Navbar() {
    return (
        <div>
            <div className='flex justify-between items-center mt-0 h-18 max-w mx-auth px-4 text-white border-b-2 border-[#1E3231]/50'>
                <Image className='mt-8 ml-5 transition duration-300 hover:scale-105' src='/logo.svg' alt='logo' width={100} height={100} />
                <div>
                    <ul className='flex gap-8'>
                        <li className='text-[#000000]/70 hover:text-[#245943]/75 transition duration-300 hover:scale-105 font-bold'>HOME</li>
                        <li className='text-[#000000]/70 hover:text-[#245943]/75 transition duration-300 hover:scale-105 font-bold'>VOLUNTEER WITH US</li>
                        <li className='text-[#000000]/70 hover:text-[#245943]/75 transition duration-300 hover:scale-105 font-bold'>OUR PARTNER</li>
                        <li className='text-[#000000]/70 hover:text-[#245943]/75 transition duration-300 hover:scale-105 font-bold'>ABOUT</li>
                        <li className='text-[#000000]/70 hover:text-[#245943]/75 transition duration-300 hover:scale-105 font-bold'>CONTACT</li>
                    </ul>
                </div>
                <div  className='flex gap-5'>
                    <button className='text-[#1E3231] bg-transparent border-1 border-[#1E3231]/50 rounded-lg px-5 py-2 hover:bg-[#A0E5AD] hover:border-transparent hover:shadow-lg-[0_0_20px_rgba(120, 243, 146, 1)] transition duration-500'>Sign up </button>
                    <button className='text-[#ffffff] bg-[#1E3231] border-1 border-[#1E3231] rounded-lg px-5 py-2 hover:bg-[#245943] hover:shadow-lg-[0_0_20px_rgb(36,89,67)] hover:border-transparent hover:shadow-lg transition duration-500'> log in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
