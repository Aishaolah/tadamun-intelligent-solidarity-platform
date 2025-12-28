export async function GET() {
  console.log('Test route called from INNER frontend');
  return Response.json({
    message: 'Test from INNER frontend (the real one!)',
    timestamp: new Date().toISOString(),
    status: 'working'
  });
}
