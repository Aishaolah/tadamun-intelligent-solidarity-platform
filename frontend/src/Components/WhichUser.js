import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WhichUser() {
    return (
    <div className='mt-32 mx-auto text-center ml-20 mr-20 mb-20'>
            <h1 className='text-[#245943] font-bold text-5xl'>Which Category are you?</h1>
            <div className='mx-auto mt-20 flex flex-row gap-50 justify-center'>
                <div className='pl-20 pr-20 pt-15 pb-15 bg-[#1E3231]/75 rounded-xl'>
                    <Image className='p-5 bg-[#D9D9D9] rounded-full mb-5' src='/nobg_3.svg' alt='tadamun hero photo' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-xl mb-3'>Donater</h2>
                    <Link href="/login">
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-5 py-2 pl-10 pr-10 hover:bg-[#78F392] hover:border-transparent hover:shadow-lg-[0_0_20px_rgba(120, 243, 146, 1)] transition duration-300 hover:scale-102">
                            Next
                        </button>
                    </Link>
                </div>
                <div className='pl-20 pr-20 pt-15 pb-15 bg-[#1E3231]/75 rounded-xl'>
                    <Image className='p-5 bg-[#D9D9D9] rounded-full mb-5' src='/nobg_3.svg' alt='tadamun hero photo' width={100} height={100} />
                    <h2 className='text-[#d9d9d9] font-bold text-xl mb-3'>In Need</h2>
                    <Link href="/login">
                        <button className="text-[#1E3231]/75 bg-[#A0E5AD] rounded-lg px-5 py-2 pl-10 pr-10 hover:bg-[#78F392] hover:border-transparent hover:shadow-lg-[0_0_20px_rgba(120, 243, 146, 1)] transition duration-300 hover:scale-102">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        )
}

export default WhichUser