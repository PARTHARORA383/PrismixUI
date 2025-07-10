
import { useState } from "react";

export default function InstallationComponent({ installation , widthclass}: { installation: string  , widthclass? : string}) {

  const [isCopied, setIsCopied] = useState<true | false>(false)


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installation);
      setIsCopied(!isCopied);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };



  return (
    <div >

      <div className="text-xl text-neutral-100">Installation</div>
      <p className="mb-2 text-neutral-400 ">
        Setup your React or Next.js project and install{" "}
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-100 transition-colors duration-200"
        >
          Tailwind CSS
        </a>{" "}
        first. Then install the required package below:
      </p>

      <div className={`relative border-[1px] border-neutral-800 rounded-lg p-3 min-h-[50px]  flex flex-col ${widthclass ?? "max-w-3xl"}`}>
        <div className=" pb-1 ">
          <button className=" border-neutral-700 border-[1px] px-2 rounded-lg py-0.5 text-neutral-100 bg-neutral-800">npm</button>
          <div className='absolute top-4 right-6'>
            <div className="relative inline-block group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className={`w-5 h-5   fill-current cursor-pointer
                ${isCopied ? "text-neutral-100" : "text-neutral-400 "}`}
                onClick={handleCopy}
              >
                <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z" />
              </svg>

              <div className="absolute top-8 -right-3 mb-2  px-6 py-1 rounded bg-neutral-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ">
                {isCopied ? "Copied!" : "Copy to clipboard"}
              </div>
            </div>
          </div>

        </div>

                  <div className="w-full border-[1px] border-neutral-800 mt-1 mb-1 "></div>
        <div className="text-neutral-400">

          {installation}
        </div>
      </div>
    </div>
  );
}

