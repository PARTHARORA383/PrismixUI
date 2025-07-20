
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , ResponsiveContainer, Tooltip} from "recharts"


export default function OrangeBarChart ({height = "100%"} : {height ?: number | string}){


    const data = [
    { month: 'Jan', users: 300 },
    { month: 'Feb', users: 750 },
    { month: 'Mar', users: 550 },
    { month: 'Apr', users: 900 },
    { month: 'May', users: 700 },
    { month: 'Jun', users: 900 },
  ];


  const CustomTooltip = ({ active, payload, label }:any) => {
  if (active && payload && payload.length) {
    return (
<div className="bg-white border border-gray-300 text-orange-600 rounded px-2 py-1 text-sm m-0">
    <p className="m-0">{label}: {`${payload[0].value} users`}</p>
  </div>
    );
  }

  return null;
};




  return <div>
    <ResponsiveContainer width={"100%"} height={height} >
      <BarChart data={data} margin={{
        top : 10 ,
        left : 10,
        right: 10,
        bottom : 10
      }}>
        <CartesianGrid strokeDasharray={"3 3"} stroke="#4C4B4B"/>
        <XAxis dataKey={"month"} axisLine = {false} tickLine = {false}/>
        <YAxis axisLine = {false} tickLine = {false}/>
          <Bar dataKey={"users"}  stroke ="" fill="#FF6F00" radius={[10 ,10  , 0 , 0]}/>
          <Tooltip content={CustomTooltip}
          cursor = {{fill : "transparent"}}/>

      </BarChart>

    </ResponsiveContainer>



  </div>
}