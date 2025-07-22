
import { SiReact } from "react-icons/si";
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , ResponsiveContainer } from "recharts"

export default function BackgroundGridBarChart({height} : {height : number | string}){
 const data = [
    { label: "ProductA", value: 70 },
    { label: "ProductB", value: 45 },
    { label: "ProductC", value: 55 },
    { label: "ProductD", value: 30 },
]

  const RoundedBackground = (props: any) => {
    const { x, y, width, height } = props;
    return (
      <>
        {/* Define pattern */}
          <defs>
        <pattern
          id="stripedPattern"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          {/* Stripe */}
          <rect width="2" height="8" fill="#a3a3a3" />
        </pattern>
      </defs>

      {/* Background with stripes overlay */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        ry={10}
        fill="#e5e5e5" // Tailwind bg-neutral-200 hex
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        ry={10}
        fill="url(#stripedPattern)"
        opacity="0.3" // Adjust stripe visibility if needed
      />
      </>
    );
  };
  return <div>


    <ResponsiveContainer width={"100%"} height={height}>

    <BarChart className = "relative" data={data}  barCategoryGap="20%"  barGap={4} >
      <div className="absolute  bottom-0 z-20 text-xl text-neutral-100"><SiReact/></div>
      <CartesianGrid vertical = {false} horizontal = {false}/>
      <XAxis dataKey="label" axisLine = {false} tickLine = {false}/>
      <YAxis hide/>
      <Bar dataKey="value" fill="#262626" background = {<RoundedBackground/>} stroke="" baseFrequency = {4}  radius={[10 ,10, 10, 10]} />
    </BarChart> 
    </ResponsiveContainer>

  </div>
}
