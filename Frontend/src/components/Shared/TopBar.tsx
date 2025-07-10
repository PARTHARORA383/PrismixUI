import { useNavigate } from "react-router-dom"


export default function TopBar(){
const navigate = useNavigate()

  return <div>

    <div className=" w-screen top-0 left-0 z-50 h-[56px] fixed bg-transparent backdrop-blur-md border-r border-neutral-800 border-b-2 " style={{}}>

        <div className="flex items-center justify-start w-full h-full pl-8 gap-8">

      <div className="text-2xl cursor-pointer">
      Prismix UI
      </div>

      <div className="text-lg cursor-pointer"
      onClick={()=>{
        navigate('/charts')
      }}>Charts</div>

      <div className="text-lg cursor-pointer"
      onClick={()=>{
        navigate('/components/dropdown')
      }}>Components</div>


        </div>
    </div>

  </div>
}