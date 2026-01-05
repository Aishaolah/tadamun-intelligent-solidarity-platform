"use client";
import React from "react";
import Link from "next/link"; // import Link

export default function PostCard({ post }) {
  const title = post?.title || post?.fundraiserName || "Untitled";
  const image = post?.images?.[0] || null;
  const location = post?.contact?.address || "";

  const raised = post?.receivedAmount || 0;
  const goal = post?.targetAmount || 0;
  const progress = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;

  // Make sure this matches your dynamic route folder: /app/posts/[id]/page.js
  const postUrl = `/posts/${post?._id}`;

  return (
    <Link href={postUrl}>
      <article className="w-full cursor-pointer hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
            />
          ) : (
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              No Image
            </div>
          )}

          {location && (
            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
              {location}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="mt-3">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Progress bar */}
          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Raised text */}
          <p className="mt-2 text-sm font-medium text-gray-700">
            {raised.toLocaleString()} {post?.currency || "DZD"} raised
          </p>
        </div>
      </article>
    </Link>
  );
}
