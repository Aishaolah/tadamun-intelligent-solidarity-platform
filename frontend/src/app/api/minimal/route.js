export const dynamic = 'force-dynamic';

export async function GET() {
  const data = { 
    success: true, 
    message: 'Minimal API works!',
    timestamp: new Date().toISOString()
  };
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
