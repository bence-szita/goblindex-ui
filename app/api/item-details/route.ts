import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const itemId = searchParams.get("itemId");
  const region = searchParams.get("region");
  const realmId = searchParams.get("realmId");

  const requiredParams = { itemId, realmId, region };

  for (const [key, value] of Object.entries(requiredParams)) {
    if (!value) {
      return new Response(JSON.stringify({ error: `Missing ${key}` }), { status: 400 });
    }
  }

  try {
    const res = await fetch(`http://api.saddlebagexchange.com/api/wow/v2/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        homeRealmId: parseInt(realmId as string),
        region: region,
        itemID: parseInt(itemId as string),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Error fetching data" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
