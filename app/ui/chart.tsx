"use client";

import React from "react";
import {
  CartesianAxis,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { ItemDetails, ItemDetailsResponse } from "@/app/lib/models";
import { getPriceTimeSeries } from "@/app/lib/utils";
import { format } from "date-fns";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

type JsonDisplayProps = {
  data: object;
};

function LineChartTooltip(props: TooltipProps<ValueType, NameType>) {
  const { active, payload, label } = props;

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const date = new Date(label as number);
  console.log(payload, label, active, payload[0]);

  return (
    <div
      // style={{
      //   backgroundColor: "white",
      //   border: "1px solid #ccc",
      //   padding: "10px",
      //   borderRadius: "5px",
      // }}
      className="bg-white border border-gray-300 p-4 rounded shadow-lg min-w-52"
    >
      <div>
        <div className="flex justify-between">
          <p className="text-slate-900 font-medium">{`${format(date, "yyyy/MM/dd")}`}</p>
          <p className="text-slate-900">{`${format(new Date(label), "h aaaa")}`}</p>
        </div>

        <span className="text-slate-600">Price: </span>
        <span className="text-slate-900">{payload[0].value}</span>
      </div>
    </div>
  );
}

function Chart({ itemDetails }: { itemDetails: ItemDetails }) {
  const d = [
    { time: "10:00", price: 100 },
    { time: "10:01", price: 105 },
    { time: "10:02", price: 102 },
  ];

  const priceData = getPriceTimeSeries(itemDetails);
  // const salesData = mapPriceAndQuantityData(itemDetails.data);

  console.log("itemDetails", itemDetails, priceData);

  return (
    <div className="overflow-x-auto">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart height={300} data={priceData}>
          {/* scale={"time"} domain={['2025-06-13T09:10:42.324Z', '2025-06-13T13:10:42.324Z']} type='number' */}

          <CartesianGrid vertical={false} stroke="#64748b" strokeDasharray="3 3" />
          <XAxis
            stroke="#64748b"
            dataKey="time"
            scale={"time"}
            type={"number"}
            domain={["auto", "auto"]}
            tickCount={245}
            tickFormatter={(value) => format(new Date(value), "MM/dd h aaaa")}
          />
          <YAxis dataKey="price" stroke="#64748b" />
          <Tooltip
            isAnimationActive={false}
            // contentStyle={{
            //   borderRadius: "12px",
            //   //backgroundColor: 'rgba(255, 255, 255, 0.8)',
            //   border: "none",
            //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            // }}
            content={<LineChartTooltip />}
            // itemStyle={{
            //   color: "#333",
            // }}
            // formatter={(value, name, props) => [value, `Price`]}
          />
          <Line
            type="linear"
            dataKey="price"
            stroke="#A9F0D1"
            strokeWidth={1.5}
            dot={false}
            activeDot={{ stroke: "#A9F0D1", strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
