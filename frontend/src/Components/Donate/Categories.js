import React from 'react'
import Image from 'next/image'
import { IoSchoolSharp } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";


export default function Categories(){
    return (
    <div className='mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-0 m-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <IoSchoolSharp className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Education</h2>
            </div>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <FaStethoscope  className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Medical</h2>
            </div>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <MdEmergency className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Emergency 
                <span className='block'>Situation</span></h2>
            </div>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <MdFamilyRestroom className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Family</h2>
            </div>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <FaHouseChimney className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Housing</h2>
            </div>
            <div className='bg-[#f2f2f1] p-6 rounded-lg flex flex-col items-center justify-center w-full sm:w-64 h-72 hover:scale-105 transition-transform duration-300 hover:border-black border'>
            <FaHandsHelping className='text-[#1E3231] w-16 h-16'/>
                <h2 className='text-sm md:text-base font-bold text-[#1E3231] mt-3 text-center'>Basic
                <span className='block'>Needs</span></h2>
            </div>
        </div>
    </div>
    )
}

