import React from "react"

export default function Button({ cta, url }) {
  return (
    <div className="mt-12 mb-3">
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block border-2 border-red bg-transparent hover:bg-red hover:text-cream text-red px-6 py-3 monotext text-sm 2xl:text-base no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
      >
        {cta}
      </a>
    </div>
  )
}
