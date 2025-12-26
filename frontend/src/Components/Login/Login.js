import React from 'react'
import Image from 'next/image'

export default function Login() {
    return (
        <div className="mt-20 flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <div className='bg-[#f2f2f1] border border-[#000000] p-10 rounded-lg flex flex-col items-center gap-6'>
        <Image className='bg-black' src="/logo.svg" alt="Logo" width={50} height={50} />

            <h2 className='text-[#245943] text-4xl'>LOG IN </h2>
            <form className="flex flex-col gap-4 items-start">
            <label className='text-[#245943] font-acme text-lg'>I am a:</label>
            <select className="px-6 py-3 text-black bg-[#E3E3E3] border border-black rounded-[15px] ">
                <option value="donater">Donater</option>
                <option value="needy">Needy</option>
            </select>
            <label className='text-[#245943] font-acme text-lg'>Enter your email or username:</label>
            <input type="text" className="px-4 py-3 w-[463px] h-[52px] bg-[#E3E3E3] border border-black rounded-[15px]"/>

            <label className='text-[#245943] font-acme text-lg'>Enter your password:</label>
            <input type="password" className="px-4 py-3 w-[463px] h-[52px] bg-[#E3E3E3] border border-black rounded-[15px] border"/>
            <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" className="w-4 h-4 border border-black rounded"/>
                <label className='text-[#245943] font-acme text-lg'>Remember me</label>
            </div>

            <button type="submit" className="mt-6 w-[205px] h-[53px] rounded-lg border text-white bg-black self-center">
                Log in
            </button>
            </form>
        </div>
        </div>
    );
    }