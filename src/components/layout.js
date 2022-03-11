/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        className="min-h-screen"
        style={
          {
            // margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <div className="z-0 absolute top-6 left-3 ">
          <h1 className="text-3xl  font-serif normal-case text-red tracking-tight">
            <Link to="/" title="Home">
              Living · as · Sacred
            </Link>
          </h1>
        </div>

        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
