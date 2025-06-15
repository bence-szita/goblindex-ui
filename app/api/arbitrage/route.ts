import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const itemId = searchParams.get("itemId");
  const region = searchParams.get("region");
  console.log("itemId", itemId, "region", region);

  const requiredParams = { itemId, region };

  for (const [key, value] of Object.entries(requiredParams)) {
    if (!value) {
      return new Response(JSON.stringify({ error: `Missing ${key}` }), { status: 400 });
    }
  }

  try {
    const res = await fetch(`http://api.saddlebagexchange.com/api/wow/exportx`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        populationWP: 3000,
        populationBlizz: 1,
        rankingWP: 90,
        minPrice: 1,
        maxQuantity: 1000,
        sortBy: "minPrice",
        connectedRealmIDs: {},
        region: region,
        itemID: parseInt(itemId as string),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Error fetching data" }, { status: res.status });
    }

    const data = await res.json();
    console.log("API response data:", data?.data?.historicPrice);
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
