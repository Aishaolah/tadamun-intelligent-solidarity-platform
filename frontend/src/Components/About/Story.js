import React from 'react'
import Image from 'next/image'

function Story(){
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-10 md:mb-20 pl-4 md:pl-20 pr-4 md:pr-20 gap-6 md:gap-0">
        <div className="flex flex-col items-start max-w-md">
            <h2 className="font-[Montserrat] font-bold text-4xl md:text-5xl lg:text-6xl leading-[122%] text-[#245943]">FOUNDER'S STORY</h2>
            <p className="leading-relaxed text-[#1E3231BF] text-base md:text-xl font-bold mt-4 md:mt-0">lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk</p>
        </div>
        <Image src="/image-tadamun2.jpg" alt="Mission" width={439} height={604} className="rounded-lg object-cover w-full md:w-auto h-64 md:h-auto"/>
    </div>
    )
}

export default Story