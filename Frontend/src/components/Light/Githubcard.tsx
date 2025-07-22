import { motion } from "motion/react"
import { useState } from "react"

export default function Githubcard() {

const [isHover , setIsHover] = useState(false);

  return <div>

    <div className=" w-[400px] h-[430px] bg-white rounded-lg shadow-lg ml-8 p-5">


      <div className=" relative w-full h-[300px] bg-neutral-50 rounded-lg border-2 border-neutral-100 overflow-hidden "
      onMouseEnter={()=>{
        setIsHover(true)
      }}
      onMouseLeave={()=>{
        setIsHover(false)
      }}
      >

        <div 
        
          style={{
    boxShadow: isHover
      ? "inset 0px  0px 10px 4px rgba(255,200,0,0.4)"
      : "inset 0 0 0px 0px rgba(0,0,0,0)"
  }}
        className={` z-20 absolute flex items-center justify-center top-1/3 left-1/3 w-24 h-24 bg-white rounded-xl text-2xl text-neutral-950  shadow-xl  transition-all duration-300`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill={`${isHover ? "url(#fillgradient)" : "#525252"}`}>

        <defs>
          <linearGradient id="fillgradient" x1= "0" y1 = "0" x2= "1" y2="1">
          <stop stopColor="orange" offset="5%"/>
          </linearGradient>
        </defs>


  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
  6.53 5.47 7.59.4.07.55-.17.55-.38 
  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
  0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 
  1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
  1.92.08 2.12.51.56.82 1.27.82 2.15 
  0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
  1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
  8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>

        </div>


        <svg className="w-full h-[300px]" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">


          <defs>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>


          <motion.path
            d="M0,-150 L120 ,-150  L250,100 L690 ,100 ,L880,-150 , L1000,-150"
            stroke="#d4d4d4"
            strokeWidth="5"
            strokeOpacity={0.8}
            
            fill="none"
          />
          <motion.path
            d="M400,100  L250,100 L120 ,-150  L0,-150"
            stroke="orange"
            strokeWidth={`${isHover ? "2" : "0"}`}
            strokeOpacity={0.5}
            fill="none"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="crispEdges"
            strokeDasharray="40 800"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 40 }}
            transition={{
              duration:3,
              repeat: Infinity,
              ease: "linear",
            }}
            filter="url(#glow)"
          />
          <motion.path
            d="M530,100 , L690 ,100 ,L880,-150 , L1000,-150"
            stroke="orange"
               strokeWidth={`${isHover ? "2" : "0"}`}
            fill="none"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="crispEdges"
            strokeDasharray="40 800"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 40}}
            whileInView={{ strokeDashoffset: 40 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            filter="url(#glow)"
          />

        </svg>

        <motion.div
          initial={{ opacity: 1, y: -50, translateY: -50 }}
          whileInView={{ opacity: 1, y: 0, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="absolute top-0 w-full h-32"
        >
          <motion.div
            initial={{ rotateX: 0 }}
            whileInView={{ rotateZ: [5, 10, 5, 8] }}
            className="z-10 bg-gradient-to-br from-neutral-700 to-neutral-900 w-32 h-8 absolute top-6 left-1/3 rounded-md
        text-neutral-100 flex items-center justify-center text-sm">
            Hover me
          </motion.div>

          <div
            className="border-r-2 border-neutral-950 h-20 -translate-y-10 absolute top-0 left-35"
          ></div>
          <div
            className="border-l-2 border-neutral-950 h-20 -translate-y-10 absolute top-0 left-55"
          ></div>
        </motion.div>

            <motion.div 
            initial = {{y : 0}}
            whileInView={{y : [-10 , 10]}}
            transition={{duration : 1,ease : "easeInOut", 
              repeat : Infinity,
               repeatType: "reverse",
            }}
            className="absolute bottom-7 left-5">
            <div className="text-sm text-neutral-600 ">
            git add .    
            </div>
            <div className="text-sm text-neutral-600 ">
            git commit -m "message"
            </div>
            <div className="text-sm text-neutral-600 ">
              git push origin  
            </div>

            </motion.div>
      


      </div>

  

    <div className="flex flex-col">

    <span
    className="text-lg text-neutral-900 mt-4  ml-2">Find us on github
    </span>
    <span
    className="text-md text-neutral-400 ml-2">we are open source and you can find <br/> us on github 
    </span>
    </div>
    </div>


  </div>
}