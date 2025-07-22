import HeroSection from "../components/HeroSection";
import Githubcard from "../components/Light/Githubcard";
import {motion} from "motion/react"
import BackgroundGridBarChart from "../components/Light/GridbackgroundBarChart";
import SeamlessIntegrationCard from "../components/Light/SeamlessIntegrationCard";


export default function LandingPage (){

  return <div>
   
   <div className="text-center relative ">
   <HeroSection/>
   </div>



   <div className=" relative flex flex-col lg:flex lg:flex-row w-screen min-h-screen lg:max-h-screen bg-neutral-100 mt-32 pt-8  ">

    <div className="absolute right-0 top-0">

        <svg className="w-full h-[200px]" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">

        <path
        d="M0,-10 L200,100 ,L800,100 ,L1000,0 "
        fill="#0a0a0a"
        stroke="#0a0a0a"
        strokeWidth="5"

        />
        
      </svg>
    </div>

  <div className = "flex flex-col">

  <div className=" text-amber-500 font-semibold ml-8 mt-8">
    Prismix components
  </div>
  
  <div className="text-2xl font-semibold text-neutral-900 ml-8 mt-4">
   Intact with beautifull components
  </div>
  <div className="text-neutral-600 ml-8 mt-1">
    Designed to integrate seamlessly into your workflow to help <br/> you design website that really stands out
  </div>

    <div className=" mt-20 flex items-baseline-last pb-8 justify-start">
    <Githubcard/>
    </div>
  </div>

    <div className="flex flex-col mb-0">

    <div className=" mb-10 mt-20">
      <SeamlessIntegrationCard/>
    </div>

    
    <div className="bg-white shadow-xl rounded-xl h-[300px] w-[500px]  ml-8">

    </div>

    </div>

    <div className="bg-white border-2 border-neutral-300 shadow-xl rounded-xl h-[600px] w-[450px] mt-20 ml-12 pt-8 pl-4 pr-4 ">

      <div className="text-xl text-neutral-900">Beautifull Chart Components</div>
      <div className="text-neutral-500">We offer beautiful chart components to make your dashboards world class</div>
      <div className="  rounded-xl pt-5 pl-4 pr-4 bg-neutral-100 mt-8">

        <div className="text-neutral-700  text-md text-center">
          Mar - Apr
        </div>

        <div className=" relative text-neutral-700 text-center mb-12  rounded-full bg-neutral-300 mt-4 h-2">

          <motion.div 
          initial ={{opacity : 0 , x:0}}
          whileInView={{opacity : 1 , x:[0 , 300 , 0]}}
          transition={{duration : 1, ease : "linear",
            repeat : Infinity ,
            repeatDelay : 1
          }}

          className=" absolute left-0 w-6 bg-amber-500 h-2 rounded-full "></motion.div>
           
        </div>

    <BackgroundGridBarChart height={300}/>
      </div>
    </div>
   </div>


 
  </div>
}