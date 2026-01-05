"use client";

import React from "react";
import Link from "next/link";

export default function PostCard({ post }) {
  const title = post?.title || post?.fundraiserName || "Untitled";
  const image = post?.images?.[0] || null;
  const location = post?.contact?.address || "Algeria";

  const raised = post?.receivedAmount || 0;
  const goal = post?.targetAmount || 0;
  const currency = post?.currency || "DZD";

  const progress =
    goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;

  const postUrl = `/posts/${post?._id}`;

  return (
    <Link href={postUrl} className="block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        
        {/* IMAGE */}
        <div className="relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-52 w-full object-cover"
            />
          ) : (
            <div className="h-52 w-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              No Image
            </div>
          )}

          {/* Location pill */}
          {location && (
            <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              {location}
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="font-semibold text-base leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Progress bar */}
          <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Raised text */}
          <p className="mt-3 text-sm text-gray-700 font-medium">
            {raised.toLocaleString()} {currency} raised
          </p>
        </div>
      </article>
    </Link>
  );
}
