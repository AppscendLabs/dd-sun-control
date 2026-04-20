import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json({ error: "Service unavailable" }, { status: 500 });
    }

    return NextResponse.json({
      rating: data.result?.rating ?? null,
      total: data.result?.user_ratings_total ?? null,
      reviews: data.result?.reviews ?? [],
    });
  } catch (err) {
    console.error("Google Places API error:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
