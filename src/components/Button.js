import React from "react"

export default function Button({ cta, url }) {
  return (
    <div className="mt-6 mb-3">
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block bg-green hover:bg-red px-4 py-2 monotext no-underline text-cream  leading-none shadow-sm"
      >
        {cta}
      </a>
    </div>
  )
}
