import React from 'react'
import Image from 'next/image'


function Categories(){
    return (
    <div className='mt-20 ml-20 m-auto'>
        <div className='grid grid-cols-3 gap-4'>
            <div className='rounded'>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Education</h3>
            </div>
            <div>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Medical</h3>
            </div>
            <div>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Emergency Situation</h3>
            </div>
            <div>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Family</h3>
            </div>
            <div>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Volunteer</h3>
            </div>
            <div>
                <Image className='p-20 bg-[#DFDACA]' src='/student.png' alt='student' width={60} height={60}/>
                <h3 className='text-l font-bold text-[#1E3231] mt-5'>Special Requests</h3>
            </div>
        </div>
    </div>
    )
}

export default Categories