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
import { ChartTypes, ItemDetails, TimeSeriesDataPoint } from "@/app/lib/models";
import numberToGold from "@/app/lib/parsers";

import { format } from "date-fns";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface CustomLineChartTooltipProps extends TooltipProps<ValueType, NameType> {
  yLabel?: string;
  valueFormatter?: Function | null;
  description?: string;
}

function LineChartTooltip(props: CustomLineChartTooltipProps) {
  const { active, payload, label, yLabel, description, valueFormatter } = props;

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const date = new Date(label as number);

  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-lg min-w-52">
      <div>
        <div className="flex justify-between">
          <p className="text-zinc-900 font-semibold">{`${format(date, "yyyy/MM/dd")}`}</p>
          <p className="text-zinc-900 font-semibold">{`${format(new Date(label), "h aaaa")}`}</p>
        </div>

        <span className="text-zinc-600  text-sm">{yLabel ?? "Data :"}: </span>
        <span className="text-zinc-900 font-semibold">
          {valueFormatter ? valueFormatter(payload[0].value) : payload[0].value}
        </span>
      </div>
    </div>
  );
}

function Chart({
  plotData,
  yLabel,
  chartType,
}: {
  plotData: TimeSeriesDataPoint[];
  xLabel?: string;
  yLabel?: string;
  chartType: ChartTypes;
}) {
  if (!plotData || plotData.length === 0) {
    return <div className="text-zinc-400 my-12">Historical {yLabel} data is not available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart height={300} data={plotData} margin={{ left: 15 }}>
          <CartesianGrid vertical={false} stroke="#52525b" strokeDasharray="1 5" />
          <XAxis
            stroke="#52525b"
            dataKey="time"
            scale={"time"}
            type={"number"}
            domain={["auto", "auto"]}
            tickCount={245}
            tickFormatter={(value) => format(new Date(value), "MM/dd h aaaa")}
          />
          <YAxis
            dataKey="data"
            stroke="#52525b"
            label={{ value: yLabel, angle: -90, offset: -10, position: "insideLeft" }}
          />
          <Tooltip
            isAnimationActive={false}
            content={(tooltipProps) => (
              <LineChartTooltip
                {...tooltipProps}
                yLabel={yLabel}
                valueFormatter={chartType === "price" ? numberToGold : null}
              />
            )}
          />
          <Line
            type="linear"
            dataKey="data"
            stroke="#a5f3fc"
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
