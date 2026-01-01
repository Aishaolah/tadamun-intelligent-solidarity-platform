import React from 'react'

function BasicFond(){
    return (
    <div className='ml-4 md:ml-20 mr-4 md:mr-20'>
            <div className="mt-16 md:mt-20 m-auto mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold">Browse Basic Needs fundraisers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-10">
            <div className="w-full rounded-2xl bg-white p-3 shadow-md">

            <div className="relative overflow-hidden rounded-xl">
                <img
                src="/patient.jpg"
                alt="Hope for Anna"
                className="h-40 md:h-44 w-full object-cover"/>
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">
                West Point, MS
                </span>
            </div>

            <h3 className="mt-3 text-sm md:text-base font-semibold text-gray-900">
                Hope for Anna treatment in Germany
            </h3>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[75%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-xs md:text-sm font-semibold text-gray-900">
                $123,823 raised
            </p>
            </div>
            </div>
            <button className="mt-8 md:mt-10 text-[#1E3231] bg-transparent border rounded-sm px-4 md:px-5 py-2 text-sm md:text-base hover:bg-gray-200 hover:border-transparent transition duration-500">See More </button>
            <hr className="mt-10 md:mt-15"></hr>
            </div>
        </div>       
    )
}

export default BasicFond