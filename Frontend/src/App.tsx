import { BrowserRouter, Route, Routes } from "react-router-dom"
import DropDownPage from "./pages/DropDownPage"
import Sidebar from "./components/Shared/Sidebar"
import TopBar from "./components/Shared/TopBar"
import MidnightPurpleChartPage from './pages/Charts/AreaChart/MidnightPurpleChartPage'
import ChartLandingPage from "./pages/ChartLandingPage"
import LandingPage from "./pages/LandingPage"
import ScrollToTop from "./components/Shared/ScrollToTop"
import OrangeChartLightPage from "./pages/Charts/AreaChart/OrangeChartLightPage"


function LayoutSidebar({children}:any){
  return (
    <div className="flex">

      <Sidebar/>
      <div className="pl-96 pt-24 flex-1">{children}</div>
    </div>
  )

}


function App() {
  
  return (
    <>
    <BrowserRouter>
      <TopBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/components/dropdown" element = {<LayoutSidebar>
          <DropDownPage/></LayoutSidebar>}/>

        <Route path="/components/charts/MidnightPurple/:chartId?" element = {<LayoutSidebar>
          <MidnightPurpleChartPage/></LayoutSidebar>}/>
        <Route path="/components/charts/LightOrange/:chartId?" element = {<LayoutSidebar>
          <OrangeChartLightPage/></LayoutSidebar>}/>

          <Route path="/charts" element = {<ChartLandingPage/>}/>
      </Routes>
    
    </BrowserRouter>
 
    </>
  )
}

export default App
