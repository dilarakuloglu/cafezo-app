
export async function GET() {
  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Europe/Istanbul");
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "API error" }), { status: 500 });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
  }
}
