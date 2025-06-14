import { NextRequest, NextResponse } from "next/server";

const mockData = {
  data: {
    itemID: 2770,
    itemName: "Copper Ore",
    blog: "In the vast world of Azeroth, Copper Ore is a valuable resource that plays a crucial role in the gameplay of World of Warcraft. This humble ore may seem unassuming at first glance, but its importance cannot be understated. From crafting weapons and armor to powering various professions, Copper Ore is a versatile material that is highly sought after by players.\n\nOne of the primary uses of Copper Ore is in blacksmithing and engineering. Blacksmiths use Copper Ore to create a variety of weapons and armor, ranging from basic swords and shields to more advanced gear. Engineers, on the other hand, rely on Copper Ore to craft intricate gadgets and devices that can aid them in their adventures. Without Copper Ore, these professions would be unable to create the tools and equipment necessary for success in the game.\n\nIn addition to its role in crafting, Copper Ore is also used in various other professions such as jewelcrafting and alchemy. Jewelcrafters use Copper Ore to create intricate jewelry pieces that provide stat bonuses to players. Alchemists, on the other hand, use Copper Ore in the creation of potions and elixirs that can enhance a player's abilities in combat. The versatility of Copper Ore makes it a valuable commodity that is in high demand among players.\n\nFinding the best price for Copper Ore can be a daunting task, especially with the fluctuating market prices in World of Warcraft. This is where Saddlebag Exchange comes in handy. Saddlebag Exchange is a platform that allows players to compare prices for various items, including Copper Ore, across different realms and factions. By using Saddlebag Exchange, players can ensure that they are getting the best deal for their Copper Ore, maximizing their profits and efficiency in the game.\n\nIn terms of appearance, Copper Ore is a reddish-brown mineral that can be found in various locations throughout Azeroth. Miners can gather Copper Ore from mining nodes scattered across the world, or purchase it from vendors in major cities. The lore behind Copper Ore is tied to the rich history of Azeroth, where it is known for its abundance and versatility in crafting. Legends speak of ancient dwarven blacksmiths who used Copper Ore to forge legendary weapons that have stood the test of time.\n\nOverall, Copper Ore is a valuable resource that is essential for players in World of Warcraft. Its uses in crafting, professions, and gameplay make it a highly sought-after item that can greatly impact a player's success in the game. By utilizing platforms like Saddlebag Exchange, players can ensure that they are getting the best price for their Copper Ore, allowing them to maximize their resources and achieve their goals in the world of Azeroth.",
    item_type: "commodity",
    minPrice: 3.99,
    historicPrice: 4.37,
    salesPerDay: 120376,
    listingData: [
      { price: 3.99, quantity: 1009 },
      { price: 4, quantity: 15 },
      { price: 5, quantity: 1060 },
      { price: 5.35, quantity: 78 },
      { price: 5.4, quantity: 486 },
      { price: 5.8, quantity: 107 },
      { price: 6, quantity: 300 },
      { price: 6.49, quantity: 9 },
      { price: 6.5, quantity: 689 },
      { price: 7.71, quantity: 19515 },
      { price: 7.77, quantity: 7777 },
      { price: 8.88, quantity: 8888 },
      { price: 9.15, quantity: 5177 },
      { price: 9.16, quantity: 29 },
      { price: 15, quantity: 63 },
      { price: 16.76, quantity: 139 },
    ],
    quantity: 0,
    quantityTimeData: [
      102982, 102015, 102455, 102799, 102719, 109350, 113215, 113890, 116948, 117870, 116333, 116849, 116564, 117254,
      115014, 76188, 75665, 74623, 79426, 125131, 126416, 126863, 126642, 128087, 131651, 132274, 130440, 131636,
      132479, 132743, 130929, 133812, 133205, 136313, 136624, 136759, 136774, 138266, 138748, 138379, 137402, 115119,
      114247, 118573, 119167, 119003, 117826, 134315, 126814, 125484, 127426, 83729, 84860, 88081, 88335, 89274, 90160,
      85739, 85955, 86065, 85921, 87185, 88628, 91678, 91890, 94832, 103065, 66067, 108176, 110881, 120062, 122759,
      123267, 113620, 114150, 103191, 105465, 104398, 105419, 105903, 107617, 106691, 107782, 119672, 105173, 103331,
      103740, 101686, 101697, 101429, 101709, 92912, 104352, 105089, 105428, 83463, 83442, 83242, 82626, 86472, 79609,
      78720, 92754, 93645, 93593, 92930, 93106, 93884, 94509, 93620, 93957, 91279, 91796, 93006, 102535, 104833, 51736,
      91522, 92145, 88418, 134355, 130896, 122440, 83013, 80245, 81264, 80978, 80074, 133515, 142644, 141936, 142476,
      128570, 82496, 83289, 81412, 81362, 82286, 83404, 82517, 85361, 86707, 85118, 86345, 86412, 87874, 88448, 89472,
      90942, 69459, 69867, 70199, 70387, 59367, 59176, 59782, 53553, 55504, 53728, 54836, 77168, 71777, 87238, 87440,
      37746, 39546, 74995, 79715, 81873, 81143, 75425, 77967, 80436, 80837, 83362, 82547, 82777, 82217, 79614, 81210,
      81812, 82995, 84582, 79900, 81889, 82035, 83244, 84819, 77708, 78203, 80653, 78938, 79733, 82309, 85568, 86696,
      84998, 86120, 86275, 85596, 85909, 85441, 84687, 84898, 83886, 86781, 87533, 87974, 69542, 86639, 88140, 89860,
      89932, 87137, 46450, 65215, 68726, 72148, 74284, 75713, 83793, 62513, 65291, 65706, 66423, 66448, 66631, 64876,
      65551, 68066, 69539, 70236, 71313, 73499, 73592, 74948, 79253, 69519, 68955, 70242, 73254, 72305, 73702, 75583,
      73068, 74406, 75355, 75685, 75580, 76503, 76930, 76096, 77104, 77320, 79305, 77537, 79013, 57419, 57502, 58061,
      62755, 64915, 57330, 41255, 45412, 46962, 54842, 57213, 57796, 46377, 51301, 51917, 52190, 51732, 51933, 51813,
      92147, 91913, 92282, 85572, 95777, 95757, 96716, 97408, 98951, 90053, 91874, 87988, 88835, 91357, 92257, 93707,
      93842, 94670, 87435, 89277, 89302, 87548, 87682, 100535, 100432, 97151, 97829, 96990, 103271, 104355, 103461,
      103923, 104823, 105944, 84671, 74143, 74753, 76451, 78033, 80471, 79195, 79504, 79323, 79394, 79496, 76361, 77523,
      37708, 37056, 60113, 59478, 53317, 46246, 48065, 46822, 34868, 35017, 35568, 43675, 45341,
    ],
    priceTimeData: [
      4.37, 4.64, 4.66, 3.33, 4.32, 7.5, 6, 1, 4.68, 4.4, 3.98, 4.97, 4.97, 4.96, 5.16, 4.11, 4.88, 4.93, 4.85, 4.69,
      4.5, 4.74, 4.74, 2, 4.44, 4.4, 3.99, 4.92, 4.79, 4.79, 4.79, 4.79, 4.79, 4.78, 4.25, 4.25, 4.25, 4.66, 4.55, 4.25,
      4.51, 4.64, 4.5, 4, 4.69, 4.66, 4.5, 4.12, 4.91, 5, 5.15, 4.95, 4.75, 3, 4.34, 4.33, 4.25, 5.28, 5.28, 4.27, 5.28,
      5, 5.25, 4.44, 5.2, 4.5, 4.99, 5, 4.95, 4.6, 3.22, 2.5, 4.5, 4.22, 4.7, 4.64, 4.4, 4.74, 4.47, 4.45, 4.4, 4.37,
      4.25, 4.24, 4.27, 3.69, 4.15, 4, 3.33, 4.67, 3.33, 4.05, 4, 4.49, 4.2, 3.99, 3.99, 4.51, 4.66, 4.27, 1, 4.35,
      3.75, 4.5, 4.21, 4.11, 3.5, 4.68, 4.67, 4.67, 4.63, 4.67, 4.66, 2.99, 4.54, 3.5, 4.5, 2.66, 4.66, 4, 4.46, 4.4,
      4.33, 3, 4.4, 4.01, 4.46, 4.4, 4.18, 4.39, 4.46, 4.3, 4.47, 4.7, 4.48, 4.76, 4.76, 4.4, 4.75, 4.74, 4.4, 4.39,
      4.55, 4.49, 4.02, 4.3, 4.4, 3, 3.8, 4, 3.99, 3.5, 3.5, 4.34, 4.48, 4.3, 4.51, 4.25, 4.51, 4.28, 4.51, 4.15, 4.49,
      4.49, 4.39, 4.15, 4.21, 4.45, 4.8, 4.9, 7, 4.99, 2.72, 4.6, 4.3, 4.7, 4.69, 3.99, 4.98, 4.88, 4.77, 4.2, 4.01,
      4.7, 4, 4.44, 6.88, 4.55, 4.74, 5, 4.99, 4.39, 4.39, 4.3, 4.25, 4.03, 4.24, 3.8, 4.2, 4.11, 4.11, 3.99, 4.24,
      4.23, 4.23, 4.22, 4, 4.15, 3.89, 3.75, 4, 4.09, 4, 4.2, 4.11, 4.99, 4, 5, 4.97, 4.79, 2.76, 7.74, 4.49, 4.4, 3.77,
      4.11, 4, 7.71, 6.9, 4.88, 5.24, 5, 4.45, 3.22, 4.55, 4.03, 4, 5, 4.77, 4, 4.39, 3.33, 3.65, 3.75, 4.8, 5.25, 4, 4,
      5, 5, 4.55, 5, 2, 4.99, 4.19, 5.1, 3.99, 4.05, 4.95, 5, 4.9, 4.16, 4.1, 4.98, 4.71, 4.9, 3, 3.98, 4.68, 4.9, 4.62,
      4.6, 3.6, 4.55, 4, 4.75, 4.99, 4.94, 4.92, 4.5, 4.39, 4.84, 5.08, 4.94, 4.92, 5.15, 5, 5, 4.05, 3.8, 3.79, 3.75,
      3.67, 5.18, 4.9, 4.74, 4.74, 5.29, 5.25, 4.74, 4, 5.2, 5, 5.1, 3.95, 4.94, 4.95, 4.94, 4.49, 4.49, 4.9, 4.48,
      4.89, 3.99, 4.8, 3, 4.71, 4.71, 4.71, 4.7, 4.7, 4.89, 4.75, 4.5, 4.75, 4.75, 4.75, 4.74, 4.61, 2.49, 3.99, 4.99,
      4.25, 4.95, 5, 3.99,
    ],
    currentQuantity: 45341,
    avgQuantity: 88020,
    currentVsAvgQuantityPercent: 51.51,
    quantityState: "increasing",
    currentMarketValue: 480300,
    historicMarketValue: 526043,
    percentChange: -8.7,
    state: "stable",
    link: "https://undermine.exchange/#eu-kargath/82800-2770",
  },
};

