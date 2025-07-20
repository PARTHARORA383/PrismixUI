import { useEffect, useState } from "react"
import { motion } from 'motion/react'
import { useNavigate } from "react-router-dom";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer

} from 'react-icons/si';

export default function HeroSection() {
  const text1 = 'RReusable Components';
  const [displayText, setDisplayText] = useState("")
  const [phase, setPhase] = useState('Typing')
  const navigate = useNavigate()
  useEffect(() => {
    let currentIndex = 0;
    let interval: any;


    if (phase == "Typing") {

      interval = setInterval(() => {

        if (currentIndex < text1.length - 1) {
          setDisplayText((prev) => (prev + text1[currentIndex]));
          console.log(currentIndex + "This is text" + text1[currentIndex])
          currentIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setPhase('Deleting')
          }, 2000)
        }
      }, 150)
    }



    if (phase == "Deleting") {
      let DeleteIndex = text1.length - 1;
      interval = setInterval(() => {

        if (DeleteIndex > 0) {
          setDisplayText((prev) => (prev.slice(0, -1)))
          DeleteIndex--;
        }
        else {
          clearInterval(interval)
          currentIndex = 0
          DeleteIndex = text1.length - 1
          setTimeout(() => {
            setPhase('Typing')
          }, 200)
        }
      }, 150);
    }


    return () => clearInterval(interval)
  }, [phase])



  return (
    <div>
      <div className=" text-3xl lg:text-7xl mt-30 lg:mt-36 font-medium bg-gradient-to-tr from-neutral-100 to-neutral-400 text-transparent bg-clip-text">
        Build Beautiful Websites
      </div>

      <div className=" text-3xl lg:text-7xl font-medium mt-6 ">

        <span className="bg-gradient-to-tr from-neutral-100 to-neutral-400 text-transparent bg-clip-text"> With  </span>
        <span className="border-[3px] border-l-8 border-l-amber-400 border-t-neutral-800 border-b-neutral-800 px-2 border-r-8 py-1 ml-4 border-r-amber-400 font-medium relative inline-block">

          <span className="text-neutral-700">
            Reusable Components
          </span>

          <motion.span
            key={displayText}
            initial={{ opacity: 1, y: 2}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 top-0 px-2 py-1 text-neutral-100 whitespace-nowrap">
            {displayText}
          </motion.span>
        </span>
      </div>


      <div>

      <div className="text-lg lg:text-2xl ml-4 mr-4 mt-6 lg:ml-0 lg:mr-0 lg:mt-10 text-neutral-400  ">
        Explore a vast range of reusable, premium components crafted for perfection. Spend less time<br/> designing from scratch and more time <span className="text-amber-500 opacity-70">building websites</span> that stand out.
      </div>

      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button onClick={()=>{
          navigate('/components/charts/MidnightPurple')
        }} className="px-6 py-2 rounded-md bg-amber-500 text-neutral-50 cursor-pointer hover:bg-amber-600 transition-colors duration-200">Explore Collection</button>
        <button className="px-6 py-2 rounded-md border-2 border-neutral-800 text-neutral-50 hover:border-neutral-400 transition-all duration-200">Build Faster with us</button>
      </div>
      

       <div className=" w-screen  fixed   -translate-x-14">
          <svg className="w-full h-24" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">

                <defs>
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M0,0 L200,0 L300 ,90 L500 ,0"
        fill="none"
        stroke="#f59e0b" // Tailwind amber-500 hex
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
        strokeDasharray="40 1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: -40 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        filter="url(#glow)"
      />
         </svg>

       </div>
      

       <div className=" w-screen  fixed top-40 ">
          <svg className=" w-full h-24" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">

                <defs>
        {/* Glow filter */}
        <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
      d="M900,90 L1000,0 L1200,1 L1400,10"
        fill="none"
        stroke="#f59e0b" // Tailwind amber-500 hex
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
        strokeDasharray="40 1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: -40 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        filter="url(#glow2)"
      />
         </svg>

       </div>
{/* 
        <div className="w-screen mt-4 ">
           <svg className="w-full h-24" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,0 L0,0 L200,60 L900,60 ,L1200,60 L1300,0"
        fill="none"
        stroke="#404040"
        strokeWidth="5"
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      strokeLinejoin="round"
      shape-rendering="crispEdges"
      strokeOpacity={0.4}
      />

      <motion.path
        d= "M0,0 L0,0 L200,60 L900,60 ,L1200,60 L1300,0"
        fill="none"
        stroke="yellow"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
        strokeDasharray="40 1000" // 40 length dash, large gap
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: -40 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
          ></motion.path>
           </svg>
        </div> */}

      <div className="w-full mt-8 lg:mt-12">
        <div className="text-neutral-400 text-lg lg:text-xl">
          Designed for devs who call it efficient, not lazy
          </div>

          <div className="flex items-center justify-center ml-4 mr-4 mt-4 gap-8">
            <div className=" flex items-center justify-center gap-2 lg:gap-4text-2xl lg:text-3xl">
              <SiTypescript/>
            <span className="text-sm lg:text-xl">Typescript</span>
            </div>
            <div className=" flex items-center justify-center gap-2 lg:gap-4text-xl lg:text-3xl">
              <SiReact/>
            <span className="text-sm lg:text-xl">React</span>
            </div>
            <div className=" flex items-center justify-center gap-2 lg:gap-4text-xl lg:text-3xl">
              <SiNextdotjs/>
            <span className="text-sm lg:text-xl">Next.js</span>
            </div>
            <div className=" flex items-center justify-center gap-2 lg:gap-4text-xl lg:text-3xl">
              <SiTailwindcss/>
            <span className="text-sm lg:text-xl">Tailwind CSS</span>
            </div>
            <div className=" flex items-center justify-center gap-2 lg:gap-4text-xl lg:text-3xl">
              <SiFramer/>
            <span className="text-sm lg:text-xl">Framer Motion</span>
            </div>
            </div> 

      </div>


    </div>
  )
}
