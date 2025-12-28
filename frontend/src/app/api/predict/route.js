export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(JSON.stringify({
    endpoint: '/api/predict',
    description: 'ML Prediction API',
    methods: ['GET', 'POST'],
    ml_service: 'http://localhost:8001',
    example_request: {
      amount: 1000,
      category: "Medical",
      description: "Medical assistance request",
      location: "Algiers",
      application_age: 42
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  try {
    console.log('Predict endpoint called');
    
    const applicationData = await request.json();
    console.log('Received data:', applicationData);
    
    console.log('Calling ML service at http://localhost:8001/predict');
    const mlResponse = await fetch('http://localhost:8001/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData),
    });
    
    if (!mlResponse.ok) {
      throw new Error(`ML service error: ${mlResponse.status}`);
    }
    
    const predictionResult = await mlResponse.json();
    console.log('ML service response:', predictionResult);
    
    return new Response(JSON.stringify({
      ...predictionResult,
      request_id: Date.now(),
      processed_at: new Date().toISOString(),
      ml_service_status: 'success'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error in predict endpoint:', error);
    return new Response(JSON.stringify({
      error: 'Prediction failed',
      details: error.message,
      ml_service_status: 'error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
