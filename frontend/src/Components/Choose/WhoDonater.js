import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WhoDonor() {
    return (
        <div className='mt-20 md:mt-32 mx-auto text-center ml-4 md:ml-20 mr-4 md:mr-20 px-4 md:px-0'>
            <h1 className='text-[#245943] font-bold text-3xl md:text-4xl lg:text-5xl'>Which are you?</h1>
            <div className='mx-auto mt-10 md:mt-20 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center'>
                <div className='p-6 bg-[#1E3231]/75 rounded-lg w-full sm:w-64 h-72 flex flex-col items-center justify-center'>
                    <Image className='p-2 bg-[#D9D9D9] rounded-full mb-4' src='/nobg_3.svg' alt='Individual' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-sm md:text-base mb-4 text-center'>Individual</h2>
                    <Link href="/signupdonor" className="w-full px-4">
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 py-2 text-sm hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full">
                            Next
                        </button>
                    </Link>
                </div>
                <div className='p-6 bg-[#1E3231]/75 rounded-lg w-full sm:w-64 h-72 flex flex-col items-center justify-center'>
                    <Image className='p-2 bg-[#D9D9D9] rounded-full mb-4' src='/nobg_3.svg' alt='Organization' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-sm md:text-base mb-4 text-center'>Organization</h2>
                    <Link href="/signup" className="w-full px-4">
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 py-2 text-sm hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WhoDonor