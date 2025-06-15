import { QuantityAtPrice } from "@/app/lib/models";
import numberToGold from "@/app/lib/parsers";
import { format } from "date-fns";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  TooltipProps,
  Brush,
} from "recharts";

interface CustomBarChartTooltipProps extends TooltipProps<ValueType, NameType> {
  xLabel?: string;
  yLabel?: string;
  valueFormatter?: Function | null;
  description?: string;
}

function BarChartTooltip(props: CustomBarChartTooltipProps) {
  const { active, payload, label, xLabel, yLabel, description, valueFormatter } = props;

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const date = new Date(label as number);
  console.log(props);

  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-lg min-w-52">
      <div>
        <div>
          <span className="text-zinc-600 text-sm">{yLabel}: </span>
          <span className="text-zinc-900 font-semibold">{payload[0]?.payload?.quantity}</span>
        </div>
        <div>
          <span className="text-zinc-600  text-sm">{xLabel}: </span>
          <span className="text-zinc-900 font-semibold">{numberToGold(payload[0]?.payload?.price)}</span>
        </div>
      </div>
    </div>
  );
}

function PriceDistributionChart({ plotData }: { plotData: QuantityAtPrice[] }) {
  if (!plotData || plotData.length === 0) {
    return <div className="text-zinc-400 my-24">Current Listing data is not available</div>;
  }
  return (
    <div className=" h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={plotData}>
          <CartesianGrid vertical={false} stroke="#52525b" strokeDasharray="1 5" />
          <XAxis dataKey="price" stroke="#52525b" tickFormatter={(value) => numberToGold(value)} />
          <YAxis className="text-sm" />
          <Tooltip
            isAnimationActive={false}
            cursor={{ fill: "#3f3f46" }}
            content={(tooltipProps) => <BarChartTooltip {...tooltipProps} yLabel={"Quantity"} xLabel={"Price"} />}
          />{" "}
          <Bar dataKey="quantity" fill="#a5f3fc" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceDistributionChart;
