import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export default function NeutralBarChart({height} : {height : number}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    { month: 'Jan', users: 300 },
    { month: 'Feb', users: 750 },
    { month: 'Mar', users: 550 },
    { month: 'Apr', users: 900 },
    { month: 'May', users: 700 },
    { month: 'Jun', users: 900 },
  ];


    const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-700 px-2 py-1 rounded">
          <p className="text-neutral-200 text-sm">{`${payload[0].value} users`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, left: 10, right: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#262626" strokeOpacity={0.4}
            />
          <XAxis  axisLine = {false} dataKey="month" tickLine={false} />
          <YAxis axisLine={false} domain={[0, 'dataMax + 100']} tickLine={false}  />
          <Tooltip content={CustomTooltip}   cursor={{ fill: 'transparent' }}/>

          <Bar
            dataKey="users"
            radius={[10, 10, 0, 0]}
            shape={(props:any) => {
              const { x, y, width, height,  index } = props;
              const isHover = hoveredIndex === index;
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={isHover ? "#3b82f6" : "#262626"} // blue on hover
                  rx={10}
                  ry={10}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            }}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
