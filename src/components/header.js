import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Button from "../components/Button"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6">
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-red border border-red rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto`}
      >
        <div className="monotext lg:justify-center self-center lg:mr-10 ">
          <Link
            to={`/#about`}
            href="#responsive-header"
            className="block mt-4 mr-4 monotext no-underline hover:underline focus:underline lg:inline-block lg:mt-0 "
          >
            About
          </Link>
          <Link
            to={`/#timeline`}
            className="block mt-4 mr-4 monotext no-underline hover:underline focus:underline lg:inline-block lg:mt-0 "
          >
            Timeline
          </Link>
          <Link
            to={`/#women`}
            className="block mt-4 mr-4 monotext no-underline hover:underline focus:underline lg:inline-block lg:mt-0 "
          >
            Meet us
          </Link>
        </div>
        {/* <div className="block">EN/PT</div> */}
        <div className="-mt-10">
          <Button
            cta="Let’s journey together"
            url="mailto:livingasacred@gmail.com"
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
