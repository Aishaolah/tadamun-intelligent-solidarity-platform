"use client";
import { useState, useEffect } from 'react';

export default function FullDebug() {
  const [backendStatus, setBackendStatus] = useState('checking');
  const [allPosts, setAllPosts] = useState(null);
  const [activePosts, setActivePosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkEverything();
  }, []);

  const checkEverything = async () => {
    console.log('🔍 Starting debug check...');
    
    // Test 1: Check if backend is running
    try {
      console.log('📡 Testing: http://localhost:3001/api/posts');
      const response = await fetch('http://localhost:3001/api/posts');
      console.log('Response status:', response.status);
      console.log('Response OK:', response.ok);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('✅ Backend is responding');
      console.log('📦 All posts received:', data);
      
      setBackendStatus('online');
      setAllPosts(data);
      
      // Test 2: Check active posts
      console.log('📡 Testing: http://localhost:3001/api/posts?status=active');
      const activeResponse = await fetch('http://localhost:3001/api/posts?status=active');
      const activeData = await activeResponse.json();
      console.log('✅ Active posts received:', activeData);
      
      setActivePosts(activeData);
      
    } catch (err) {
      console.error('❌ Error:', err);
      setBackendStatus('offline');
      setError(err.message);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-2">🔧 Complete Debug Panel</h1>
      <p className="text-gray-600 mb-8">Let's find out what's wrong</p>

      {/* Backend Status */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">1. Backend Status</h2>
        <div className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full ${
            backendStatus === 'online' ? 'bg-green-500 animate-pulse' : 
            backendStatus === 'offline' ? 'bg-red-500' : 
            'bg-yellow-500 animate-pulse'
          }`} />
          <span className="font-semibold">
            {backendStatus === 'online' ? '✅ Backend is ONLINE' : 
             backendStatus === 'offline' ? '❌ Backend is OFFLINE' : 
             '⏳ Checking...'}
          </span>
        </div>
        
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
            <p className="font-semibold text-red-800">Error:</p>
            <p className="text-red-700 text-sm">{error}</p>
            <p className="text-red-600 text-xs mt-2">
              Make sure your backend is running: <code className="bg-red-100 px-1">cd backend && npm run dev</code>
            </p>
          </div>
        )}
      </div>

      {/* All Posts */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">2. All Posts in Database</h2>
        {allPosts === null ? (
          <p className="text-gray-500">Waiting for backend response...</p>
        ) : allPosts.length === 0 ? (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="font-semibold text-yellow-800">⚠️ No posts found in database!</p>
            <p className="text-yellow-700 text-sm mt-2">
              You need to create some posts first. Visit the create post page.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-green-700 font-semibold mb-3">
              ✅ Found {allPosts.length} total posts
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {allPosts.map((post, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded border text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold">{post.title}</p>
                      <p className="text-xs text-gray-600">Category: {post.category}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      post.accountStatus === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {post.accountStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Active Posts */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">3. Active Posts (What Should Show)</h2>
        {activePosts === null ? (
          <p className="text-gray-500">Waiting for backend response...</p>
        ) : activePosts.length === 0 ? (
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <p className="font-semibold text-red-800">❌ No ACTIVE posts found!</p>
            <p className="text-red-700 text-sm mt-2">
              This is why you see "No fundraisers available yet" on your site.
            </p>
            <p className="text-red-700 text-sm mt-2">
              <strong>Solution:</strong> Run the activation script or use MongoDB to set accountStatus to "active"
            </p>
          </div>
        ) : (
          <div>
            <p className="text-green-700 font-semibold mb-3">
              ✅ Found {activePosts.length} active posts - These SHOULD show on your site!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {activePosts.map((post, idx) => (
                <div key={idx} className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="aspect-video bg-gray-200 rounded mb-2 overflow-hidden">
                    {post.images && post.images[0] ? (
                      <img src={post.images[0]} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        No image
                      </div>
                    )}
                  </div>
                  <p className="font-semibold text-sm line-clamp-2">{post.title}</p>
                  <p className="text-xs text-gray-600 mt-1">Category: {post.category}</p>
                  <p className="text-xs text-green-600 mt-1">
                    {post.receivedAmount} / {post.targetAmount} DZD
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* API Test */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">4. Quick API Tests</h2>
        <div className="space-y-2">
          <a 
            href="http://localhost:3001/api/posts" 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition"
          >
            🔗 Test: All Posts
            <span className="text-xs text-gray-600 ml-2">
              (http://localhost:3001/api/posts)
            </span>
          </a>
          
          <a 
            href="http://localhost:3001/api/posts?status=active" 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition"
          >
            🔗 Test: Active Posts Only
            <span className="text-xs text-gray-600 ml-2">
              (http://localhost:3001/api/posts?status=active)
            </span>
          </a>

          <a 
            href="http://localhost:3001/api/posts?category=medical&status=active" 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition"
          >
            🔗 Test: Medical Active Posts
            <span className="text-xs text-gray-600 ml-2">
              (http://localhost:3001/api/posts?category=medical&status=active)
            </span>
          </a>
        </div>
      </div>

      {/* Console Check */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">5. Browser Console Check</h2>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="font-semibold text-blue-800 mb-2">📊 Check Browser Console (F12)</p>
          <p className="text-blue-700 text-sm">
            Open DevTools (press F12) → Console tab → Look for the debug logs above.
          </p>
          <p className="text-blue-700 text-sm mt-2">
            All test results are logged there with 🔍 emoji markers.
          </p>
        </div>
      </div>

      {/* Refresh Button */}
      <button
        onClick={checkEverything}
        className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
      >
        🔄 Run Tests Again
      </button>
    </div>
  );
}