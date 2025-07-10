import { motion } from 'motion/react'
import BarChartLightComponent from '../components/Light/BarChart'
import DarkChartRenderComponent from '../components/Shared/DarkChartRenderComponent'
import MidnigntPurpleAreaChartComponent from '../components/Dark/MidnightPurpleChartComponent'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChartLandingPage() {

const [theme, setTheme] = useState("dark"); // "light" or "dark"
const [chartType, setChartType] = useState("area"); // "area", "bar", "pie"

const navigate = useNavigate()


const handleThemeChange = (selectedTheme:string) => {
  setTheme(selectedTheme);
};

const handleChartTypeChange = (selectedChart:string) => {
  setChartType(selectedChart);
};

  return <div>

    <div className="flex items-center justify-start  gap-8 ">

      <div className="flex flex-col  gap-3 ml-8 w-full  ">
        <div className="text-5xl font-medium leading-tight font-serif">
          <span> Build beautiful and elegant  </span>
          <span className=""><br />charts effortlessly without <br />  any <span className='text-amber-500'>design hassle</span></span></div>
        <div className="text-2xl text-neutral-400 mt-4 ">
          Skip the design hassle with ready-to-use <span className='text-neutral-100'> Recharts </span> <br />charts to create beautiful and responsive charts
        </div>

        <div className='flex items-center justify-start gap-4'>
          <button className='px-6 py-2 border-2 border-neutral-700 mt-4 rounded-md hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-200 cursor-pointer'>Browse charts</button>
          <div className='rounded-md px-6 py-2 border-2 border-neutral-900 bg-neutral-900 mt-4'>
            npx install & plot magic </div>
        </div>

      </div>


      <div className='hidden lg:grid grid-cols-2 gap-4 mr-8 mt-20 w-full '>

        <motion.div
          className="col-span-1 relative  h-76 w-full rounded-xl shadow-lg flex flex-col items-center justify-end bg-neutral-200 overflow-hidden pl-8   "

        >
          <div className='absolute left-0 pl-2 top-1 text-lg text-neutral-600 border-b-2 w-full'>Bar chart</div>
          <div className='text-lg absolute top-12 text-neutral-900 '> January - June </div>
          <div className=''>

            <BarChartLightComponent width={350} height={200} />
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 relative  h-76  w-full rounded-xl shadow-lg flex flex-col items-center justify-end bg-neutral-900 overflow-hidden  pl-8 "
        >


          <div className='absolute top-1/2 left-0 bg-neutral-200 h-38 w-full overflow-hidden'>
            <div className='rotate-180 -translate-y-20 '>

              <BarChartLightComponent width={400} height={200} />
            </div>
          </div>


        </motion.div>


        <motion.div
          className=" col-span-2  h-80 rounded-xl shadow-lg flex items-center justify-center bg-neutral-900 overflow-hidden  "
        >
          <div className=''>
            <h1 className='text-center text-lg text-neutral-400 pt-4'>Area Chart</h1>
            <MidnigntPurpleAreaChartComponent width={700} height={250} areatype="step" />
          </div>
        </motion.div>
      </div>
    </div>

{
  //Charts
}
    <div className='w-full flex items-center justify-start h-10 bg-neutral-900 mt-8 pl-8 gap-5 '>
      <div className='text-lg text-neutral-100 cursor-default transition-colors duration-200 hover:text-neutral-400' onClick={() => handleThemeChange("dark")}>Dark Theme</div>
      <div className='text-lg text-neutral-100 cursor-default transition-colors duration-200 hover:text-neutral-400' onClick={() => handleThemeChange("light")}>Light Theme</div>
    </div>

    <div className='flex  items-center pl-9 mt-4  gap-6'>

      <div className='text-lg text-neutral-400 cursor-pointer transition-colors duration-200 hover:text-neutral-100' onClick={()=>{handleChartTypeChange('area')}}
      >Area Charts</div>
      <div className='text-lg text-neutral-400 cursor-pointer transition-colors duration-200 hover:text-neutral-100' onClick={()=>{handleChartTypeChange('bar')}}>Bar Charts</div>
      <div className='text-lg text-neutral-400 cursor-pointer transition-colors duration-200 hover:text-neutral-100'onClick={()=>{handleChartTypeChange('pie')}}>Pie Charts</div>

    </div>

    <div className='w-full grid grid-cols-3 gap-8 pl-8 mt-8 mb-8 pr-8'>


      {
        theme == "dark" && chartType == 'area' && (<>
             <div className='col-span-1 border-2 border-neutral-800 hover:border-neutral-400 transition-colors duration-200 cursor-default h-96 rounded-xl' onClick={()=>{
              navigate('/components/charts/MidnightPurple/1')
             }}>
        <DarkChartRenderComponent category='Area Chart - Monotone' title='Monthly Subscriptions Sold ' Component = {<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='monotone'/>} />


      </div>

      <div className='col-span-1 border-2 border-neutral-800 hover:border-neutral-400 transition-colors duration-200 cursor-default h-96 rounded-xl'  onClick={()=>{
              navigate('/components/charts/MidnightPurple/2')
             }}>
   <DarkChartRenderComponent category='Area Chart - Linear' title='Monthly Subscriptions Sold ' Component = {<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='linear'/>}/>
      </div>

      <div className='col-span-1 border-2 border-neutral-800 hover:border-neutral-400 transition-colors duration-200 cursor-default h-96 rounded-xl'  onClick={()=>{
              navigate('/components/charts/MidnightPurple/3')
             }}>
   <DarkChartRenderComponent category='Area Chart - Step' title='Monthly Subscriptions Sold ' Component = {<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='step'/>} />
      </div>
        </>
        )
      }

      {theme == "dark" && chartType == 'bar' && (
        <></>
      )}

      {theme == "dark" && chartType == 'pie' && (
        <></>
      )}



      {theme == "light" && chartType == 'area' && (
        <></>
      )}
      {theme == "light" && chartType == 'bar' && (
        <></>
      )}
      {theme == "light" && chartType == 'pie' && (
        <></>
      )}



  

    </div>

  </div>
}