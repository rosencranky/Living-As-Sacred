import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Button from "../components/Button"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6">
      <div className="block absolute top-10 right-10 z-40 lg:hidden">
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
          isExpanded ? `block bg-red` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto text-black`}
      >
        <div className=" lg:justify-center self-center  ">
          <Link
            to={`/#about`}
            href="#responsive-header"
            className="block mt-4 mr-4 monotext text-base no-underline hover:underline  lg:inline-block lg:mt-0 "
          >
            About
          </Link>
          <Link
            to={`/#timeline`}
            className="block mt-4 mr-4 monotext text-base no-underline hover:underline  lg:inline-block lg:mt-0 "
          >
            Timeline
          </Link>
          <Link
            to={`/#women`}
            className="block mt-4 mr-4 monotext text-base no-underline hover:underline  lg:inline-block lg:mt-0 "
          >
            Meet us
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 mr-8 monotext text-base no-underline hover:underline  lg:inline-block lg:mt-0 "
          >
            Contact
          </Link>
          <span className="inline-block text-red ">
            <Link
              to={`/`}
              className="block mt-4 font-serif text-xl no-underline hover:underline  lg:inline-block lg:mt-0 "
              activeClassName="underline"
            >
              EN
            </Link>
            /
            <Link
              to={`/pt`}
              className="block mt-4 font-serif text-xl active:underline  no-underline hover:underline  lg:inline-block lg:mt-0 "
              activeClassName="underline"
            >
              PT
            </Link>
          </span>
        </div>
        {/* <div className="block">EN/PT</div> */}
        {/* <div className="-mt-10">
          <Button
            cta="Let’s journey together"
            url="mailto:livingasacred@gmail.com"
          />
        </div> */}
      </div>
    </nav>
  )
}

function Button2({ cta, url }) {
  return (
    <div className="mt-6 mb-3">
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block bg-transparent hover:bg-red px-6 py-3 monotext text-sm 2xl:text-base no-underline text-cream  leading-none shadow-sm border border-cream  transition ease-in-out duration-300"
      >
        {cta}
      </a>
    </div>
  )
}

export default Header
