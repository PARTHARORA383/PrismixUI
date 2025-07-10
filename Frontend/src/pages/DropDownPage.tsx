import { useState } from "react";
import { DropDown } from "../components/Dark/DropDown";
import ComponentPreview from "../components/Shared/ComponentPreview";
import InstallationComponent from "../components/Shared/InstallationComponent";
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
import { CopyToClipboard } from "../components/Shared/CopyToClipboard";


export default function DropDownPage() {

  const options: string[] = [
    "react-select",
    "@headlessui/react",
    "@radix-ui/react-select",
    "downshift",
    "@reach/listbox",
    "chakra-ui select",
    "mantine select",
    "mui select",
    "evergreen select",
    "react-dropdown"
  ];




  const [selected, setSelected] = useState("")

  return <div>

    <ComponentPreview title="DropDown" Component={() => (<DropDown options={options} placeholder="Select a value" selected={selected} setSelected={setSelected} />)} code={`import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface props {
  options: string[];
  placeholder: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const DropDown = ({
  options,
  placeholder,
  selected,
  setSelected,
}: props) => {
  const [isOpen, setIsOpen] = useState<true | false>(false);

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div
          className="text-md text-neutral-200 border-2 border-neutral-950 bg-neutral-900 rounded-lg p-[8px] cursor-pointer hover:bg-neutral-800 hover:border-neutral-400 transition-colors duration-200 active:bg-neutral-800 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selected || (
            <p className="text-neutral-500">{placeholder || "Select an option"}</p>
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0.5, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="absolute w-full mt-2 bg-neutral-900 border-2 border-neutral-800 shadow-lg p-2 rounded-lg z-20 max-h-80 overflow-y-scroll hide-scrollbar"
            >
              {options.map((option, index) => (
                <motion.div className="rounded-lg" key={index}
                 initial={{ opacity: 0.5, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
                  <motion.div
                  
                    className="text-neutral-200 p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
`} />

    <div className=" mt-8 ">
      <InstallationComponent installation="npm i framer-motion  " />
    </div>
    <div className="   mt-8 mb-40 max-w-3xl rounded-lg overflow-scroll scrollbar-hide ">

      <div className="text-xl text-neutral-100 mb-8">Usage</div>
        <div className=" relative rounded-lg overflow-hidden ">

      <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers customStyle={{ padding: 4, margin: 0, paddingTop: 8 }} >
        {`import { useState } from "react";

export const DropDownRender = ()=>{
  
//Your options array 
const options: string[] = [
  "react-select",
  "@headlessui/react",
  "@radix-ui/react-select",
  "downshift",
  "@reach/listbox",
  "chakra-ui select",
  "mantine select",
  "mui select",
  "evergreen select",
  "react-dropdown"
  ];
  //state to hold the value
  const [selected , setSelected] = useState("")    
  
  return <>
  <DropDown options = {options}   placeholder="Select a value"
  selected={selected}  setSelected = {setSelected} />
  </>
  }
  `}
      </SyntaxHighlighter>

          
      <div>
        <CopyToClipboard code=        {`import { useState } from "react";

export const DropDownRender = ()=>{
  
//Your options array 
const options: string[] = [
  "react-select",
  "@headlessui/react",
  "@radix-ui/react-select",
  "downshift",
  "@reach/listbox",
  "chakra-ui select",
  "mantine select",
  "mui select",
  "evergreen select",
  "react-dropdown"
  ];
  //state to hold the value
  const [selected , setSelected] = useState("")    
  
  return <>
  <DropDown options = {options}   placeholder="Select a value"
  selected={selected}  setSelected = {setSelected} />
  </>
  }
  `}/>
      </div>

  </div>
    </div>
  </div>


}



