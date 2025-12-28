export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('Health check called');
  return new Response(JSON.stringify({
    status: 'healthy',
    service: 'frontend-api',
    timestamp: new Date().toISOString(),
    message: 'API is working'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
