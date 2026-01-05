"use client";
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Link from "next/link";

export default function CategoryFond({ category, title }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // 🚨 GUARD: do not fetch if category is missing
    if (!category) {
      console.warn("CategoryFond: category prop is undefined");
      setPosts([]);
      setLoading(false);
      return;
    }

    fetchPosts();
  }, [category]);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:3001/api/posts?category=${category}&accountStatus=active`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Fetched posts:", data);

      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(`Error fetching ${category} posts:`, err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  if (loading) {
    return (
      <div className="ml-4 md:ml-20 mr-4 md:mr-20">
        <div className="mt-16 md:mt-20 m-auto mb-10 md:mb-20">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full rounded-2xl bg-gray-200 p-3 shadow-md animate-pulse"
              >
                <div className="h-40 md:h-44 w-full bg-gray-300 rounded-xl" />
                <div className="mt-3 h-4 bg-gray-300 rounded w-3/4" />
                <div className="mt-3 h-2 w-full bg-gray-300 rounded-full" />
                <div className="mt-2 h-3 bg-gray-300 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="ml-4 md:ml-20 mr-4 md:mr-20">
        <div className="mt-16 md:mt-20 m-auto mb-10 md:mb-20">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <div className="mt-8 p-8 text-center bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              No {category} fundraisers available yet.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Be the first to create one!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-4 md:ml-20 mr-4 md:mr-20">
      <div className="mt-16 md:mt-20 m-auto mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold">
          {title}
          <span className="ml-2 text-sm font-normal text-gray-500">
            ({posts.length}{" "}
            {posts.length === 1 ? "fundraiser" : "fundraisers"})
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-10">
          {displayedPosts.map((post) => (
          <Link
            key={post._id}
            href={`/posts/${post.slug}`}
            className="cursor-pointer"
          >
            <PostCard post={post} />
          </Link>
        ))}

        </div>

        {posts.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 md:mt-10 text-[#1E3231] bg-transparent border rounded-sm px-4 md:px-5 py-2 hover:bg-gray-200 transition"
          >
            {showAll ? "Show Less" : `See More (${posts.length - 3} more)`}
          </button>
        )}

        <hr className="mt-10" />
      </div>
    </div>
  );
}
