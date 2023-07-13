import React from "react"
import { useState } from "react"
import { StructuredText } from "react-datocms"

export default function Accordion({ index, excerpt, fullText }) {
  const [open, setOpen] = useState(false)
  function openToggle() {
    setOpen(!open)
  }

  return (
    <div>
      {open && (
      <div
        className={`border-cream border-l border-b bg-khaki hover:bg-khaki transition ease-in duration-100 rounded-xl`}   
      >
      <button
        className="block w-full h-full text-left focus:outline-none focus:border-none group m-0 px-4 md:px-6 "
        aria-label="Open"
        onClick={() => openToggle()}
      >
        <div className="py-6 md:py-8 md:h-[18.75rem] cursor-pointer ring-blue">
          <div className="flex flex-wrap items-start">
            <div className="flex-1">
              <div className="flex flex-wrap items-start accordion-item--open ">
                <div
                    className={`leading-tight block mb-0 pb-0 ml-4 mt-4 flex-1 transition-opacity ease-in duration-200 delay-50 ${
                      open ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3
                    className={` mb-0 ml-0 pb-0 xl:text-2xl-lg text-black`}
                  >
                    <StructuredText data={excerpt} />
                  </h3>
                    
                  </div>
                
                <div className="px-3 ml-auto h-fit ">
                  <svg
                    className={`w-4 md:w-6 transform mt-[6px] md:mt-1 transition ease-in-out duration-300 ${
                      open ? "rotate-0" : "rotate-45"
                    }`}
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083"
                      stroke="#2C2726"
                      strokeWidth="3.24"
                    />
                  </svg>
                </div>
                <div className="mt-9 ml-4 flex-grow text-base lg:text-lg">
                    <StructuredText data={fullText} />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
)}
{!open && (
      <div
        className={`border-cream border-l border-b bg-beige hover:bg-beige transition ease-in duration-100 rounded-xl`}   
      >
      <button
        className="block w-full h-full text-left focus:outline-none focus:border-none group px-4 m-0 md:px-6 "
        aria-label="Open"
        onClick={() => openToggle()}
      >
        <div className="py-6 md:py-8 cursor-pointer md:h-[9.375rem] ring-blue">
          <div className="flex flex-wrap items-start">
            <div className="flex-1">
              <div className="flex flex-wrap items-start accordion-item--open "> 
                  <h3
                    className={`block mb-0 pb-0 ml-4  flex-1 mt-4 xl:text-2xl-lg transition-opacity ease-in duration-200 align-text-middle ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <StructuredText data={excerpt} />
                  </h3>
                <div className="px-3 ml-auto ">
                  <svg
                    className={`w-4 md:w-6 transform mt-[6px] md:mt-1 transition ease-in-out duration-300 ${
                      open ? "rotate-0" : "rotate-45"
                    }`}
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083"
                      stroke="#2C2726"
                      strokeWidth="3.24"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>)}
    </div>
  )
}
