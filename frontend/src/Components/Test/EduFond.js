"use client";
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function EducationFond() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchEducationPosts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "http://localhost:3001/api/posts?category=education"
        );

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching education posts:", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationPosts();
  }, []);

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  if (loading) {
    return (
      <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-16">
        <h1 className="text-xl md:text-2xl font-bold">
          Browse education fundraisers
        </h1>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-16">
        <h1 className="text-xl md:text-2xl font-bold">
          Browse education fundraisers
        </h1>
        <p className="mt-6 text-gray-500 text-center">
          No education fundraisers available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-16">
      <h1 className="text-xl md:text-2xl font-bold">
        Browse education fundraisers
        <span className="ml-2 text-sm text-gray-500">
          ({posts.length})
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayedPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      {posts.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 border px-4 py-2 rounded hover:bg-gray-100"
        >
          {showAll ? "Show Less" : `See More (${posts.length - 3})`}
        </button>
      )}
    </div>
  );
}
