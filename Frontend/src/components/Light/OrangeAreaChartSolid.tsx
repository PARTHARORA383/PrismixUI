

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import type { CurveType } from 'recharts/types/shape/Curve';

interface props {
  width?: number | string;
  height?: number,
  areatype?: CurveType
}
export default function OrangeAreaChartSolid({ width, height, areatype }: props) {



  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-neutral-300 rounded-md px-3 py-2 shadow text-sm">
          <p className="font-medium text-neutral-800">{label}</p>
          <p className="text-orange-600">Value: {payload[0].value}</p>
        </div>
      );
    }

    return null;
  };


  const data = [
    { label: "Jan", value: 20 },
    { label: "Feb", value: 45 },
    { label: "Mar", value: 35 },
    { label: "Apr", value: 60 },
    { label: "May", value: 25 },
    { label: "Jun", value: 70 },
    { label: "Jul", value: 50 },
    // { label: "Aug", value: 55 },
    // { label: "Sep", value: 45 },
    // { label: "Oct", value: 60 },
    // { label: "Nov", value: 50 },
    // { label: "Dec", value: 75 },
  ];


  return <div className="h-full">
    <div
      className=" relative max-w-full h-full flex items-center overflow-hidden"
      style={{
  
      
      }}

    >
      <div className=" absolute top-0 left-0  w-full h-10 z-20 border-neutral-100 flex bg-neutral-100 text-neutral-900 text-lg px-4 mt-2">
        Area Chart - Basis
      </div>



      <div className="pl-2 pr-2 w-full" >

        <ResponsiveContainer minWidth={300} width={"100%"} height={height}>
          <AreaChart data={data}

            margin={{
              top: 10,
              left: 10,
              right: 10,
              bottom: 10
            }
            }>
            <CartesianGrid  vertical = {false} strokeDasharray={"0 0"} strokeOpacity={0.5} />
            <XAxis dataKey="label" padding={{ left: 15, right: 15 }} />
            <YAxis hide />


       

            <defs>
              <linearGradient id="colorsolid" x1="0" y1="0.4" x2="0" y2="1">
                <stop offset="4%" stopColor="#f88133" stopOpacity={1} />
                <stop offset="96%" stopColor="white" stopOpacity={1} />
              </linearGradient>
            </defs>



            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "none", strokeWidth: 2 }} />

            <Area type={areatype} dataKey="value" fill="url(#colorsolid)" stroke="#FF7A33" strokeWidth={1.3} />

          </AreaChart>

        </ResponsiveContainer>
        <div className=" absolute bottom-0 left-0 h-20  w-full  z-20  flex bg-neutral-100  ">

          <div className="grid grid-cols-3 w-full mb-5 mt-5 ml-4 mr-4 border-t-2 border-neutral-300">{
            data.slice(-1).map((item, index) => (
              <div className="flex flex-col justify-center items-start  rounded-lg ">
                <div className="text-neutral-900 font-semibold mt-2"> Sales Last Month</div>
                <div className="text-neutral-950">Products: {item.value}</div>
              </div>
            ))

          }</div>

        </div>



      </div>

    </div>
  </div>
}

