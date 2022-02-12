import React from "react"

export default function Button({ cta, url }) {
  return (
    <div>
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block px-4 py-2 mt-4 text-sm font-mono uppercase no-underline text-red border border-red leading-none hover:border-transparent hover:text-cream hover:bg-red lg:mt-0"
      >
        {cta}
      </a>
    </div>
  )
}
