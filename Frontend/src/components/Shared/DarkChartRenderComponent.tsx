

interface Props {
  category : string ,
  title : string ,
  Component : React.ReactNode

}

export default function DarkChartRenderComponent({ category , title , Component  } : Props){

  return <div className="relative">
 
   <div className="  text-lg text-start pl-4  border-b-2 border-neutral-800 py-3">{category}</div>
    


   <div className="text-neutral-400 text-md text-center mt-4">{title}</div>
   <div className="text-neutral-400 text-md text-center mt-1">January - July 2025</div>

   <div className="mt-8">
   <div className="max-w-full"> {Component}</div>
     </div>
  </div>
}