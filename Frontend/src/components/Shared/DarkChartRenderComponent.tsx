
interface Props {

  category : string ,
  title : string ,
  Component : React.ReactNode
}

export default function DarkChartRenderComponent({ category , title , Component } : Props){


  return <div>
 
   <div className="text-lg text-center mt-2 border-b-2 border-neutral-800 py-1">{category}</div>

   <div className="text-neutral-400 text-md text-center mt-4">{title}</div>
   <div className="text-neutral-400 text-md text-center mt-1">January - July 2025</div>
   <div className="mt-8">

   <div>{Component}</div>
     </div>
  </div>
}