import { useState } from "react";
import { SiNextdotjs, SiReact } from "react-icons/si";
import {motion} from "motion/react"

export default function SeamlessIntegrationCard (){


  const [isHover , setIsHover] = useState(false);


 
  return <div >

    <div className="relative w-[500px] h-[350px] bg-white rounded-lg shadow-lg ml-8 overflow-hidden">


      <div className="absolute top-0 left-10 border-[1px] border-dashed border-neutral-300 h-full opacity-40"></div>
      <div className="absolute top-0 right-10 border-[1px] border-dashed border-neutral-300 h-full  opacity-40"></div>
      <div className="absolute bottom-10 left-0 border-[1px] border-dashed border-neutral-300 w-full  opacity-40"></div>
      <div className="absolute top-10 left-0 border-[1px] border-dashed border-neutral-300 w-full  opacity-40"></div>

    <div className="text-xl text-neutral-900 pt-14 pl-16">
      Seamlessly Integrated
    </div>


      <div className="text-neutral-600 pl-16 "> Built using  modern technologies like React<br/> and TailwindCSS </div>

      <div className="mt-2">

    <div className=" mr-16  w-full h-[170px] flex items-baseline-last  justify-center overflow-hidden">
      
      <div className="w-[350px] border-[4px] border-neutral-100 h-[200px] rounded-xl translate-y-10 bg-gradient-to-br from-neutral-50 to-neutral-100">

        <motion.div
        initial = {{x : 0}}
        whileInView={{x:600}}
        transition={{duration : 2 , ease:"easeIn",
          repeat : Infinity,
          repeatDelay : 0.6
        }}

        className=" absolute top-0 left-0 h-[1000px] -rotate-45 w-[80px] 
        bg-gradient-to-br from-transparent via-white to-transparent">

        </motion.div>

 
        <div className=" h-full flex justify-center gap-16 items-center  pl-4 pr-4">



        <div className="text-4xl text-neutral-200 rounded-full bg-neutral-700 border-2 border-neutral-700 hover:border-indigo-300 p-2 transition-all duration-200 hover:drop-shadow-[0_0px_40px_#6366f1]" >
          
          <SiReact/>
        </div>
      
    
        <div className="text-5xl  text-neutral-700 rounded-full  border-2 border-neutral-700 hover:border-indigo-300  transition-all duration-200 hover:drop-shadow-[0_0px_40px_#6366f1]" >
          <SiNextdotjs/>
        </div>
        </div>
      </div>

    </div>
      </div>




    </div>  
  </div>
}