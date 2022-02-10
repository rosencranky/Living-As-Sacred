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
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Home
          </Link>
          <Link
            to={`/page-2`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            page 2
          </Link>
        </div>
        <Button cta="Book now" url="mailto:living.as.sacred@gmail.com" />
      </div>
    </nav>
  )
}

export default Header
