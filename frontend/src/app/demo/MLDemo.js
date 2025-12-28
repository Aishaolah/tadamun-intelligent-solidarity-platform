'use client';

import { useState } from 'react';

export default function MLDemo() {
  const [formData, setFormData] = useState({
    application_name: 'Ahmed Mansour',
    application_age: 42,
    location: 'Bab El Oued, Algiers',
    description: 'I need medical assistance for chronic illness treatment',
    amount: 182392,
    currency: 'DZD',
    category: 'Medical'
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    });
  };

  const sampleData = [
    {
      name: 'Medical Case',
      data: {
        application_name: 'Fatima Zahra',
        application_age: 35,
        location: 'Casablanca',
        description: 'Emergency surgery needed for heart condition',
        amount: 250000,
        currency: 'MAD',
        category: 'Medical'
      }
    },
    {
      name: 'Education Support',
      data: {
        application_name: 'Youssef Ahmed',
        application_age: 22,
        location: 'Tunis',
        description: 'University tuition fees for engineering degree',
        amount: 120000,
        currency: 'TND',
        category: 'Education'
      }
    },
    {
      name: 'Business Grant',
      data: {
        application_name: 'Leila Mansouri',
        application_age: 28,
        location: 'Algiers',
        description: 'Startup capital for small handicraft business',
        amount: 50000,
        currency: 'DZD',
        category: 'Business'
      }
    }
  ];

  const loadSample = (sample) => {
    setFormData(sample.data);
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🧠 Tadamun AI Pipeline Demo
        </h1>
        <p className="text-gray-600 text-lg">
          Real-time demonstration of our 3 trained ML models for intelligent solidarity platform
        </p>
      </div>

      {/* Architecture Visualization */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Pipeline Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl">📝</div>
            <h3 className="font-semibold">Application Form</h3>
            <p className="text-sm text-gray-600">User submits request</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl">🤖</div>
            <h3 className="font-semibold">ML Service</h3>
            <p className="text-sm text-gray-600">3 trained models process data</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl">⚡</div>
            <h3 className="font-semibold">Real-time Analysis</h3>
            <p className="text-sm text-gray-600">Fraud detection & prediction</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl">📊</div>
            <h3 className="font-semibold">Results</h3>
            <p className="text-sm text-gray-600">Instant decision & insights</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Form</h2>
          
          {/* Sample Data Buttons */}
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Try sample applications:</p>
            <div className="flex flex-wrap gap-2">
              {sampleData.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => loadSample(sample)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
                >
                  {sample.name}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="application_name"
                value={formData.application_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="application_age"
                  value={formData.application_age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Medical">Medical</option>
                <option value="Education">Education</option>
                <option value="Business">Business</option>
                <option value="Emergency">Emergency</option>
                <option value="Housing">Housing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                  Processing with AI...
                </span>
              ) : (
                'Analyze with AI Models'
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Analysis Results</h2>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 font-semibold">Error: {error}</p>
            </div>
          )}

          {prediction ? (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                <h3 className="font-bold text-lg text-gray-800 mb-2">AI Prediction Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Prediction Score</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {prediction.score?.toLocaleString() || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="text-xl font-semibold text-green-700">
                      {prediction.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Model Results */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Model Predictions</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-purple-50 rounded-lg text-center">
                    <div className="text-lg">🔍</div>
                    <p className="text-sm font-semibold">Fraud Detection</p>
                    <p className="text-xs text-gray-600">Model 1</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="text-lg">🏷️</div>
                    <p className="text-sm font-semibold">Category</p>
                    <p className="text-xs text-gray-600">Model 2</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg text-center">
                    <div className="text-lg">⚡</div>
                    <p className="text-sm font-semibold">Urgency</p>
                    <p className="text-xs text-gray-600">Model 3</p>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  {showDetails ? 'Hide' : 'Show'} Technical Details
                  <svg className={`w-4 h-4 ml-1 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showDetails && (
                  <div className="mt-3 p-4 bg-gray-50 rounded-md">
                    <pre className="text-xs overflow-auto">
                      {JSON.stringify(prediction, null, 2)}
                    </pre>
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <div className="text-sm text-gray-500 text-right">
                Processed at: {new Date(prediction.processed_at).toLocaleTimeString()}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-4">🤖</div>
              <p className="text-lg">Submit an application to see AI predictions</p>
              <p className="text-sm mt-2">Our 3 trained models will analyze the request in real-time</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">About This AI Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">📊 Data Processing</h3>
            <p className="text-sm text-gray-600">Real-time processing of application data with feature extraction and normalization</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">🧠 Machine Learning</h3>
            <p className="text-sm text-gray-600">3 specialized models: Fraud detection, category classification, urgency assessment</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">⚡ Live Integration</h3>
            <p className="text-sm text-gray-600">FastAPI ML service with Next.js frontend - real-time predictions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
