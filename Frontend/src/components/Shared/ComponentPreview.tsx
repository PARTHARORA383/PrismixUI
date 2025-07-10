//@ts-ignore
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//@ts-ignore
import {
  solarizedlight,
  tomorrow,
  prism,
  atomDark,
  darcula,
  materialDark,
  oneLight,

} from 'react-syntax-highlighter/dist/esm/styles/prism';


import { CopyToClipboard } from './CopyToClipboard';


interface prop {
  title: string,
  Component: React.ElementType,
  code: string ,
  subheading ? : string ,
  widthclass ? : string
}
export default function ComponentPreview({ title, Component, code , widthclass , subheading}: prop) {

  const [isPreview, setIsPreview] = useState<true | false>(false)




  return <div className=''>
    <div className='text-neutral-100 text-2xl '>{title}</div>
    <div className='text-neutral-400 text-lg mt-1 '>{subheading}</div>

    <div className='flex gap-4.5 text-lg mt-8 ml-1'>
      <div className={`cursor-pointer hover:text-neutral-100 transition-colors duration-200 ${isPreview ? "text-neutral-400" : " text-neutral-100"}`} onClick={() => {
        setIsPreview(false)
      }}>Preview</div>
      <div className={`cursor-pointer hover:text-neutral-100 transition-colors duration-200 ${isPreview ? "text-neutral-100" : " text-neutral-400"}`} onClick={() => {
        setIsPreview(true)
      }}>Code</div>
    </div>

    <div className={`border-2 border-neutral-800  min-h-[500px] max-h-[500px] rounded-lg  mt-1  overflow-scroll scrollbar-hide  ${widthclass ?? 'max-w-3xl'}`}>

      {!isPreview ? <div className='min-h-[500px]  w-full flex justify-center  '>

        <div className='w-full p-3 pt-8'>

          <Component /></div>

      </div> :
        <div className=' relative rounded-md overflow-hidden scrollbar-hide'>

       <CopyToClipboard code={code}/>


          <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers customStyle={{ padding: 4, margin: 0, paddingTop: 8 }} >
            {code}
          </SyntaxHighlighter>
        </div>}

    </div>




  </div>
}


