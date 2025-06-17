import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface PriceChangeWidgetProps {
  value: number;
}

function PriceChangeWidget({ value }: PriceChangeWidgetProps) {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const color = isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-zinc-300";

  return (
    !!value && (
      <div className={`flex items-center gap-1 ${color}`} style={{ minWidth: "60px", justifyContent: "center" }}>
        {isPositive && <ArrowDropUpIcon fontSize="small" className="-mr-1" />}
        {isNegative && <ArrowDropDownIcon fontSize="small" className="-mr-1" />}
        <span className="font-semibold">{value} %</span>
      </div>
    )
  );
}

export default PriceChangeWidget;
