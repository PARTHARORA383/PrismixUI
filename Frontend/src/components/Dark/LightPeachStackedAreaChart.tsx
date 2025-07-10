

import { AreaChart , Area , XAxis , YAxis , CartesianGrid  , ResponsiveContainer , Tooltip} from "recharts"
import type { CurveType } from "recharts/types/shape/Curve";

export default function LightPeachStackedAreaChart({height , areatype} :{height: number , areatype ? : CurveType}){

  const data = [
  { month: "Jan", productA: 30, productB: 30 },
  { month: "Feb", productA: 60, productB: 40 },
  { month: "Mar", productA: 90, productB: 30 },
  { month: "Apr", productA: 60, productB: 40 },
  { month: "May", productA: 25, productB: 35 },
  { month: "Jun", productA: 70, productB: 45 },
  { month: "Jul", productA: 50, productB: 55 },
];


  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-neutral-300 rounded-md px-3 py-2 shadow text-sm">
          <p className="font-medium text-neutral-800">{label}</p>
   

          <p className="text-orange-600">Product A sold: {payload[0].value}</p>
          <p className="text-orange-600">Product B sold: {payload[1].value}</p>
   
        </div>
      );
    }

    return null;
  };


  return<div className="h-full">
 
 <div className="max-w-full h-full">

 <ResponsiveContainer width={"100%"} height={height}>
  <AreaChart data={data} 
  margin={{
    left : 10, 
    right : 10,
    top:10,
    bottom:10
  }}>
  <CartesianGrid strokeDasharray={'0 0'} vertical = {false} strokeOpacity={0}/>
  <XAxis dataKey={"month"} padding={{left : 20, right : 20 }}/>
  <YAxis hide/>
   <defs>
  <linearGradient id="creamGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#FFD8B3 " stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#FFD8B3 " stopOpacity={0}/>
  </linearGradient>
  <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#FFBE80" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#FFBE80" stopOpacity={0}/>
  </linearGradient>
</defs>
<Tooltip content={CustomTooltip} cursor = {{strokeOpacity :0}}/>

  <Area type={areatype} dataKey= "productA" stackId= "1" fill="url(#creamGradient) "  stroke="#FFD8B3"/>

  <Area type={areatype} dataKey= "productB" stackId= "1" fill="url(#yellowGradient) " stroke="FFD8B3" strokeOpacity={0}/>
  </AreaChart>
 </ResponsiveContainer>

 </div>

  </div>
}