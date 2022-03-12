/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderPt from "./headerPt"
import { Link } from "gatsby"
import FooterPt from "./footerPt"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryPt {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="min-h-screen">
        <div className="z-0 absolute top-6 left-3 ">
          <h1 className="text-3xl  font-serif normal-case text-red tracking-tight">
            <Link to="/pt" title="Home">
              Living · as · Sacred
            </Link>
          </h1>
        </div>
        <HeaderPt />
        <main>{children}</main>
        <FooterPt />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
