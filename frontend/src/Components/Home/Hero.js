import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Home() {
    return (
        <div className='mt-16 md:mt-32 mb-10 md:mb-20 px-4 md:px-0'>
            <div className='bg-[#1E3231] max-w-[95%] md:max-w-[85%] mx-auto rounded-2xl h-auto md:h-[550px] flex flex-col md:flex-row justify-between items-center py-8 md:py-0'>
            <div className='grid grid-cols-1 gap-6 md:gap-15 content-evenly pl-4 md:pl-10 pr-4 md:pr-0 w-full md:w-auto'>
                <h1 className='text-[#EFEBE3] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight'>welcome to 
                <span className='text-[#A0E5AD] block'> tadamun</span></h1>
                <p className='text-[#EFEBE3] text-base md:text-xl font-bold'>Intelligent Solidarity Platform</p>
                <div className='flex flex-col sm:flex-row gap-3 md:gap-5 flex-wrap'>
                <Link href="/category">
                    <button className='text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 md:px-5 py-2 text-sm md:text-base hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full sm:w-auto'>Want to help </button>
                </Link>
                <Link href="/signup">
                    <button className='text-[#245943] bg-[#EFEBE3] rounded-lg px-4 md:px-5 py-2 text-sm md:text-base hover:bg-[#D9D9D9] hover:shadow-lg hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full sm:w-auto'>Needs help</button>
                </Link>
                <Link href="/demo">
                    <button className='text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 md:px-5 py-2 text-sm md:text-base hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 font-bold flex items-center justify-center gap-2 w-full sm:w-auto'>
                        <span>🤖</span>
                        <span>AI VERIFICATION</span>
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
