import React from "react"

import Layout from "../components/layout"

export default function Success() {
  return (
    <Layout>
      <div className="section h-90 flex justify-center">
        <h2 className="text-5xl md:text-6xl xl:text-8xl text-center text-red absolute top-1/2">
          Thank you!
        </h2>
      </div>
    </Layout>
  )
}
