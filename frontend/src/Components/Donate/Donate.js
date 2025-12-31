import React from 'react'

function Donate(){
    return (
        <div className='mt-20 md:mt-25 ml-4 md:ml-20 pr-4 md:pr-0'>
            <div className='flex flex-col gap-4 md:gap-8 mb-6 md:mb-10'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E3231]'>Browse by category</h1>
                <p className='text-[#1E3231]/75 text-base md:text-xl'>People all over the world are raising money for causes they care about.</p>
            </div>
            <button className='text-[#ffffff] text-bold bg-[#1E3231] border-1 border-[#1E3231] rounded-lg px-4 md:px-5 py-2 text-sm md:text-base hover:bg-[#245943] hover:shadow-lg hover:border-transparent transition duration-500'> Start a fundraiser</button>
        </div>
    )
}

export default Donate