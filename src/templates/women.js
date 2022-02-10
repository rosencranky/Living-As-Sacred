import React from "react"
import SEO from "../components/seo"
// import { motion } from "framer-motion"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

// import Div100vh from "react-div-100vh"

const WomanTemplate = ({ data: { person }, location }) => {
  return (
    <>
      <SEO titleOverride={"Woamn"} pathnameOverride={location.pathname} />

      <div>
        <header className="p-4 pb-0 md:p-6 md:pb-0 h-14 md:h-22 z-50 flex flex-wrap text-red fixed top-0 left-0 right-0">
          <nav className="relative z-10 w-full overflow-hidden">
            <ul className="flex flex-wrap pb-0 mb-0 relative overflow-hidden">
              <li className="ml-auto">
                <Link
                  to="/#women"
                  activeClassName="line-through"
                  className="text-lg md:text-2xl px-px text-red transition ease-in-out duration-500 hover:line-through focus:line-through"
                >
                  Close Bio
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div>
        <div className="min-h-screen">
          <div className="flex flex-wrap items-center h-full pt-14 md:pt-22 min-h-screen bg-offblack">
            <div className="text-red relative bg-offblack pb-24 md:pb-32 w-full">
              <div className="w-10/12 lg:w-9/12 mx-auto relative">
                <h1 className="text-2xl lg:text-3xl block w-full border-b border-red pb-1 mb-6 lg:mb-10 xl:mb-14">
                  {person.name}
                </h1>
                <div className="flex flex-wrap relative">
                  <div className="w-full lg:w-1/3 2xl:w-1/4 mb-8 lg:mb-0">
                    {/* <Img fluid={ person.image.fluid } className="w-full object-cover mb-1 relative z-10 opacity-25 "/> */}
                    <GatsbyImage
                      image={person.image.gatsbyImageData}
                      alt={person.image.alt}
                      placeholder="blurred"
                      aspectRatio={1 / 1}
                      width={200}
                    />
                  </div>
                  <div className="w-full lg:flex-1 relative z-10">
                    <div className="lg:w-10/12 xl:w-8/12 lg:pl-8">
                      <div className="content lg:text-lg leading-snug max-w-md">
                        <StructuredText data={person.bio} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto relative z-10">
                    {person.instagram && (
                      <div className="lg:text-right">
                        <span className="block uppercase mb-3 text-sm">
                          Social
                        </span>
                        <a
                          className="underline flex flex-wrap lg:justify-end items-center hover:line-through focus:line-through"
                          href={person.instagram}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span>Instagram</span>
                          <svg
                            className="ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.073"
                            height="16.073"
                            viewBox="0 0 16.073 16.073"
                          >
                            <g data-name="Group 151" fill="none" stroke="#fff">
                              <path
                                data-name="Path 1"
                                d="M10.875 14.095V5.2H1.978"
                              />
                              <path
                                data-name="Path 2"
                                d="M10.875 5.199L.354 15.719"
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WomanTemplate

export const query = graphql`
  query WomanQuery($slug: String!) {
    person: datoCmsWoman(slug: { eq: $slug }) {
      name
      slug
      bio {
        value
      }
      image {
        gatsbyImageData
        alt
      }
      instagram
    }
  }
`
