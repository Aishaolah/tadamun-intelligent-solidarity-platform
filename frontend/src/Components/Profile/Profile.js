import React from 'react';

export default function ProfileStatic() {
    return ( 

        <div className='mt-20 ml-20 mr-20'>
<div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm">
        {/* Cover */}
        <div className="relative h-56 bg-emerald-500">
            {/* Change cover */}
            <label className="absolute bottom-4 right-4 cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow">
            📷 Change Cover
            <input type="file" className="hidden" />
            </label>
        </div>

        {/* Profile section */}
        <div className="relative px-8 pb-8">
            {/* Avatar */}
            <div className="-mt-16 flex items-end gap-6">
            <label className="relative cursor-pointer">
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 text-4xl font-bold text-white shadow">
                S
                </div>
                <input type="file" className="hidden" />
            </label>

            {/* Name & action */}
            <div className="flex-1">
                <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Sarah Johnson
                </h1>

                <button className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-600">
                    ♡ Edit Profile
                </button>
                </div>

                <p className="mt-2 max-w-xl text-gray-600">
                Passionate about making a difference. Supporting causes that
                matter, one donation at a time.
                </p>

                {/* Meta */}
                <div className="mt-3 flex gap-6 text-sm text-gray-500">
                <span>📍 San Francisco, California</span>
                <span>📅 Joined March 2022</span>
                </div>
            </div>
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-12">
            <div>
                <p className="text-2xl font-semibold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Causes Supported</p>
            </div>

            <div className="border-l pl-12">
                <p className="text-2xl font-semibold text-emerald-500">$3,450</p>
                <p className="text-sm text-gray-600">Total Donated</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    );
}
