"use client";
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

export default function Featured() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Use query parameters for better performance
      const res = await fetch('http://localhost:3001/api/posts?status=active&featured=true&limit=4');
      
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-0 m-auto mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold">Featured Fundraisers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full rounded-2xl bg-gray-200 p-3 shadow-md animate-pulse">
              <div className="h-40 md:h-44 w-full bg-gray-300 rounded-xl" />
              <div className="mt-3 h-4 bg-gray-300 rounded w-3/4" />
              <div className="mt-3 h-2 w-full bg-gray-300 rounded-full" />
              <div className="mt-2 h-3 bg-gray-300 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-0 m-auto mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold">Featured Fundraisers</h1>
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Error loading posts: {error}</p>
          <button 
            onClick={fetchPosts}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-0 m-auto mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold">Featured Fundraisers</h1>
        <div className="mt-6 p-8 text-center bg-gray-50 rounded-lg">
          <p className="text-gray-600">No active fundraisers yet.</p>
          <p className="text-sm text-gray-500 mt-2">Be the first to create one!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 md:mt-20 ml-4 md:ml-20 mr-4 md:mr-0 m-auto mb-10 md:mb-20">
      <h1 className="text-xl md:text-2xl font-bold">Featured Fundraisers</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <button className="mt-8 md:mt-10 text-[#1E3231] bg-transparent border rounded-sm px-4 md:px-5 py-2 text-sm md:text-base hover:bg-gray-200 hover:border-transparent transition duration-500">
        See More
      </button>
      <hr className="mt-10 md:mt-15" />
    </div>
  );
}