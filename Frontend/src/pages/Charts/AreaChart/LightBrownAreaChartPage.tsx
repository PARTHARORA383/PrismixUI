
import ComponentPreview from "../../../components/Shared/ComponentPreview";
import codes from "../../../components/Dark/codes";
import InstallationComponent from "../../../components/Shared/InstallationComponent";
import UsageComponent from "../../../components/Shared/UsageComponent";


import { useParams } from "react-router-dom";

import { useEffect, useRef } from "react";

import LightBrownAreaChartComponent from "../../../components/Light/LightBrownAreaChart";


export default function LightBrownAreaChartPage() {

  const { chartId } = useParams()
  const monotoneRef = useRef<HTMLDivElement>(null);
  const bumpXRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
      if(!chartId){
        return ;
      }        

    if(chartId === '1' && monotoneRef.current) {
      monotoneRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if(chartId == '2' && bumpXRef.current) {
      bumpXRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [chartId])

  return <div className="mb-8" >


    <div className="text-2xl">Area Charts</div>
    <div className="text-lg text-neutral-400 mt-1">Designed to integrate seamlessly into your Prismix dashboards</div>

      {
        //Monotone
      }

    <div className="mt-8" ref = {monotoneRef}>
      <ComponentPreview title="LightPeach Area Chart - Stacked Basis" Component={() => (
        <LightBrownAreaChartComponent height={420} />
      )} code={codes.LightBrownArea} widthclass="max-w-5xl" subheading="Integrate this stacked basis area chart in your project with just one click" backgroundcolor="bg-neutral-100" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="max-w-5xl"/>
    </div>

    <div className="">
      <UsageComponent code={
`//import from your path

import LightBrownAreaChart from "../../../components/Dark/LightBrownAreaChart";

export default function LightBrownAreaChartRender(){

  return<div>
      //Call the component , pass these props 
      //areatype - Determines the type of graph e.g - monotone , step ,   linear etc.
      <LightBrownAreaChart height={420} areatype="basis" />
   </div>
     }
`} widthclass="max-w-5xl" />
    </div>
   
    
 
   

  </div>
}
