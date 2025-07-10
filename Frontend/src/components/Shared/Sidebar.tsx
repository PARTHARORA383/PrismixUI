import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from 'motion/react'

export default function Sidebar() {
  const navigate = useNavigate()
  const [isDarkAreaChart, setDarkIsAreaChart] = useState(false);
  const [isLightAreaChart, setLightIsAreaChart] = useState(false);

  return <div>

    <div className=" bg-transparent w-[250px] min-h-screen fixed   border-r border-neutral-800">


      <div className="mt-24 ml-4 text-lg font-medium">
        Components
      </div>
      <div className="mt-4 py-1.5 px-4 cursor-pointer hover:bg-neutral-800 transition-colors duration-200 bg-neutral-900">
        Dark Theme
      </div>
      <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5"
        onClick={() => {
          navigate("/components/dropdown")
        }}>
        DropDown
      </div>

      <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 flex gap-2 justify-between"
        onClick={() => {
          setDarkIsAreaChart(!isDarkAreaChart)
        }}>
        AreaChart

        < motion.div
          animate={{ rotate: isDarkAreaChart ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>


        </motion.div>
      </div>

      {
        isDarkAreaChart && <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="border-l-2 ml-8">

          <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5"
            onClick={() => {
              navigate("/components/charts/MidnightPurple")
            }}>
            MidnightPurple
          </div>

          <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5"
            onClick={() => {
              navigate("/components/charts/LightPeach")
            }}>
            LightPeach
          </div>

        </motion.div>
      }

      <div className="mt-4 py-1.5 px-4 cursor-pointer hover:bg-neutral-800 transition-colors duration-200 bg-neutral-900">
        Light Theme
      </div>

      <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 flex gap-2 justify-between"
        onClick={() => {
          setLightIsAreaChart(!isLightAreaChart)
        }}>
        AreaChart

        < motion.div
          animate={{ rotate: isLightAreaChart ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </motion.div>
      </div>

      {
        isLightAreaChart && <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="border-l-2 ml-8">

          <div className="mt-4 px-4 text-neutral-400 cursor-pointer hover:text-neutral-100 transition-all duration-200 hover:translate-x-1.5"
            onClick={() => {
              navigate("/components/charts/LightOrange")
            }}>
            LightOrange
          </div>

        </motion.div>
      }


    </div>

  </div>
}