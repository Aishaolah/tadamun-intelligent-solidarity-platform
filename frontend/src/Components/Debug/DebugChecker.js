"use client";
import { useState } from 'react';

export default function DebugChecker() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkAPI = async (url, label) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      
      setResult({
        label,
        url,
        status: response.status,
        ok: response.ok,
        data: data,
        count: Array.isArray(data) ? data.length : 'N/A'
      });
    } catch (err) {
      setResult({
        label,
        url,
        error: err.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">API Debug Checker</h1>
      
      <div className="space-y-4 mb-8">
        <button
          onClick={() => checkAPI('http://localhost:3001/api/posts', 'All Posts')}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600"
        >
          Test: Get All Posts
        </button>
        
        <button
          onClick={() => checkAPI('http://localhost:3001/api/posts?status=active', 'Active Posts Only')}
          className="w-full bg-green-500 text-white px-4 py-3 rounded hover:bg-green-600"
        >
          Test: Get Active Posts
        </button>
        
        <button
          onClick={() => checkAPI('http://localhost:3001/api/posts?category=medical', 'Medical Posts')}
          className="w-full bg-purple-500 text-white px-4 py-3 rounded hover:bg-purple-600"
        >
          Test: Get Medical Category
        </button>
        
        <button
          onClick={() => checkAPI('http://localhost:3001/api/posts?category=medical&status=active', 'Active Medical Posts')}
          className="w-full bg-orange-500 text-white px-4 py-3 rounded hover:bg-orange-600"
        >
          Test: Get Active Medical Posts
        </button>
      </div>

      {loading && (
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Results: {result.label}
          </h2>
          
          <div className="space-y-2 mb-4">
            <p className="text-sm">
              <span className="font-semibold">URL:</span> 
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-xs">
                {result.url}
              </code>
            </p>
            
            {result.status && (
              <p className="text-sm">
                <span className="font-semibold">Status:</span> 
                <span className={`ml-2 px-2 py-1 rounded ${result.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {result.status} {result.ok ? '✓' : '✗'}
                </span>
              </p>
            )}
            
            {result.count !== 'N/A' && (
              <p className="text-sm">
                <span className="font-semibold">Posts Found:</span> 
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">
                  {result.count}
                </span>
              </p>
            )}
            
            {result.error && (
              <p className="text-sm text-red-600">
                <span className="font-semibold">Error:</span> {result.error}
              </p>
            )}
          </div>

          <details className="mt-4">
            <summary className="cursor-pointer font-semibold text-gray-700 hover:text-gray-900">
              View Raw Data
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded overflow-auto text-xs max-h-96">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </details>
        </div>
      )}

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded">
        <h3 className="font-bold text-yellow-800 mb-2">Common Issues:</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Backend server not running on port 3001</li>
          <li>• No posts in MongoDB database</li>
          <li>• All posts have accountStatus: "inactive"</li>
          <li>• CORS blocking requests</li>
          <li>• MongoDB connection failed</li>
        </ul>
      </div>
    </div>
  );
}