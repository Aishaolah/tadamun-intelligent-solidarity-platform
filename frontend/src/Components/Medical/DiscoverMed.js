import React from 'react'

function DiscoverMed(){
    return (
        <div>
            <div className='mt-20 md:mt-30 ml-4 md:ml-20 mr-4 md:mr-0 flex flex-col md:flex-row gap-6 md:gap-20 mb-10 md:mb-20'>
                <div className='flex flex-col gap-6 md:gap-8 mb-6 md:mb-10 max-w-2xl'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#1E3231]'>Discover medical
                    <span className='block'>fundraisers</span>on Tadamun</h1>
                    <p className='text-[#1E3231]/75 text-base md:text-xl'>Help others by donating to their fundraiser, or start one for someone you care about.</p>
                    <div>
                        <button className='text-[#ffffff] text-bold bg-[#1E3231] border border-[#1E3231] rounded-lg px-4 md:px-5 py-2 text-sm md:text-base hover:bg-[#245943] hover:shadow-lg hover:border-transparent transition duration-500'>Start a fundraiser</button>
                    </div>
                </div>
                <div className='w-full md:w-auto'>
                    <img
                    src="/children.jpg" 
                    alt="Hope for Anna"
                    className="h-64 md:h-75 w-full object-cover rounded-2xl"/>
                </div>
            </div>
            <hr className="mt-6 md:mt-10 ml-4 md:ml-20 mr-4 md:mr-20 border border-[#1E3231]/50"></hr>
        </div>
        
    )
}

export default DiscoverMed