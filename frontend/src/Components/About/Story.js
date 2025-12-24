import React from 'react'
import Image from 'next/image'

function Story(){
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-20 pl-20 pr-20">
        <div className="flex flex-col items-start max-w-md mr-30">
            <h2 className="font-[Montserrat] font-bold text-6xl leading-[122%] text-[#245943]">FOUNDER’S STORY</h2>
            <p className="leading-relaxed text-[#1E3231BF] text-xl font-bold">lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk</p>
        </div>
        <Image src="/image-tadamun2.jpg" alt="Mission" width={439} height={604} className="rounded-lg object-cover"/>
    </div>
    )
}

export default Story