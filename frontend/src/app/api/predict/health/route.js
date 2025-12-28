export async function GET() {
  try {
    // Check if ML service is reachable
    const mlHealth = await fetch('http://localhost:8001/health', {
      cache: 'no-store'
    });
    
    const mlData = await mlHealth.json();
    
    return Response.json({
      frontend: "healthy",
      ml_service: {
        status: mlHealth.ok ? "healthy" : "unhealthy",
        response: mlData,
        url: "http://localhost:8001/health"
      },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return Response.json({
      frontend: "healthy",
      ml_service: {
        status: "unreachable",
        error: error.message,
        url: "http://localhost:8001/health"
      },
      timestamp: new Date().toISOString()
    }, { status: 503 });
  }
}
