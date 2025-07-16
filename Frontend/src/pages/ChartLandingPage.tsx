import { motion } from 'motion/react'
import BarChartLightComponent from '../components/Light/BarChart'
import DarkChartRenderComponent from '../components/Shared/DarkChartRenderComponent'
import MidnigntPurpleAreaChartComponent from '../components/Dark/MidnightPurpleChartComponent'
import OrangeAreaChartBgGradient from '../components/Light/OrangeAreaChartBgGradient'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrangeAreaChartSolid from '../components/Light/OrangeAreaChartSolid'
import OrangeAreaChartStep from '../components/Light/OrangeAreaChartStep'

import LightPeachStackedAreaChart from '../components/Dark/LightPeachStackedAreaChart'
import LightBrownAreaChartComponent from '../components/Light/LightBrownAreaChart'

export default function ChartLandingPage() {

  const [theme, setTheme] = useState("dark"); // "light" or "dark"
  const [chartType, setChartType] = useState("area"); // "area", "bar", "pie"

  const navigate = useNavigate()


  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const handleChartTypeChange = (selectedChart: string) => {
    setChartType(selectedChart);
  };

  return <div>

    <div className=" flex items-center justify-start  gap-8 ">

      <div className="flex flex-col  gap-3 ml-8 mt-24 mr-4 lg:mr-0 lg:mt-0 w-full  ">
        <div className=" text-4xl lg:text-5xl font-medium leading-tight font-serif">
          <span> Build beautiful and elegant  </span>
          <span className=""><br />charts effortlessly without <br />  any <span className='text-amber-500'>design hassle</span></span></div>
        <div className="text-lg text-neutral-400 lg:mt-4 ">
          Skip the design hassle with ready-to-use <span className='text-neutral-100'> Recharts </span> <br />charts to create beautiful and responsive charts
        </div>

        <div className='flex items-center justify-start gap-4'>
          <button className='px-6 py-1.5 lg:py-2 border-2 border-neutral-700 mt-4 rounded-md hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-200 cursor-pointer'>Browse charts</button>
          <div className='rounded-md px-6 py-1.5 lg:py-2 border-2 border-neutral-900 bg-neutral-900 mt-4'>
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
          className="col-span-1 relative  h-76  w-full rounded-xl shadow-lg flex flex-col items-center justify-end bg-neutral-900 overflow-hidden  "
        >

                <motion.div 
                initial = {{y:0, translateY : 60}}
                animate = {{y:0 , translateY : 0}}
                transition={{duration : 0.5, ease : "easeIn"}}
                className='text-4xl font-bold absolute top-24 overflow-hidden left-4 '>
                CREATE CHARTS
                </motion.div>

          <div className='absolute top-1/2 left-0 bg-neutral-200 h-38 w-full overflow-hidden'>
          
                <motion.div 
                initial = {{y:0, translateY : -60}}
                animate = {{y:0 , translateY : 0}}
                transition={{duration : 1, ease : "easeIn"}}
                className='text-4xl font-bold absolute pt-2  text-neutral-800 left-4 overflow-hidden'>
                  ZERO % HASSLE
                </motion.div>

            <div className='rotate-180 -translate-y-20 '>
         
            </div>
          </div>


        </motion.div>


        <motion.div
          className=" col-span-2  h-80 rounded-xl shadow-lg flex items-center justify-center bg-neutral-900 overflow-hidden  "
        >
          <div className='w-full'>
            <h1 className='text-center text-lg text-neutral-400 pt-4'>Area Chart</h1>
            <MidnigntPurpleAreaChartComponent height={250} areatype="step" />
          </div>
        </motion.div>
      </div>
    </div>

    {
      //Charts
    }
    <div className='w-full flex items-center justify-start h-10 bg-neutral-900 mt-8 pl-8 gap-5 '>
      <div className={`lg:text-lg   cursor-default transition-all duration-300 hover:text-neutral-100 active:text-neutral-400 ${theme == "dark" ? "text-neutral-100" : "text-neutral-400"}`} onClick={() => handleThemeChange("dark")}>Dark Theme</div>
      <div className={`lg:text-lg   cursor-default transition-all duration-300 hover:text-neutral-100 active:text-neutral-400 ${theme == "light" ? "text-neutral-100" : "text-neutral-400"}`} onClick={() => handleThemeChange("light")}>Light Theme</div>
    </div>

    <div className='flex  items-center pl-9 mt-4  gap-6'>

      <div className={`lg:text-lg   cursor-default transition-all duration-300 hover:text-neutral-100 active:text-neutral-400 ${chartType == "area" ? "text-neutral-100" : "text-neutral-400"}`} onClick={() => { handleChartTypeChange('area') }}
      >Area Charts</div>
      <div className={`lg:text-lg   cursor-default transition-all duration-300 hover:text-neutral-100 active:text-neutral-400 ${chartType == "bar" ? "text-neutral-100" : "text-neutral-400"}`} onClick={() => { handleChartTypeChange('bar') }}>Bar Charts</div>
      <div className={`lg:text-lg   cursor-default transition-all duration-300 hover:text-neutral-100 active:text-neutral-400 ${chartType == "pie" ? "text-neutral-100" : "text-neutral-400"}`} onClick={() => { handleChartTypeChange('pie') }}>Pie Charts</div>

    </div>

    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:pl-8 pl-4 mt-8 mb-8 pr-4 lg:pr-8'>


      {
        theme == "dark" && chartType == 'area' && (<>
          <div className=' relative col-span-1 border-2 border-neutral-800  transition-colors duration-200 cursor-default h-96 rounded-xl '
          >
            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-950 py-1 border-2 border-neutral-800 hover:border-neutral-500 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/MidnightPurple/1')
              }}> View Code</button>
            <DarkChartRenderComponent category='Area Chart - Monotone' title='Monthly Subscriptions Sold ' Component={<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='monotone' />} />


          </div>

          <div className='relative col-span-1 border-2 border-neutral-800 transition-colors duration-200 cursor-default h-96 rounded-xl '>

            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-950 py-1 border-2 border-neutral-800 hover:border-neutral-500 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/MidnightPurple/2')
              }}> View Code</button>

            <DarkChartRenderComponent category='Area Chart - Linear' title='Monthly Subscriptions Sold ' Component={<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='linear' />} />
          </div>

          <div className='relative col-span-1 border-2 border-neutral-800  transition-colors duration-200 cursor-default h-96 rounded-xl'>
            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-950 py-1 border-2 border-neutral-800 hover:border-neutral-500 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/MidnightPurple/3')
              }}> View Code</button>
            <DarkChartRenderComponent category='Area Chart - Step' title='Monthly Subscriptions Sold ' Component={<MidnigntPurpleAreaChartComponent width={450} height={200} areatype='step' />} />
          </div>

          <div className='relative col-span-1 lg:col-span-2 border-2 border-neutral-800  transition-colors duration-200 cursor-default h-96 rounded-xl'>
            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-950 py-1 border-2 border-neutral-800 hover:border-neutral-500 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/MidnightPurple/3')
              }}> View Code</button>
            <DarkChartRenderComponent category='Area Chart - Stacked' title='Monthly Products Sold ' Component={<LightPeachStackedAreaChart height={230} areatype={"basis"} />} />
          </div>

          <div className='relative col-span-1 border-2 border-neutral-800  transition-colors duration-200 cursor-default h-96 rounded-xl'>
            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-950 py-1 border-2 border-neutral-800 hover:border-neutral-500 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/MidnightPurple/3')
              }}> View Code</button>
            <DarkChartRenderComponent category='Area Chart - Stacked' title='Monthly Products Sold ' Component={<LightPeachStackedAreaChart height={230} areatype={"bump"} />} />
          </div>

        </>
        )
      }

      {theme == "dark" && chartType == 'bar' && (
        <>

          <motion.div 
          initial = {{opacity: 0 }}
          animate = {{opacity : 1}}
          transition={{duration : 0.2  , ease : "easeIn"}}
          className='col-span-3 h-[300px]'>
            <div className="w-full p-4 rounded-xl bg-neutral-800 flex flex-col items-center justify-center mt-8 ">
              <div className="max-w-lg  text-center">
                <p className="text-neutral-300 mb-6 text-xl" >
                  Help us in our journey to make UI easy for everyone.{" "}
                  <span className="text-neutral-100 font-medium "><br />Your feedback is valued at PrismixUI.</span>
                </p>
                <a
                  href="mailto:partharora.works3@gmail.com?subject=Feedback%20for%20Prismix%20UI%20Library&body=Hi%20Parth,%0D%0A%0D%0AI%20would%20like%20to%20share%20my%20feedback%20for%20Prismix.%20Here%20are%20my%20thoughts:%0D%0A%0D%0A"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-md transition"
                >
                  Send Feedback
                </a>
              </div>
            </div>

          </motion.div>

        </>
      )}

      {theme == "dark" && chartType == 'pie' && (
        <>
          <motion.div 
          initial = {{opacity: 0 }}
          animate = {{opacity : 1}}
          transition={{duration : 0.2  , ease : "easeIn"}}
          className='col-span-3 h-[300px]'>
            <div className="w-full p-4 rounded-xl bg-neutral-800 flex flex-col items-center justify-center mt-8 ">
              <div className="max-w-lg  text-center">
                <p className="text-neutral-300 mb-6 text-xl" >
                  Help us in our journey to make UI easy for everyone.{" "}
                  <span className="text-neutral-100 font-medium "><br />Your feedback is valued at PrismixUI.</span>
                </p>
                <a
                  href="mailto:partharora.works3@gmail.com?subject=Feedback%20for%20Prismix%20UI%20Library&body=Hi%20Parth,%0D%0A%0D%0AI%20would%20like%20to%20share%20my%20feedback%20for%20Prismix.%20Here%20are%20my%20thoughts:%0D%0A%0D%0A"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-md transition"
                >
                  Send Feedback
                </a>
              </div>
            </div>

          </motion.div>

        </>
      )}



      {theme == "light" && chartType == 'area' && (
        <>

          <div className='relative col-span-1 border-2 border-neutral-200 hover:border-neutral-400 transition-colors duration-200 cursor-default h-96 bg-neutral-100 rounded-xl overflow-hidden'
          >



            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-800 py-1 hover:bg-neutral-700 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/LightOrange/1')
              }}> View Code</button>
            <OrangeAreaChartSolid height={250} areatype="basis" />

          </div>

          <div className='relative col-span-1 border-2 border-neutral-200 hover:border-neutral-400 transition-colors duration-200 cursor-default h-96 bg-neutral-100 rounded-xl overflow-hidden'
          >

            <button className='z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-800 py-1 hover:bg-neutral-700 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/LightOrange/2')
              }}> View Code</button>
            <OrangeAreaChartBgGradient height={250} areatype="monotone" />
          </div>


          <div className=' relative col-span-1 border-2 border-neutral-200 transition-colors duration-200 cursor-default h-96 bg-neutral-100 rounded-xl overflow-hidden'>

            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-800 py-1 hover:bg-neutral-700 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/LightOrange/3')
              }}> View Code</button>
            <OrangeAreaChartStep height={250} areatype="step" />

          </div>


          <div className=' relative col-span-1 border-2 border-neutral-200 transition-colors duration-200 cursor-default h-96 bg-neutral-100 rounded-xl overflow-hidden'>

            <div className='text-neutral-950 text-lg ml-4 mb-8 mt-2'>Area Chart - Monotone</div>
            <div className='text-neutral-950 text-lg text-center font-medium'>Company Growth Journey (2019–2025)</div>
            <button className=' z-50 rounded-md flex items-center justify-center mt-2 absolute top-0 right-4 px-4 bg-neutral-800 py-1 hover:bg-neutral-700 transition-colors duration-200 cursor-pointer '
              onClick={() => {
                navigate('/components/charts/LightBrown/1')
              }}> View Code</button>

            <LightBrownAreaChartComponent height={250} />
          </div>
        </>
      )}

      {theme == "light" && chartType == 'bar' && (
        <>

          
          <motion.div 
          initial = {{opacity: 0 }}
          animate = {{opacity : 1}}
          transition={{duration : 0.2  , ease : "easeIn"}}
          className='col-span-3 h-[300px]'>
            <div className="w-full p-4 rounded-xl bg-neutral-800 flex flex-col items-center justify-center mt-8 ">
              <div className="max-w-lg  text-center">
                <p className="text-neutral-300 mb-6 text-xl" >
                  Help us in our journey to make UI easy for everyone.{" "}
                  <span className="text-neutral-100 font-medium "><br />Your feedback is valued at PrismixUI.</span>
                </p>
                <a
                  href="mailto:partharora.works3@gmail.com?subject=Feedback%20for%20Prismix%20UI%20Library&body=Hi%20Parth,%0D%0A%0D%0AI%20would%20like%20to%20share%20my%20feedback%20for%20Prismix.%20Here%20are%20my%20thoughts:%0D%0A%0D%0A"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-md transition"
                >
                  Send Feedback
                </a>
              </div>
            </div>

          </motion.div>



        </>
      )}
      {theme == "light" && chartType == 'pie' && (
        <>
        
          <motion.div 
          initial = {{opacity: 0 }}
          animate = {{opacity : 1}}
          transition={{duration : 0.2  , ease : "easeIn"}}
          className='col-span-3 h-[300px]'>
            <div className="w-full p-4 rounded-xl bg-neutral-800 flex flex-col items-center justify-center mt-8 ">
              <div className="max-w-lg  text-center">
                <p className="text-neutral-300 mb-6 text-xl" >
                  Help us in our journey to make UI easy for everyone.{" "}
                  <span className="text-neutral-100 font-medium "><br />Your feedback is valued at PrismixUI.</span>
                </p>
                <a
                  href="mailto:partharora.works3@gmail.com?subject=Feedback%20for%20Prismix%20UI%20Library&body=Hi%20Parth,%0D%0A%0D%0AI%20would%20like%20to%20share%20my%20feedback%20for%20Prismix.%20Here%20are%20my%20thoughts:%0D%0A%0D%0A"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-md transition"
                >
                  Send Feedback
                </a>
              </div>
            </div>

          </motion.div>

        
        </>
      )}





    </div>

  </div>
}