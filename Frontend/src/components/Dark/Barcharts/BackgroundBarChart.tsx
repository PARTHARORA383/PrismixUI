
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , ResponsiveContainer, Tooltip } from "recharts"

export default function BackgroundBarChart ({height} : {height :number | string}){
   
  const data = [
  { month: 'Jan', ProductA: 12000, ProductB: 9500 },
  { month: 'Feb', ProductA: 9500, ProductB: 16200 },
  { month: 'Mar', ProductA: 14800, ProductB: 11000 },
  { month: 'Apr', ProductA: 10500, ProductB: 18700 },
  { month: 'May', ProductA: 8000, ProductB: 12000 },
  { month: 'Jun', ProductA: 18000, ProductB: 12500 },
  { month: 'Jul', ProductA: 13000, ProductB: 11000 },
  
];


  const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
<div className="bg-neutral-700  text-white rounded px-2 py-1 text-sm m-0">
    <p className="m-0">{label}: {`${payload[0].value} users`}</p>
  </div>
    );
  }

  return null;
};



  return <div>
    <ResponsiveContainer width={"100%"} height={height}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray={"0 0"} stroke="#4C4B4B" strokeOpacity={0.6} vertical={false}/>
      <XAxis dataKey={"month"} axisLine = {false} tickLine = {false}/>
      <YAxis axisLine = {false} tickLine = {false} tickFormatter={(value)=>`${(value/1000).toFixed(0)}k`}/>
      <Bar fill="#FFAFAF" dataKey={"ProductA"} stackId="a" radius={[0 , 0 , 0 ,0]} background = {{fill :  "#262626"}}/>
      <Tooltip content={CustomTooltip} cursor = {false}/>
    </BarChart>

    </ResponsiveContainer>

    </div>
}