'use client';

import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: 'Ahmed Mansour',
    age: 42,
    location: 'Bab El Oued, Algiers',
    description: 'Need medical assistance for chronic illness treatment',
    amount: 182392,
    category: 'Medical'
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loadSample = (type) => {
    const samples = {
      medical: {
        name: 'Fatima Zahra',
        age: 35,
        location: 'Casablanca',
        description: 'Emergency heart surgery needed',
        amount: 250000,
        category: 'Medical'
      },
      education: {
        name: 'Youssef Ahmed',
        age: 22,
        location: 'Tunis',
        description: 'University engineering program fees',
        amount: 120000,
        category: 'Education'
      },
      business: {
        name: 'Leila Mansouri',
        age: 28,
        location: 'Algiers',
        description: 'Startup capital for handicraft business',
        amount: 50000,
        category: 'Business'
      }
    };
    setFormData(samples[type]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#EFEBE3]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">AI Demo</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Integration Demo
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience our machine learning pipeline with 3 trained models analyzing assistance requests in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info & Samples */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Samples
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Try these sample cases to see how our AI models work:
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => loadSample('medical')}
                  className="w-full text-left p-4 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">🏥</span>
                    <div>
                      <p className="font-medium text-gray-900">Medical Case</p>
                      <p className="text-sm text-gray-600">Chronic illness treatment</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => loadSample('education')}
                  className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">🎓</span>
                    <div>
                      <p className="font-medium text-gray-900">Education Support</p>
                      <p className="text-sm text-gray-600">University tuition fees</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => loadSample('business')}
                  className="w-full text-left p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg transition"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">💼</span>
                    <div>
                      <p className="font-medium text-gray-900">Business Grant</p>
                      <p className="text-sm text-gray-600">Startup capital</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* ML Models Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Active ML Models
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-red-600">🔍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fraud Detection</p>
                      <p className="text-xs text-gray-600">fraud_detector.pkl</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    Active
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600">🏷️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Category Model</p>
                      <p className="text-xs text-gray-600">category_predictor.pkl</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    Active
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600">⚡</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Urgency Model</p>
                      <p className="text-xs text-gray-600">urgency_predictor.pkl</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    Active
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Service Status:</span> Running on port 8001
                </p>
              </div>
            </div>
          </div>

          {/* Right Columns: Form and Results */}
          <div className="lg:col-span-2">
            {/* Form Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Application Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applicant Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount Requested (DZD)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="Medical">Medical</option>
                      <option value="Education">Education</option>
                      <option value="Business">Business</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Housing">Housing</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                </div>
              </form>
            </div>

            {/* Results Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                AI Analysis Results
              </h2>
              
              {result ? (
                <div className="space-y-6">
                  {result.error ? (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-red-600 mr-2">⚠️</span>
                        <div>
                          <p className="font-medium text-red-800">Error Processing Request</p>
                          <p className="text-sm text-red-600 mt-1">{result.error}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Prediction Summary */}
                      <div className="p-5 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg text-gray-900">AI Prediction</h3>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            ✅ Analysis Complete
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Prediction Score</p>
                            <p className="text-3xl font-bold text-blue-700">
                              {result.score ? Math.round(result.score).toLocaleString() : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Category</p>
                            <p className="text-2xl font-bold text-green-700">
                              {result.category}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Model Pipeline */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-4">ML Model Pipeline</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-2xl mb-2">🔍</div>
                            <p className="font-medium text-gray-900">Fraud Detection</p>
                            <p className="text-xs text-gray-600 mt-1">Model 1</p>
                          </div>
                          <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-2xl mb-2">🏷️</div>
                            <p className="font-medium text-gray-900">Category</p>
                            <p className="text-xs text-gray-600 mt-1">Model 2</p>
                          </div>
                          <div className="text-center p-4 border border-gray-200 rounded-lg">
                            <div className="text-2xl mb-2">⚡</div>
                            <p className="font-medium text-gray-900">Urgency</p>
                            <p className="text-xs text-gray-600 mt-1">Model 3</p>
                          </div>
                        </div>
                      </div>

                      {/* Technical Details */}
                      <div className="border-t pt-4">
                        <details className="group">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium flex items-center justify-between">
                            <span>View Technical Response</span>
                            <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                            <pre className="text-xs overflow-auto max-h-60">
                              {JSON.stringify(result, null, 2)}
                            </pre>
                          </div>
                        </details>
                      </div>

                      {/* Timestamp */}
                      <div className="text-sm text-gray-500 text-right">
                        Processed: {new Date().toLocaleTimeString()}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready for Analysis
                  </h3>
                  <p className="text-gray-600">
                    Submit an application to see real-time AI predictions
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            About This AI Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Real-time Processing</h3>
              <p className="text-sm text-gray-600">Applications are analyzed instantly by our 3 ML models with sub-second response times.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Trained Models</h3>
              <p className="text-sm text-gray-600">Each model was trained on historical data for specialized tasks: fraud detection, categorization, and urgency assessment.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Live Integration</h3>
              <p className="text-sm text-gray-600">Next.js frontend communicates with FastAPI ML service running locally on port 8001.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p className="font-medium">Tadamun AI Pipeline Demo</p>
            <p className="text-sm mt-1">Complete machine learning integration for academic presentation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
