import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Home() {
    return (
        <div className='mt-32 mb-20'>
            <div className='bg-[#1E3231] max-w-[85%] mx-auto rounded-2xl h-[550px] flex justify-between items-center'>
            <div className='grid grid-cols-1 gap-15 content-evenly pl-10 '>
                <h1 className='text-[#EFEBE3] font-bold text-7xl'>welcome to 
                <span className='text-[#A0E5AD] block'> tadamun</span></h1>
                <p className='text-[#EFEBE3] text-xl font-bold'>lorem ksgfhvhi  jihrjh j h hjh i h kj hj k k</p>
                <div className='flex gap-5'>
                <Link href="/category">
                    <button className='text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-5 py-2 hover:bg-[#78F392] hover:border-transparent hover:shadow-lg-[0_0_20px_rgba(120, 243, 146, 1)] transition duration-300 hover:scale-102'>Want to help </button>
                </Link>
                <Link href="/signup">
                    <button className='text-[#245943] bg-[#EFEBE3] rounded-lg px-5 py-2 hover:bg-[#D9D9D9] hover:shadow-lg-[0_0_20px_rgba(120, 243, 146, 1)] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-102'>Needs help</button>
                </Link>
                </div>
            </div>
            <div>
                <Image className='mr-10 lg:w-145 transition duration-100 hover:scale-102' src='/photos1.svg' alt='tadamun hero photo' width={300} height={300} />
            </div>
            </div>
        </div>
    )
}

export default Home