import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WhichUser() {
    return (
    <div className='mt-32 mx-auto text-center ml-20 mr-20 mb-20'>
            <h1 className='text-[#245943] font-bold text-5xl'>Which Category are you?</h1>
            <div className='mx-auto mt-20 flex flex-row gap-6 justify-center items-center'>
                <div className='p-6 bg-[#1E3231]/75 rounded-lg w-full sm:w-64 h-72 flex flex-col items-center justify-center'>
                    <Image className='p-2 bg-[#D9D9D9] rounded-full mb-4' src='/nobg_3.svg' alt='Donor' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-sm md:text-base mb-4 text-center'>Donor</h2>
                    <Link href="/category" className='w-full px-4'>
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 py-2 text-sm hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full">
                            Next
                        </button>
                    </Link>
                </div>
                <div className='p-6 bg-[#1E3231]/75 rounded-lg w-full sm:w-64 h-72 flex flex-col items-center justify-center'>
                    <Image className='p-2 bg-[#D9D9D9] rounded-full mb-4' src='/nobg_3.svg' alt='In Need' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-sm md:text-base mb-4 text-center'>In Need</h2>
                    <Link href="/signupneedy" className='w-full px-4'>
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-4 py-2 text-sm hover:bg-[#78F392] hover:border-transparent hover:shadow-lg transition duration-300 hover:scale-105 w-full">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        )
}

export default WhichUser