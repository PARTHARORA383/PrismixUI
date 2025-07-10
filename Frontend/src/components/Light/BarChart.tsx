import { BarChart , XAxis , YAxis ,   CartesianGrid , Bar, ResponsiveContainer } from "recharts"

interface props{
width : number  ,
height : number
}

export default function BarChartLightComponent({width , height} : props){

  const data = [
  { label: "Jan", value: 60 },
  { label: "Feb", value: 45 },
  { label: "Mar", value: 25 },
  { label: "Apr", value: 60 },
  { label: "May", value: 40 },
  { label: "June", value: 50 },

];



  return<div className="outline-none focus:outline-none">
   <ResponsiveContainer width={width} height={height} >
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD045" /> 
              <stop offset="100%" stopColor="#f59e0b" /> 
            </linearGradient>
          </defs>

          <defs>
  <linearGradient id="halfGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="50%" stopColor="#facc15" />  {/* top half (yellow-400) */}
    <stop offset="50%" stopColor="#f59e0b" />  {/* bottom half (amber-500) */}
  </linearGradient>
</defs>

          <CartesianGrid strokeDasharray="0 0" strokeWidth={2}  strokeOpacity={0.3} vertical={false} horizontal = {false} stroke="white"/>
          <XAxis dataKey="label"  axisLine = {false} tickLine = {false}/>
          <YAxis hide />
        
          <Bar dataKey="value" fill="url(#barGradient)"  radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

  </div>

}