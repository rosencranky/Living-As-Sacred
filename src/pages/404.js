import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="section h-90 flex justify-evenly   items-center flex-col">
      <h2 className="text-5xl md:text-6xl xl:text-8xl text-center text-red ">
        Page not found <br/> :(
      </h2>
      <h2 className="z-20 inline-block  border border-green rounded-2xl xl:rounded-4xl bg-khaki hover:bg-beige hover:border-khaki text-black px-5 py-2 monotext text-sm xl:text-2xl text-center no-underline lg:w-1/5 leading-none shadow-sm  transition ease-in-out duration-300">
        <Link to="/">Head home</Link>
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
