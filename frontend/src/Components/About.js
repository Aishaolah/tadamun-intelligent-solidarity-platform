import React from "react";
import Image from "next/image";

function About() {
return (
    <div className="bg-[#EFEDE3] min-h-screen text-[#1E3231] px-8 py-16">
    <section className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
        <div className="max-w-md">
        <h2 className="font-[Montserrat] font-bold text-[66px] leading-[122%] w-[341px] h-[160px]">
        <span style={{ color: "#B07E56" }}>mission</span>{" "}
        <span style={{ color: "#000000" }}>&amp; value</span>
</h2>
        <p
  className="mt-6 leading-relaxed"
  style={{
    caolor: "#1E3231BF",
    fontFamily: "Archivo Black",
    fontSize: "25px",
    fontWeight: "400",
    lineHeight: "100%",
    width: "416px",
    height: "185px",
  }}
>
  lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk
</p>

        </div>
        <Image
          src="/image-tadamun1.jpg"
          alt="Mission"
          width={615}
          height={413}
          className="rounded-lg object-cover"
        />
      </section>
    
    <section className="flex flex-col md:flex-row-reverse items-center justify-between mb-20 gap-10">
        <div className="max-w-md">
        <h2
  className="font-[Montserrat] font-bold text-[66px] leading-[122%] mb-4 w-[341px] h-[160px]"
  style={{ color: "#245943" }}
>
  founder’s story
</h2>

        <p
  className="mt-6 leading-relaxed"
  style={{
    caolor: "#1E3231BF",
    fontFamily: "Archivo Black",
    fontSize: "25px",
    fontWeight: "400",
    lineHeight: "100%",
    width: "416px",
    height: "185px",
  }}
>
  lorem jhdvbkbv bksjbdkb bnfkjjg dgkjd bkjgdb dkjbhkjgbk
</p>
        </div>

        <Image
          src="/image-tadamun2.jpg"
          alt="Mission"
          width={439}
          height={604}
          className="rounded-lg object-cover"
        />

    </section>

    <section className="text-center">
        <h2
  className="font-[Montserrat] font-bold text-[40px] leading-[122%] text-center w-[588px] h-[160px] mx-auto "
  style={{
    color: "rgba(30, 50, 49, 0.75)",
  }}
>
  transparency & ethics statement
</h2>

        <div className="flex justify-center flex-wrap gap-6 mt-10">
  {[1, 2, 3, 4].map((_, index) => (
    <div key={index} className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 -top-[72px] w-[145px] h-[145px] rounded-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>
      <div
        className="bg-[#A0E5AD] w-[241px] h-[250px] rounded-[15px] shadow-md"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></div>
    </div>
  ))}
</div>

    </section>
    </div>
);
}

export default About;
