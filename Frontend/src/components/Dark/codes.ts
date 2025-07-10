
const codes = {
  MidnightPurpleChart: `
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import type { CurveType } from 'recharts/types/shape/Curve';

interface props {
width : number,
height : number ,
areatype : CurveType 
}

export default function MidnigntPurpleAreaChartComponent({width , height , areatype} :props) {

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

  return <div>

    <ResponsiveContainer width={width} height={height}>
      <AreaChart width={width}
        height={height}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="0" stroke="#333" vertical={false} strokeOpacity={0.5} horizontalPoints={[100, 200, 300]} />
        <XAxis dataKey= {"label"} />
        <YAxis />
        <Tooltip
          formatter={(value) => \`\${value} users\`}
          labelFormatter={(label) => \`Date: \${label}\`} 
          cursor={{ stroke: "none", strokeWidth: 2 }}
          contentStyle={{ backgroundColor: "#262626", border: "1px solid #444", fontSize : "15px", borderRadius: "12px", color: "#f9fafb" , padding: "2px 12px" }}
          itemStyle={{ color: "#a3a3a3" }}
          labelStyle={{ color: "#f5f5f5", fontWeight: "bold" }}
          separator=" • "
          isAnimationActive={true}
          animationDuration={200}
          animationEasing="ease-in-out"
        />

        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type={areatype} dataKey="value" stroke="#8884d8" fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>

  </div>
}`
, 
LightOrangeArea : 
  `
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
  import type { CurveType } from 'recharts/types/shape/Curve';
  
  interface props {
    width?: number | string;
    height?: number,
    areatype?: CurveType
  }
  export default function OrangeAreaChartBgGradient({ width, height, areatype }: props) {
  
  
  
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
     background: \`
  linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
\`,
                ,
          backgroundSize: '40px 40px'
        }}
  
      >
        <div className=" absolute top-0 left-0  w-full h-10 z-20 border-neutral-100 flex bg-neutral-100 text-neutral-900 text-lg px-4">
          Area Chart - Monotone
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
              <CartesianGrid stroke="0 0" />
              <XAxis dataKey="label" padding={{ left: 15, right: 15 }} />
              <YAxis hide />
  
  
              <defs>
                <linearGradient id="colorgd" x1="0" y1="0.4" x2="0" y2="1">
                  <stop offset="8%" stopColor="#f88133" stopOpacity={0.8} />
                  <stop offset="92%" stopColor="#f88133" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "none", strokeWidth: 2 }} />
  
              <Area type={areatype} dataKey="value" fill="url(#colorgd)" stroke="#FF7A33" strokeWidth={1.3} />
  
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
  
  `

}





export default codes;
