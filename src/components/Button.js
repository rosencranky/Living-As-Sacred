import React from "react"
import { Link } from "gatsby"

export default function Button({ cta }) {
  return (
    <button className="mt-8 md:mt-10 mb-3 flex justify-center place-self-center focus:outline-none">
      <Link
        to="/#value"
        className="z-20 inline-block  border border-khaki rounded-2xl xl:rounded-4xl bg-khaki hover:bg-beige hover:border-beige text-black px-5 py-2 monotext text-sm xl:text-2xl no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
      >
        {cta}
      </Link>
    </button>
  )
}
