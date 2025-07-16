import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";




type ChartDataItem = {
  year: number;
  value: number;
  label: string;
};


export default function LightBrownAreaChartComponent({
  height, areatype
}: {
  height: number , areatype : CurveType
}) {
  const data = [
    { year: 2019, value: 120, label: "Initial Launch" },
    { year: 2020, value: 300, label: "Market Entry" },
    { year: 2021, value: 140, label: "User Growth" },
    { year: 2022, value: 400, label: "Product Expansion" },
    { year: 2023, value: 100, label: "Revenue Boost" },
    { year: 2024, value: 450, label: "Scaling Up" },
    { year: 2025, value: 600, label: "Market Leadership" },
  ];

  const CustomTooltip = ({
    active,
    payload
  }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload as ChartDataItem
      return (
        <div
          style={{
            background: "#F5F5DC", 
            border: "1px solid #D2B48C",
            padding: "10px",
            borderRadius: "5px",
            color: "#5C4033",
            fontSize: "14px",
          }}
        >
          <p>
            <strong>{item.year}</strong>
          </p>
          <p>{item.label}</p>
          <p>Value: {item.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="0 0"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="year" padding={{ left: 10, right: 10 }} />
          <YAxis hide />

          <defs>
            <linearGradient id="browngradient" x1="0" y1="0.4" x2="0" y2="1">
              <stop offset="4%" stopColor="#D3B58B" />
              <stop offset="96%" stopColor="white" />
            </linearGradient>
          </defs>

      
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "none", strokeWidth: 2 }} />

          <Area
            dataKey="value"
            type={areatype}
            stroke="#805f31"
            fill="url(#browngradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
