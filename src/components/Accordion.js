import React from "react"
import { useState } from "react"
import { StructuredText } from "react-datocms"

export default function Accordion({ index, excerpt, fullText }) {
  const [open, setOpen] = useState()
  function openToggle() {
    setOpen(!open)
  }

  return (
    <div>
      <button
        className="block w-full h-full text-left focus:outline-none focus:border-none group p-0 m-0 px-6 "
        aria-label="Open"
        onClick={() => openToggle()}
      >
        <div className="py-6 md:py-10 cursor-pointer ring-blue">
          <div className="flex flex-wrap items-start">
            <div className="flex-1">
              <div className="flex flex-wrap items-start accordion-item--open ">
                {!open && (
                  <h3
                    className={`block mb-0 pb-0 px-3 flex-1   transition-opacity ease-in duration-200  ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <StructuredText data={excerpt} />
                  </h3>
                )}
                {open && (
                  <div
                    className={`leading-tight block mb-0 pb-0 px-3 flex-1 transition-opacity ease-in duration-200 delay-50 ${
                      open ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <StructuredText data={fullText} />
                  </div>
                )}

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
                      stroke="#6D7661"
                      strokeWidth="3.24"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
