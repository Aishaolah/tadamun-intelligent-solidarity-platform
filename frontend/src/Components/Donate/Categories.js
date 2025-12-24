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
    <div className='mt-20 ml-20 m-auto'>
        <div className='flex flex-1 gap-8 '>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <IoSchoolSharp className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Education</h2>
            </div>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <FaStethoscope  className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Medical</h2>
            </div>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <MdEmergency className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Emergency 
                <span className='block'>Situation</span></h2>
            </div>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <MdFamilyRestroom className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Family</h2>
            </div>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <FaHouseChimney className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Housing</h2>
            </div>
            <div className='bg-[#f2f2f1] p-10 rounded-lg flex flex-col items-center hover:scale-102 transition-transform duration-300 hover:border-black border'>
            <FaHandsHelping className='text-[#1E3231] w-25 h-25'/>
                <h2 className='text-lg font-bold text-[#1E3231] mt-5'>Basic
                <span className='block'>Needs</span></h2>
            </div>
        </div>
    </div>
    )
}

