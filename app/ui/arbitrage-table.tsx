"use client";

import { ArbitrageDetails } from "@/app/lib/models";
import numberToGold from "@/app/lib/parsers";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const arbitrageColumns: GridColDef[] = [
  {
    field: "connectedRealmNames",
    headerName: "Realm Names",
    width: 300,
    valueFormatter: (params: string[]) => params.join(", "),
  },
  { field: "itemQuantity", headerName: "Item Quantity", width: 130 },
  { field: "minPrice", headerName: "Min Price", valueFormatter: (params: number) => numberToGold(params) },
  { field: "realmPopulationType", headerName: "Population Type", width: 150 },
  { field: "realmPopulationReal", headerName: "Realm Population", width: 150 },
  { field: "realmRanking", headerName: "Realm Ranking", width: 130 },
];

function ArbitrageTable({ tableData }: { tableData: ArbitrageDetails[] }) {
  // DataGrid requires id field
  const rows = tableData.map((row) => ({ ...row, id: row.connectedRealmID }));
  return (
    <div style={{ height: 600, width: "100%", overflowX: "auto" }}>
      <DataGrid rows={rows} columns={arbitrageColumns} />
    </div>
  );
}
export default ArbitrageTable;
