import React from "react"
import { useState, useContext } from "react"
import { StructuredText } from "react-datocms"

// import { SmoothScrollContext } from '../contexts/SmoothScroll.context'

export default function Accordion({ index, excerpt, fullText }) {
  const [open, setOpen] = useState()

  //   const { scroll } = useContext(SmoothScrollContext)

  function openToggle() {
    // setTimeout(() => scroll.update(), 500);
    setOpen(!open)
  }

  return (
    <div
      className={`border-b border-red xl:w-5/6 ${index == 0 ? "border-t" : ""}`}
    >
      <button
        className="block w-full text-left focus:outline-none focus:border-none group p-0 m-0 "
        onClick={() => openToggle()}
      >
        <div className="py-6 md:py-10 cursor-pointer ring-blue">
          <div className="flex flex-wrap items-center ">
            <div className="flex-1 md:w-2/3 ml-auto ">
              <div className="flex flex-wrap items-center -mx-3 grid grid-cols-2 grid-flow-col grid-auto-rows">
                <h2 className="block mb-0 pb-0 px-3 flex-1">
                  <StructuredText data={excerpt} />
                </h2>

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
                      stroke="#C21F06"
                      strokeWidth="3.24"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` origin-top accordion-item ${
            open ? "accordion-item--open h-auto" : "h-auto"
          }`}
        >
          <div
            className={`content max-w-2xl transition-opacity ease-in duration-200 delay-50 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <StructuredText data={fullText} />
          </div>
        </div>
      </button>
    </div>
  )
}
