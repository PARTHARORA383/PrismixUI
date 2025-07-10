import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import {
  tomorrow
} from 'react-syntax-highlighter/dist/esm/styles/prism';


import { CopyToClipboard } from './CopyToClipboard';

interface props{
  code : string,
  widthclass ?: string
}

export default function UsageComponent({code , widthclass}:props){


  return <div className={`${widthclass ?? 'max-w-3xl'} `}>

    
      <div className="text-xl text-neutral-100 mb-8">Usage</div>
        <div className=" relative rounded-lg overflow-hidden ">
         
         <div className=' min-h-[500px] max-h-[500px] overflow-scroll scrollbar-hide'>

      <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers customStyle={{ padding: 4, margin: 0, paddingTop: 8}} >
        {code}
      </SyntaxHighlighter>

         </div>
          
      <div>
        <CopyToClipboard code={code}/>
      </div>
    </div>
    </div>
}