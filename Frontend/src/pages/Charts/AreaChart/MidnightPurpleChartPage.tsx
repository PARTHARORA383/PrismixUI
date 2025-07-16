
import ComponentPreview from "../../../components/Shared/ComponentPreview";
import codes from "../../../components/Dark/codes";
import InstallationComponent from "../../../components/Shared/InstallationComponent";
import UsageComponent from "../../../components/Shared/UsageComponent";
import MidnigntPurpleAreaChartComponent from "../../../components/Dark/MidnightPurpleChartComponent";

import { useParams } from "react-router-dom";

import { useEffect, useRef } from "react";


export default function MidnightPurpleChartPage() {

  const { chartId } = useParams()
  const monotoneRef = useRef<HTMLDivElement>(null);
  const linearRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
      if(!chartId){
        return ;
      }        

    if(chartId === '1' && monotoneRef.current) {
      monotoneRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if(chartId == '2' && linearRef.current) {
      linearRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
    if(chartId == '3' && stepRef.current) {
      stepRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }

  }, [chartId])

  return <div className="mb-8" >


    <div className="text-xl">Area Charts</div>
    <div className="text-lg text-neutral-400 mt-1">Designed to integrate seamlessly into your Prismix dashboards</div>

      {
        //Monotone
      }

    <div className="mt-8" ref = {monotoneRef}>
      <ComponentPreview title="MidnightPurple Area Chart - Monotone" Component={() => (
        <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="monotone" />
      )} code={codes.MidnightPurpleChart} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this monotone area chart in your project with just one click" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md"/>
    </div>

    <div className="">
      <UsageComponent code={
        `//import from your path

          import MidnigntPurpleAreaChartComponent from "../../../components/Dark/MidnightPurpleChartComponent";

          export default function MidnightPurpleChartRender(){

          return<div>
          //Call the component , pass these props 
          //areatype - Determines the type of graph e.g - monotone , step , linear etc.
            <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="monotone"/>
            )}  widthclass="max-w-5xl"/>

          </div>

          }
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>
    
    {
      //Linear
    }

    <div className="" ref ={linearRef}>
      <ComponentPreview title="
      MidnightPurple Area Chart - Linear" Component={() => (
        <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="linear" />
      )} code={codes.MidnightPurpleChart} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this Linear area chart in your project with just one click" />

    </div>

    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>
    
    
    <div className="">
      <UsageComponent code={
        `//import from your path

          import MidnigntPurpleAreaChartComponent from "../../../components/Dark/MidnightPurpleChartComponent";

          export default function MidnightPurpleChartRender(){

          return<div>
          //Call the component , pass these props 
          //areatype - Determines the type of graph e.g - monotone , step , linear etc.
            <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="linear"/>
            )}  widthclass="max-w-5xl"/>

          </div>

          }
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md"/>
    </div>
    {
      //Step
    }

    <div className="" ref ={stepRef}>
      <ComponentPreview title="
      MidnightPurple Area Chart - Step" Component={() => (
        <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="step" />
      )} code={codes.MidnightPurpleChart} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this Step area chart in your project with just one click" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>

    <div className="">
      <UsageComponent code={
        `//import from your path

          import MidnigntPurpleAreaChartComponent from "../../../components/Dark/MidnightPurpleChartComponent";

          export default function MidnightPurpleChartRender(){

          return<div>
          //Call the component , pass these props 
          //areatype - Determines the type of graph e.g - monotone , step , linear etc.
            <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="step"/>
            )}  widthclass="max-w-5xl"/>

          </div>

          }
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>

  </div>
}
