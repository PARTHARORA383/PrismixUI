import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import type { CurveType } from 'recharts/types/shape/Curve';

interface props {
width?: number | string;
height : number ,
areatype : CurveType 
}

export default function MidnigntPurpleAreaChartComponent({  height , areatype} :props) {

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
      <div className='max-w-full'>

    <ResponsiveContainer  width={"100%"} height={height}>
      <AreaChart 
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        
        >
        <CartesianGrid strokeDasharray="0" stroke="#333" vertical={false} strokeOpacity={0.5} horizontalPoints={[100, 200, 300]} />
        <XAxis dataKey= {"label"} />
        <YAxis />
        <Tooltip
          formatter={(value) => `${value} `}
          labelFormatter={(label) => `${label}`}
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
  </div>
}