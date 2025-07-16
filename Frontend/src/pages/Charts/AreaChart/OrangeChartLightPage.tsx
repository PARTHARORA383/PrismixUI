


import ComponentPreview from "../../../components/Shared/ComponentPreview";
import codes from "../../../components/Dark/codes";
import InstallationComponent from "../../../components/Shared/InstallationComponent";
import UsageComponent from "../../../components/Shared/UsageComponent";


import { useParams } from "react-router-dom";

import { useEffect, useRef } from "react";
import OrangeAreaChartBgGradient from "../../../components/Light/OrangeAreaChartBgGradient";
import OrangeAreaChartSolid from "../../../components/Light/OrangeAreaChartSolid";
import OrangeAreaChartStep from "../../../components/Light/OrangeAreaChartStep";


export default function OrangeChartLightPage() {

  const { chartId } = useParams()
  const monotoneRef = useRef<HTMLDivElement>(null);
  const basisRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!chartId) {
      return;
    }

    if (chartId === '1' && monotoneRef.current) {
      monotoneRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (chartId == '2' && basisRef.current) {
      basisRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
    if (chartId == '3' && stepRef.current) {
      stepRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }

  }, [chartId])

  return <div className="mb-8 " >


    <div className="text-2xl">Area Charts</div>
    <div className="text-lg text-neutral-400 mt-1">Designed to integrate seamlessly into your Prismix dashboards</div>

    {
      //Monotone
    }

    <div className="mt-8" ref={monotoneRef}>
      <ComponentPreview title="LightOrange Area Chart - Basis" Component={() => (
        <OrangeAreaChartSolid width={1000} height={420} areatype="basis" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange basis chart in your project with just one click" backgroundcolor="bg-neutral-100" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>

    <div className="">
      <UsageComponent code={
        `//import from your path
import OrangeAreaChartSolid from "../../../components/Light/OrangeAreaChartSolid";

export default function LightOrangeAreaChartRender(){

  return <div>
    //Call the component , pass these props 
    //areatype - Determines the type of graph e.g - monotone , step , linear etc.
    <OrangeAreaChartSolid width={1000} height={420} areatype="monotone" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange grid background area chart in your project with just one click" backgroundcolor="bg-neutral-100" />
  </div>

}
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>



    {
      //Basis
    }

    <div className="" ref={basisRef}>
      <ComponentPreview title="LightOrange Area Chart - Background grid" Component={() => (
        <OrangeAreaChartBgGradient width={1000} height={420} areatype="monotone" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange grid background area chart in your project with just one click" backgroundcolor="bg-neutral-100" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>

    <div className="">
      <UsageComponent code={
        `//import from your path
import OrangeAreaChartBgGradient from "../../../components/Light/OrangeAreaChartBgGradient";

export default function LightOrangeAreaChartRender(){

  return <div>
    //Call the component , pass these props 
    //areatype - Determines the type of graph e.g - monotone , step , linear etc.
    <OrangeAreaChartBgGradient width={1000} height={420} areatype="monotone" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange grid background area chart in your project with just one click" backgroundcolor="bg-neutral-100" />
  </div>

}
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>


    {
      //Step
    }

    <div className="" ref={stepRef}>
      <ComponentPreview title="LightOrange Area Chart - Step" Component={() => (
        <OrangeAreaChartStep width={1000} height={420} areatype="monotone" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange step area chart in your project with just one click" backgroundcolor="bg-neutral-100" />

    </div>
    <div className="mt-8 mb-8">

      <InstallationComponent installation="npm i recharts" widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>

    <div className="">
      <UsageComponent code={
        `//import from your path
import OrangeAreaChartStep from "../../../components/Light/OrangeAreaChartStep";

export default function LightOrangeAreaChartRender(){

  return <div>
    //Call the component , pass these props 
    //areatype - Determines the type of graph e.g - monotone , step , linear etc.
    <OrangeAreaChartStep width={1000} height={420} areatype="monotone" />
      )} code={codes.LightOrangeArea} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" subheading="Integrate this light orange grid background area chart in your project with just one click" backgroundcolor="bg-neutral-100" />
  </div>

}
`} widthclass="lg:max-w-5xl md:max-w-xl sm:max-w-md 2xs : max-w-sm 2xs : max-w-md" />
    </div>


  </div>
}
