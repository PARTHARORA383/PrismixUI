
import ComponentPreview from "../../../components/Shared/ComponentPreview";
import codes from "../../../components/Dark/codes";
import InstallationComponent from "../../../components/Shared/InstallationComponent";
import UsageComponent from "../../../components/Shared/UsageComponent";
import MidnigntPurpleAreaChartComponent from "../../../components/Dark/MidnightPurpleChartComponent";


export default function MidnightPurpleChartPage (){


  return <div className="mb-8">


  <div className="text-2xl">Area Charts</div>
  <div className="text-lg text-neutral-400 mt-1">Designed to integrate seamlessly into your Prismix dashboards</div>

  <div className="mt-8">

  <ComponentPreview title="Area Chart - Monotone" Component={()=>(
    <MidnigntPurpleAreaChartComponent width={1000} height={420} areatype="monotone"/>
  )}  code= {codes.MidnightPurpleChart} widthclass="max-w-5xl" subheading="Integrate this monotone area chart in your project with just one click"/>

  </div>
    <div  className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass = "max-w-5xl"/>
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
`} widthclass="max-w-5xl"/>
   </div>

  </div>
}
