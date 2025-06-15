"use client";

import { ArbitrageDetails } from "@/app/lib/models";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Link from "next/link";

const arbitrageColumns: GridColDef[] = [
  /*  { field: "connectedRealmID", headerName: "Connected Realm ID", width: 150 }, */
  {
    field: "connectedRealmNames",
    headerName: "Realm Names",
    width: 300,
    valueFormatter: (params: string[]) => {
      return params.join(", ");
    },
  },
  { field: "itemQuantity", headerName: "Item Quantity", width: 130 },
  { field: "minPrice", headerName: "Min Price" },
  { field: "realmPopulationType", headerName: "Population Type", width: 150 },
  { field: "realmPopulationReal", headerName: "Realm Population", width: 150 },
  { field: "realmRanking", headerName: "Realm Ranking", width: 130 },
];

function ArbitrageTable({ tableData }: { tableData: ArbitrageDetails[] }) {
  // DataGrid requires id field
  const rows = tableData.map((row) => ({ ...row, id: row.connectedRealmID }));
  return (
    <div style={{ height: 600 }}>
      <DataGrid rows={rows} columns={arbitrageColumns} />
    </div>
  );
}
export default ArbitrageTable;
