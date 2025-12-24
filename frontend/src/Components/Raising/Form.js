import React from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";


export default function Form() {
    return (
    <div className="mt-15 ml-20">
        <form className="bg-transparent rounded-xl border-2 border-gray-500 ml-50 mr-50 pt-15 pl-20 pr-20 pb-20 max-w-4xl mb-20">
            <p className="text-2xl font-bold mb-4">What best describes your fundraiser?</p>
                <div>
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="fundraiserCategory"></label> 
                        Fundraiser Category
                    <select className="mb-4 mt-3 shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-[#245943] bg-gray-50 leading-tight focus:outline-none focus:shadow-outline" id="fundraiserCategory">
                        <option value="medical">Medical</option>
                        <option value="education">Education</option>
                        <option value="emergency">Emergency</option>
                        <option value="community">Community</option>
                        <option value="memorial">Memorial</option>
                        <option value="other">Other</option>
                    </select> 
                </div>
            <p className="text-2xl font-bold mb-4">Who are you fundraising for?</p>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserType"></label> 
                    Fundraiser Type
                <select className="mb-4 mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundraiserType">
                    <option value="myself">Myself</option>
                    <option value="someoneElse">Someone Else</option>
                </select>
            </div>
            <p className="text-2xl font-bold mb-4">How much are you want raising?</p>
            <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="fundraiserAmount">
                    Target Amount
                </label>
                <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundraiserAmount" type="number" placeholder="Enter your target amount" />

            </div>
            <p className="text-2xl font-bold mb-2">Put a photo or a video that describes the fundraiser</p>
            <label className="mt-6 flex h-72 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-center hover:bg-gray-100">
            {/* Hidden input */}
            <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
            />

            {/* Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 16l4-4a3 3 0 014 0l5 5M7 8h.01M21 16V5a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2z"
                />
            </svg>

            <p className="mt-2 text-sm font-medium text-gray-700">
                Upload a photo or video
            </p>
            </label>

    
            <div className="mt-4 mb-4"> 
                <p className="text-2xl font-bold mb-4">Give your fundraiser a title and tell us your story</p>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserTitle">
                    Fundraiser Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundraiserTitle" type="text" placeholder="Enter your fundraiser title" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fundraiserDescription">
                    Fundraiser Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundraiserDescription" rows="4" placeholder="Describe your fundraiser"></textarea>
            </div>
            <button className="bg-[#245943] hover:bg-[#245943]/75 text-white hover:text-[#EFEBE3]/80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Create Fundraiser
            </button>
        </form>
    </div>
    );
}