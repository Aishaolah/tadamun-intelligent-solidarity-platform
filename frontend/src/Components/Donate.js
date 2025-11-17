import React from 'react'

function Donate(){
    return (
        <div className='mt-20 ml-20'>
            <div className='flex flex-col gap-8 mb-10'>
                <h1 className='text-7xl font-bold text-[#1E3231]'>Browse by category</h1>
                <p className='text-[#1E3231]/75 text-xl'>People all over the world are raising money for causes they care about.</p>
            </div>
            <button className='text-[#ffffff] text-bold bg-[#1E3231] border-1 border-[#1E3231] rounded-lg px-5 py-2 hover:bg-[#245943] hover:shadow-lg-[0_0_20px_rgb(36,89,67)] hover:border-transparent hover:shadow-lg transition duration-500'>Start a fundraiser</button> {/*hada ydi l form ta3 m7tajin */}
        </div>
    )
}

export default Donate