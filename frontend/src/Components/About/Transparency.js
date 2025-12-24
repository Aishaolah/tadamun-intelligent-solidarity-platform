import React from 'react'

function Transparency(){
    return (
        <section className="text-center">
        <h2
    className="font-[Montserrat] font-bold text-[40px] leading-[122%] text-center w-[588px] h-[160px] mx-auto "
    style={{
        color: "rgba(30, 50, 49, 0.75)",
    }}
>transparency & ethics statement
</h2>

        <div className="flex justify-center flex-wrap gap-6 mt-10">
    {[1, 2, 3, 4].map((_, index) => (
    <div key={index} className="relative">
        <div
        className="absolute left-1/2 transform -translate-x-1/2 -top-[72px] w-[145px] h-[145px] rounded-full"
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}></div>
        <div
            className="bg-[#A0E5AD] w-[241px] h-[250px] rounded-[15px] shadow-md"
            style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}></div>
    </div>))}
</div>

    </section>
    )
}

export default Transparency