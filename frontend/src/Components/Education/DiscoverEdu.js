import React from 'react'

function DiscoverEdu(){
    return (
        <div>
            <div className='mt-30 ml-20 flex flex-row gap-20 mb-20'>
                <div className='flex flex-col gap-8 mb-10'>
                    <h1 className='text-6xl font-bold text-[#1E3231]'>Discover education
                    <span className='block'>fundraisers</span>on Tadamun</h1>
                    <p className='text-[#1E3231]/75 text-xl'>Help others by donating to their fundraiser, or start one for someone you care about.</p>
                    <div>
                        <button className='text-[#ffffff] text-bold bg-[#1E3231] border border-[#1E3231] rounded-lg px-5 py-2 hover:bg-[#245943] hover:shadow-lg-[0_0_20px_rgb(36,89,67)] hover:border-transparent hover:shadow-lg transition duration-500'>Start a fundraiser</button> {/*hada ydi l form ta3 m7tajin */}
                    </div>
                </div>
                <div>
                    <img
                    src="/childrenstudying.jpg" 
                    alt="Hope for Anna"
                    className="h-75 w-full object-cover rounded-2xl mt-5"/>
                </div>
                <hr className="mt-15"></hr>
            </div>
            <hr className="mt-10 ml-20 mr-20 border border-[#1E3231]/50"></hr>
        </div>
        
    )
}

export default DiscoverEdu