"use client";
import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Image from "next/image";


export default function Form() {
    const [amount, setAmount] = useState(10000);
    // default to the downloaded Borgen Project image filename (already in public)
    // prefer a custom uploaded image if present; fall back to downloaded article image
    const [previewSrc, setPreviewSrc] = useState(null);
    // simplified preview: center & cover (no manual pan/zoom controls)
    const [previewType, setPreviewType] = useState(null);

    const handleAmountChange = (value) => {
        const v = parseInt(value, 10) || 0;
        const snapped = Math.round(v / 10000) * 10000;
        setAmount(snapped);
    };
    
    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewSrc(url);
        setPreviewType(file.type.startsWith("video") ? "video" : "image");
    };

    return (
    <div className="mt-10 md:mt-15 ml-4 md:ml-20 mr-4 md:mr-20 mb-10 md:mb-20">
        <form className="bg-transparent rounded-xl border-2 border-gray-500 pt-10 md:pt-15 pl-4 md:pl-20 pr-4 md:pr-20 pb-10 md:pb-20 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-4">What best describes your fundraiser?</p>
                <div>
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="fundraiserCategory"></label> 
                        Fundraiser Category
                    <select className="mb-4 mt-3 shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-[#245943] bg-gray-50 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="fundraiserCategory">
                        <option value="medical">Medical</option>
                        <option value="education">Education</option>
                        <option value="emergency">Emergency</option>
                        <option value="community">Community</option>
                        <option value="memorial">Memorial</option>
                        <option value="other">Other</option>
                    </select> 
                </div>
            <p className="text-xl md:text-2xl font-bold mb-4">Who are you fundraising for?</p>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserType"></label> 
                    Fundraiser Type
                <select className="mb-4 mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="fundraiserType">
                    <option value="myself">Myself</option>
                    <option value="someoneElse">Someone Else</option>
                </select>
            </div>
            <p className="text-xl md:text-2xl font-bold mb-4">How much are you want raising?</p>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserAmount">
                    Target Amount
                </label>
                <div className="mb-4">
                    <div className="flex items-center gap-4">
                        <span className="text-sm md:text-base font-medium">DZD</span>
                        <input
                            id="fundraiserAmount"
                            type="number"
                            step={10000}
                            min={10000}
                            value={amount}
                            onChange={(e) => handleAmountChange(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base"
                        />
                    </div>
                    <input
                        type="range"
                        min={10000}
                        max={1000000}
                        step={10000}
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                        className="w-full mt-3"
                    />
                </div>
            </div>



                {/* ---- UPLOAD SECTION ---- */}
            <p className="text-xl md:text-2xl font-bold mb-4">
            Put a photo or a video that describes the fundraiser
            </p>

            <label className="relative mt-6 flex items-center justify-center h-56 md:h-72 cursor-pointer rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 overflow-hidden">

            {/* Invisible but clickable input */}
            <input
                type="file"
                accept="image/*,video/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
            />

            {/* Preview */}
            {previewSrc ? (
                previewType === "video" ? (
                <video
                    src={previewSrc}
                    controls
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                ) : (
                <div
                    className="absolute inset-0 bg-center bg-cover rounded-2xl"
                    style={{ backgroundImage: `url(${previewSrc})` }}
                />
                )
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 z-10 pointer-events-none">
                <MdOutlineAddPhotoAlternate className="h-10 w-10 mb-2" />
                <p className="font-semibold">Click to upload photo or video</p>
                <p className="text-sm">PNG, JPG, MP4 supported</p>
                </div>
            )}
        </label>



            {/* Preview is center/cover by default; removed manual pan/zoom controls */}

    
            <div className="mt-4 md:mt-6 mb-4"> 
                <p className="text-xl md:text-2xl font-bold mb-4">Give your fundraiser a title and tell us your story</p>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserTitle">
                    Fundraiser Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="fundraiserTitle" type="text" placeholder="Enter your fundraiser title" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserDescription">
                    Fundraiser Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base" id="fundraiserDescription" rows="4" placeholder="Describe your fundraiser"></textarea>
            </div>
            <button className="bg-[#245943] hover:bg-[#245943]/75 text-white hover:text-[#EFEBE3]/80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base w-full md:w-auto" type="submit">
                Create Fundraiser
            </button>
        </form>
    </div>
    );
}