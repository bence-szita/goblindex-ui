import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("getting trending items");

  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region");
  const realmId = searchParams.get("realmId");

  const requiredParams = { realmId, region };

  for (const [key, value] of Object.entries(requiredParams)) {
    if (!value) {
      return new Response(JSON.stringify({ error: `Missing ${key}` }), { status: 400 });
    }
  }

  try {
    const res = await fetch(`http://api.saddlebagexchange.com/api/wow/itemstats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        homeRealmId: parseInt(realmId as string),
        region: region,
        commodity: true,
        desired_avg_price: 1000,
        desired_sales_per_day: 5,
        itemQuality: -1,
        required_level: -1,
        item_class: -1,
        item_subclass: -1,
        ilvl: -1,
        expansion_number: -1,
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
