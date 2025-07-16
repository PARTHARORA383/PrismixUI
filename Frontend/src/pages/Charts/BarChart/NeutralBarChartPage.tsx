
import ComponentPreview from "../../../components/Shared/ComponentPreview";
import codes from "../../../components/Dark/codes";
import InstallationComponent from "../../../components/Shared/InstallationComponent";
import UsageComponent from "../../../components/Shared/UsageComponent";


import { useParams } from "react-router-dom";

import { useEffect, useRef } from "react";
import NeutralBarChart from "../../../components/Dark/Barcharts/NeutralBarChart";


export default function NeutralBarChartPage() {

  const { chartId } = useParams()
  const NeutralBarHoverBlue = useRef<HTMLDivElement>(null);



  useEffect(() => {
      if(!chartId){
        return ;
      }        

    if(chartId === '1' && NeutralBarHoverBlue.current) {
      NeutralBarHoverBlue.current.scrollIntoView({ behavior: "smooth" });
    }

  }, [chartId])

  return <div className="mb-8" >


    <div className="text-2xl">Bar Charts</div>
    <div className="text-lg text-neutral-400 mt-1">Designed to integrate seamlessly into your Prismix dashboards</div>

      {
        //NeutralBarHoverBlue
      }

    <div className="mt-8" ref = {NeutralBarHoverBlue}>
      <ComponentPreview title="Neutral Bar Chart" Component={() => (
        <NeutralBarChart height={420}  />
      )} code={codes.DarkNeutralBarChart} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this Neutral Bar chart in your project with just one click" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md"/>
    </div>

    <div className="">
      <UsageComponent code={
`//import from your path

import NeutralBarChart from "../../../components/Dark/NeutralBarChart";

export default function NeutralBarChartRenderer(){

  return<div>
      //Call the component , pass these props 
      <NeutralBarChart height={420} />
   </div>
     }
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>
    


  </div>
}