const mockData2 = {
  data: {
    itemID: 35,
    itemName: "Bent Staff",
    blog: "In the vast world of Azeroth, players of World of Warcraft are constantly on the lookout for powerful weapons and gear to aid them in their adventures. One such item that has caught the attention of many players is the Bent Staff. This seemingly simple staff holds great significance in gameplay, offering unique benefits and uses that can greatly enhance a player's abilities.\n\nThe Bent Staff is a two-handed staff that is often sought after by spellcasters for its impressive stats and abilities. With its high intellect and spell power bonuses, this staff is a valuable asset for any mage or warlock looking to increase their magical prowess. Additionally, the staff's unique ability to increase spell critical strike rating makes it a coveted item for those looking to maximize their damage output in battles.\n\nOne of the key features of the Bent Staff is its versatility in gameplay. Whether you are a solo player taking on challenging quests or a member of a raid group facing powerful bosses, this staff can provide a significant boost to your spellcasting abilities. Its high stats and bonuses make it a valuable asset in both PvE and PvP scenarios, allowing players to excel in a variety of situations.\n\nWhen it comes to acquiring the Bent Staff, players often turn to the Saddlebag Exchange to find the best price. This online marketplace offers a convenient platform for players to buy and sell in-game items, including the Bent Staff. By comparing prices and negotiating with other players, you can ensure that you are getting the best deal possible for this valuable item.\n\nIn terms of appearance, the Bent Staff is a simple yet elegant weapon that exudes a sense of power and mystique. Its twisted wooden shaft and intricate carvings give it a unique and otherworldly look that sets it apart from other staves in the game. The staff's lore is shrouded in mystery, with tales of its creation by ancient sorcerers and its connection to powerful magical energies.\n\nOverall, the Bent Staff is a highly sought-after item in World of Warcraft for its impressive stats, unique abilities, and versatile gameplay benefits. Whether you are a seasoned player looking to enhance your spellcasting abilities or a newcomer seeking a powerful weapon to aid you on your adventures, this staff is sure to make a valuable addition to your arsenal. With the help of the Saddlebag Exchange, you can find the best price for this coveted item and embark on your journey to greatness in the world of Azeroth.",
    item_type: "legacy",
    minPrice: 104897.82,
    historicPrice: 49480.13,
    salesPerDay: 0.1,
    listingData: [{ price: 104897.82, quantity: 1 }],
    quantity: 1,
    lowestAuctionID: 849226994,
    quantityTimeData: [],
    priceTimeData: [],
    avgQuantity: -1,
    currentVsAvgQuantityPercent: 100,
    quantityState: "stable",
    currentQuantity: 1,
    currentMarketValue: 10489,
    historicMarketValue: 4948,
    percentChange: 112,
    state: "spiking",
    link: "https://undermine.exchange/#eu-kargath/82800-35",
  },
};
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const itemId = searchParams.get("itemId");

  if (!itemId) {
    return new Response(JSON.stringify({ error: "Missing itemId" }), {
      status: 400,
    });
  }

  try {
    const res = await fetch(`http://api.saddlebagexchange.com/api/wow/v2/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        homeRealmId: 604, //TODO: replace with actual realm ID
        region: "EU",
        itemID: parseInt(itemId),
      }),
    });
    // console.log('res', res);

    if (!res.ok) {
      return NextResponse.json(JSON.stringify({ error: "Error fetching data" }), { status: res.status });
    }

    const data = await res.json();
    console.log("res", data);
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
