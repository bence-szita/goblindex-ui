import "@testing-library/jest-dom";
import { render, screen, waitFor, within } from "@testing-library/react";
import ItemDetails from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const MockItemDetail = {
  data: {
    itemID: 213613,
    itemName: "Leyline Residue",
    blog: "In the vast world of Azeroth, there are many valuable items that players can acquire to enhance their gameplay experience. One such item is the Leyline Residue, a mysterious substance that holds great power and significance in the world of Warcraft. \n\nLeyline Residue is a valuable resource that can be obtained by disenchanting magical items or by completing certain quests and activities in the game. This item is highly sought after by players as it can be used in various crafting recipes to create powerful enchantments and enhancements for their gear. \n\nOne of the main uses of Leyline Residue is in the creation of powerful enchantments for weapons and armor. By combining Leyline Residue with other materials, players can create enchantments that provide bonuses to their stats, such as increased damage, critical strike chance, or armor penetration. These enchantments can give players a significant advantage in combat, making them more effective in both PvE and PvP content. \n\nAdditionally, Leyline Residue can also be used to create powerful potions and elixirs that provide temporary buffs to a player's abilities. These potions can be invaluable in challenging encounters, providing players with a much-needed boost to their stats and survivability. \n\nOne of the best ways to find Leyline Residue at the best price is through the Saddlebag Exchange, a marketplace where players can buy and sell items with each other. By using the Saddlebag Exchange, players can easily find sellers who are offering Leyline Residue at competitive prices, allowing them to acquire this valuable resource without breaking the bank. \n\nIn terms of appearance, Leyline Residue is a shimmering, iridescent substance that glows with a faint magical aura. It is said to be a byproduct of the ley lines that crisscross the world of Azeroth, channels of magical energy that flow beneath the surface of the land. The residue is highly coveted by mages and enchanters for its potent magical properties, which can be harnessed to create powerful enchantments and potions. \n\nIn terms of lore, Leyline Residue is believed to be a remnant of the ancient Titan's influence on Azeroth, a manifestation of their immense power and mastery over the arcane. It is said that ley lines are the veins of the world, carrying the lifeblood of magic through the land and connecting the various magical nexuses that dot the landscape. Leyline Residue is a tangible manifestation of this magical energy, a potent source of power that can be harnessed by those skilled enough to wield it. \n\nIn conclusion, Leyline Residue is a valuable and versatile resource in the world of Warcraft, offering players the opportunity to enhance their gear and abilities with powerful enchantments and potions. By utilizing the Saddlebag Exchange, players can easily find Leyline Residue at competitive prices, allowing them to acquire this valuable resource and gain an edge in their adventures across Azeroth.",
    item_type: "commodity",
    minPrice: 89.82,
    historicPrice: 70.89,
    salesPerDay: 587462,
    listingData: [
      {
        price: 89.82,
        quantity: 551,
      },
      {
        price: 89.84,
        quantity: 36,
      },
      {
        price: 89.85,
        quantity: 9186,
      },
      {
        price: 89.86,
        quantity: 866,
      },
      {
        price: 89.89,
        quantity: 107,
      },
      {
        price: 89.9,
        quantity: 57,
      },
      {
        price: 89.91,
        quantity: 38,
      },
      {
        price: 89.99,
        quantity: 7,
      },
      {
        price: 90,
        quantity: 105,
      },
      {
        price: 90.33,
        quantity: 15,
      },
      {
        price: 90.7,
        quantity: 146,
      },
      {
        price: 90.71,
        quantity: 1289,
      },
      {
        price: 90.72,
        quantity: 522,
      },
      {
        price: 90.73,
        quantity: 175,
      },
      {
        price: 90.74,
        quantity: 1815,
      },
      {
        price: 90.75,
        quantity: 4060,
      },
      {
        price: 90.78,
        quantity: 2176,
      },
      {
        price: 90.79,
        quantity: 929,
      },
      {
        price: 90.8,
        quantity: 1248,
      },
      {
        price: 90.82,
        quantity: 2726,
      },
      {
        price: 90.83,
        quantity: 1371,
      },
      {
        price: 90.85,
        quantity: 417,
      },
      {
        price: 90.95,
        quantity: 211,
      },
      {
        price: 90.96,
        quantity: 70,
      },
      {
        price: 90.97,
        quantity: 66,
      },
      {
        price: 90.99,
        quantity: 509,
      },
      {
        price: 91,
        quantity: 1056,
      },
      {
        price: 91.9,
        quantity: 32,
      },
      {
        price: 92,
        quantity: 11,
      },
      {
        price: 92.78,
        quantity: 258,
      },
      {
        price: 92.79,
        quantity: 241,
      },
      {
        price: 93.26,
        quantity: 1,
      },
      {
        price: 93.27,
        quantity: 74,
      },
      {
        price: 93.28,
        quantity: 8,
      },
      {
        price: 93.29,
        quantity: 3,
      },
      {
        price: 93.3,
        quantity: 3,
      },
      {
        price: 93.31,
        quantity: 2,
      },
      {
        price: 93.33,
        quantity: 51,
      },
      {
        price: 93.4,
        quantity: 129,
      },
      {
        price: 93.45,
        quantity: 41,
      },
      {
        price: 93.48,
        quantity: 139,
      },
      {
        price: 93.49,
        quantity: 77,
      },
      {
        price: 93.5,
        quantity: 37,
      },
      {
        price: 94.08,
        quantity: 2,
      },
      {
        price: 94.43,
        quantity: 6,
      },
      {
        price: 94.44,
        quantity: 28,
      },
      {
        price: 94.45,
        quantity: 3,
      },
      {
        price: 94.49,
        quantity: 1,
      },
      {
        price: 94.5,
        quantity: 32,
      },
      {
        price: 94.69,
        quantity: 9,
      },
      {
        price: 94.7,
        quantity: 19,
      },
      {
        price: 94.97,
        quantity: 3,
      },
      {
        price: 94.98,
        quantity: 73,
      },
      {
        price: 94.99,
        quantity: 2,
      },
      {
        price: 95,
        quantity: 1889,
      },
      {
        price: 95.99,
        quantity: 43,
      },
      {
        price: 96,
        quantity: 13,
      },
      {
        price: 96.25,
        quantity: 83,
      },
      {
        price: 97.52,
        quantity: 20,
      },
      {
        price: 97.53,
        quantity: 19,
      },
      {
        price: 97.54,
        quantity: 83,
      },
      {
        price: 97.55,
        quantity: 52,
      },
      {
        price: 98.78,
        quantity: 7219,
      },
      {
        price: 98.8,
        quantity: 99,
      },
      {
        price: 98.87,
        quantity: 8,
      },
      {
        price: 98.9,
        quantity: 4231,
      },
      {
        price: 98.95,
        quantity: 24,
      },
      {
        price: 99.16,
        quantity: 6,
      },
      {
        price: 99.65,
        quantity: 50,
      },
      {
        price: 99.94,
        quantity: 50,
      },
      {
        price: 100,
        quantity: 191,
      },
      {
        price: 100.12,
        quantity: 9,
      },
      {
        price: 100.4,
        quantity: 478,
      },
      {
        price: 100.74,
        quantity: 5,
      },
      {
        price: 100.9,
        quantity: 6,
      },
      {
        price: 105.91,
        quantity: 5,
      },
      {
        price: 110.04,
        quantity: 19,
      },
      {
        price: 114.54,
        quantity: 52,
      },
      {
        price: 120.63,
        quantity: 5,
      },
      {
        price: 120.93,
        quantity: 9,
      },
      {
        price: 122,
        quantity: 200,
      },
      {
        price: 123,
        quantity: 63,
      },
      {
        price: 124,
        quantity: 111,
      },
      {
        price: 150.78,
        quantity: 54,
      },
      {
        price: 150.99,
        quantity: 8,
      },
      {
        price: 200.34,
        quantity: 17,
      },
    ],
    quantity: 0,
    quantityTimeData: [
      87433, 84869, 79596, 60564, 59033, 39711, 66640, 36068, 37999, 18165, 29870, 52423, 86007, 80892, 94969, 102506,
      102254, 105986, 108776, 105005, 106521, 102717, 70903, 51960, 53484, 48590, 50234, 56339, 64329, 67884, 69163,
      67681, 72466, 66257, 59722, 18004, 18776, 19334, 15991, 46150, 49384, 41870, 44703, 46387, 52149, 44121, 10701,
      19808, 40108, 51176, 57153, 54971, 62865, 45001, 48603, 40948, 40477, 42724, 36454, 42060, 34906, 44091, 44989,
      47738, 37797, 37987, 35927, 25378, 28074, 16089, 27376, 35734, 47547, 49830, 67273, 71532, 73656, 68165, 71579,
      75091, 98159, 99434, 88178, 78670, 76808, 64436, 63754, 85824, 90342, 79962, 68962, 43574, 36858, 57311, 67968,
      63586, 48337, 55185, 62152, 72083, 71309, 71049, 69871, 66218, 53635, 42939, 46706, 52608, 41560, 48275, 51199,
      52267, 58580, 61556, 62306, 45710, 50997, 52632, 55052, 54810, 50147, 49649, 53334, 43574, 24294, 18465, 25133,
      36849, 31105, 44767, 58395, 45711, 59433, 64295, 62203, 64016, 68386, 79043, 73226, 30171, 30545, 24319, 20351,
      37602, 50350, 53598, 21605, 45596, 52527, 57430, 65672, 57743, 66403, 58320, 50833, 51744, 49890, 48833, 51385,
      50731, 53677, 16377, 25327, 38385, 46266, 63834, 75871, 83718, 115798, 110440, 104156, 115108, 109989, 109597,
      91909, 63244, 69333, 105197, 118328, 89708, 87587, 87968, 67583, 56911, 61276, 63752, 66325, 51990, 55103, 71191,
      50159, 63127, 66705, 72304, 87908, 88629, 91577, 91556, 76997, 77795, 49185, 46009, 44782, 39161, 38368, 30188,
      32709, 34701, 29011, 27839, 26410, 33330, 9968, 22599, 26015, 128617, 138809, 113094, 118429, 121554, 109322,
      114582, 119782, 127725, 125976, 125912, 130784, 71498, 45827, 51970, 72437, 91665, 91684, 74450, 66864, 78394,
      80256, 77045, 84294, 104043, 102666, 53056, 69082, 74319, 61172, 63568, 63938, 71084, 71437, 76394, 83946, 99634,
      116629, 113541, 106373, 89342, 47191, 44836, 41420, 59600, 72931, 59623, 65105, 62578, 46387, 44257, 54087, 54792,
      47809, 47287, 39753, 28906, 31626, 41430, 48159, 32233, 26239, 28639, 68301, 70147, 38175, 31830, 41677, 34748,
      25882, 23776, 24465, 36582, 25743, 35553, 25470, 30865, 21508, 46286, 62083, 40332, 57634, 49280, 62280, 73932,
      74425, 63640, 63773, 67006, 65986, 26381, 26318, 16485, 31072, 59388, 62329, 59936, 73758, 79439, 77399, 81193,
      91849, 97013, 90789, 97093, 96854, 76084, 83565, 77178, 74529, 76864, 78920, 71553, 64760, 61237, 58322, 65705,
      85102, 42480, 42868, 46160,
    ],
    priceTimeData: [
      84.43, 86.48, 86.01, 86.93, 84.91, 88.11, 89.88, 90, 91.63, 90.71, 85.73, 98.43, 78.99, 89.73, 87.47, 82.09, 87.1,
      85.33, 84.97, 86, 86.91, 86.98, 85.79, 89.65, 88.22, 88.88, 87.87, 87.3, 87.27, 87.12, 86, 84.22, 87, 85.98, 86,
      86.74, 85.5, 82.79, 86.45, 84.56, 84.51, 84.5, 83, 78.2, 81.16, 84.04, 99.5, 97.54, 86, 87.12, 85.65, 85.65,
      85.18, 87.9, 85.84, 85.97, 90.49, 90.43, 90, 85.1, 90.3, 88.99, 84.45, 82.16, 92, 96.44, 97.45, 99.48, 98, 99.49,
      99.48, 128.64, 115, 115, 93.86, 94.99, 110, 109.94, 100, 107.15, 107, 107.71, 108.02, 106.92, 105, 100.5, 102,
      99.88, 95.7, 99.83, 101.48, 105, 117.47, 115.98, 116.17, 115.9, 115.37, 114.8, 112.95, 107.9, 107.99, 105, 109,
      107, 108.54, 104.48, 106.96, 103.89, 109.78, 99.99, 105.27, 104.99, 104.5, 102.94, 101.9, 113.81, 110.97, 110.98,
      108.98, 108, 108.35, 104.98, 108.9, 103.22, 107.99, 109.9, 110.36, 107.76, 109.8, 105.98, 102.97, 105.94, 107.77,
      87.75, 103.88, 104.01, 100.89, 90, 100.88, 108.02, 101.99, 107.9, 107.8, 100.45, 106, 98.34, 107.71, 103.82,
      103.79, 101.8, 99, 99.96, 87.67, 96.35, 96.99, 92.85, 94.03, 95.99, 92.88, 91.1, 88.48, 90.17, 98, 97.44, 98.44,
      96.8, 93.25, 89.98, 91, 86.93, 80, 85.29, 88.44, 86.91, 83, 83.38, 89.1, 86.99, 83, 84.44, 80.88, 81, 86.75,
      86.99, 85.9, 79.23, 85, 83.54, 87.1, 78.16, 88.98, 88.6, 85.87, 83.65, 82.15, 80.45, 80, 80, 80.08, 80.06, 80.5,
      80.98, 77.9, 83.25, 81, 84.98, 84.87, 84.74, 87.87, 88.75, 89, 88.16, 99, 87.74, 103.3, 99, 92.84, 90, 92.05, 86,
      88.99, 85, 88.96, 85.36, 89.98, 89, 86.43, 86.98, 92.88, 90.09, 84.15, 87.93, 89.05, 89.99, 90.99, 90.97, 89.97,
      89.04, 89.89, 86.14, 89.67, 98.5, 96.95, 98.08, 94, 94.97, 96.7, 93.79, 93.44, 89.97, 85.31, 84.55, 88.11, 75.42,
      88, 88.16, 85.47, 93.15, 93.19, 90.46, 87.99, 90.99, 86.99, 87.4, 83.6, 90.87, 89.98, 85.14, 91.75, 90, 91.98,
      94.88, 93.96, 92.5, 91.08, 89, 91.88, 91.7, 90.53, 91, 87.08, 90.97, 90, 91.09, 91.22, 90.73, 92.24, 87.01, 89.82,
      79.69, 84.97, 89.19, 88.2, 87.1, 86.89, 90.33, 87.98, 87, 88, 79.98, 79.06, 80.37, 84.05, 84.9, 84.89, 90, 82,
      98.8, 94.99, 90.2, 90.28, 92.78, 83.7, 89.14, 88.13, 89.35, 89, 87.48, 88.19, 88.16, 85.91, 82.22, 88, 86.5, 88,
      80.07, 82, 84, 88.95, 84.13, 87.97, 88.89, 88.49, 88.78, 90.13, 89.82,
    ],
    currentQuantity: 46160,
    avgQuantity: 60980,
    currentVsAvgQuantityPercent: 75.7,
    quantityState: "stable",
    currentMarketValue: 52765836,
    historicMarketValue: 41645181,
    percentChange: 26.7,
    state: "increasing",
    link: "https://undermine.exchange/#eu-aegwynn/213613",
  },
};

// Setup mock server with MSW
const server = setupServer(
  http.get("/api/item-details", () => {
    return HttpResponse.json(MockItemDetail);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useParams: () => ({ itemid: "123" }),
}));

describe("ItemDetails", () => {
  it("should display loaded data", async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ItemDetails />
      </QueryClientProvider>
    );

    const minimumPriceCard = (await screen?.findByText("Minimum Price")).closest("div");
    expect(within(minimumPriceCard!).getByText("89g 82s")).toBeInTheDocument();
  });
});
