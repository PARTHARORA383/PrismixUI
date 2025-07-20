
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , ResponsiveContainer, Tooltip } from "recharts"

export default function SimpleBarChart ({height} : {height :number | string}){
   
  const data = [
  { month: 'Jan', ProductA: 12000, ProductB: 9500 },
  { month: 'Feb', ProductA: 13500, ProductB: 10200 },
  { month: 'Mar', ProductA: 12800, ProductB: 11000 },
  { month: 'Apr', ProductA: 14500, ProductB: 9800 },
  { month: 'May', ProductA: 15000, ProductB: 12000 },
  { month: 'Jun', ProductA: 16000, ProductB: 12500 },
  { month: 'Jul', ProductA: 17000, ProductB: 13000 },
  { month: 'Aug', ProductA: 16500, ProductB: 12800 },
  { month: 'Sep', ProductA: 15500, ProductB: 11800 },
  { month: 'Oct', ProductA: 16200, ProductB: 12200 },
  { month: 'Nov', ProductA: 16800, ProductB: 12700 },
  { month: 'Dec', ProductA: 17500, ProductB: 13500 },
];

  const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
<div className="bg-neutral-700  text-white rounded px-2 py-1 text-sm m-0">
    <p className="m-0">{label}: {`A sold ${payload[0].value} `}</p>
    <p className="m-0">{label}: {`B sold ${payload[1].value} `}</p>
  </div>
    );
  }

  return null;
};



  return <div>
    <ResponsiveContainer width={"100%"} height={height}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray={"5 5"} stroke="#4C4B4B" strokeOpacity={0.6} vertical={false}/>
      <XAxis dataKey={"month"} axisLine = {false} tickLine = {false}/>
      <YAxis axisLine = {false} tickLine = {false} tickFormatter={(value)=>`${(value/1000).toFixed(1)}k`}/>
      <Bar fill="#AFAFFF" dataKey={"ProductA"} radius={[3 , 3 , 0 ,0]}/>
      <Bar fill="#5C5CFF" dataKey={"ProductB"} radius={[3 , 3 , 0 ,0]}/>
      <Tooltip content={CustomTooltip} cursor = {false}/>
    </BarChart>

    </ResponsiveContainer>

    </div>
}