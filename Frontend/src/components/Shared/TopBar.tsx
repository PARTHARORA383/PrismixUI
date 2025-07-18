import { useNavigate } from "react-router-dom"


export default function TopBar(){
const navigate = useNavigate()

  return <div>

    <div className=" w-screen top-0 left-0 z-50 h-[56px] fixed bg-neutral-950 backdrop-blur-md border-r border-neutral-800 border-b-2 " style={{}}>

        <div className="flex items-center justify-start w-full h-full pl-8 gap-8">

      <div className="text-2xl cursor-pointer" onClick={()=>{

        navigate('/')
      }}>
      <img src="/Images/logo-removebg.png" width={120}/>
      </div>

      <div className="cursor-pointer flex  gap-4 items-center justify-baseline"
      onClick={()=>{
        navigate('/charts')
      }}> <span className=" font-medium text-[19px] text-neutral-100"> Charts   </span>
 
      </div>

      <div className="font-medium text-[19px] cursor-pointer text-neutral-100"
      onClick={()=>{
        navigate('/components/dropdown')
      }}>Components</div>


        </div>
    </div>

  </div>
}