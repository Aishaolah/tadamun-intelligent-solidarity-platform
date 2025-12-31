import React from 'react'

function Transparency(){
    return (
        <section className="text-center px-4 md:px-8">
        <h2
    className="font-[Montserrat] font-bold text-2xl md:text-3xl lg:text-[40px] leading-[122%] text-center max-w-full md:max-w-[588px] mx-auto"
    style={{
        color: "rgba(30, 50, 49, 0.75)",
    }}
>transparency & ethics statement
</h2>

        <div className="flex justify-center flex-wrap gap-4 md:gap-6 mt-8 md:mt-10">
    {[1, 2, 3, 4].map((_, index) => (
    <div key={index} className="relative w-full sm:w-[calc(50%-12px)] md:w-auto">
        <div
        className="absolute left-1/2 transform -translate-x-1/2 -top-[40px] md:-top-[72px] w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full"
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}></div>
        <div
            className="bg-[#A0E5AD] w-full md:w-[241px] h-[200px] md:h-[250px] rounded-[15px] shadow-md"
            style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}></div>
    </div>))}
</div>

    </section>
    )
}

export default Transparency