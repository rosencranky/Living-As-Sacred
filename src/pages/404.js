import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="section h-90 flex justify-center">
      <h2 className="text-5xl md:text-6xl xl:text-8xl text-center text-red absolute top-1/2">
        Page not found :(
      </h2>
      {/* <h2 className="top-margin-medium text-center underline">
        <Link to="/">Head home</Link>
      </h2> */}
    </div>
  </Layout>
)

export default NotFoundPage
