// Very simple test route
export async function GET(request) {
  console.log('Simple route GET called');
  return new Response(JSON.stringify({
    success: true,
    message: 'Simple route works',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}
