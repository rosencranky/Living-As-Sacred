import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { StructuredText } from "react-datocms"

export default function TermsPage({ data }) {
  return (
    <Layout>
      <SEO title="Terms and Conditions" />
      <div className="section min-h-screen">
        <div><h3 className="text-center section-title mt-16">Terms and Conditions</h3></div>
        <div className="mx-medium mt-6 xl:mt-36 text-base lg:text-lg">
          <StructuredText data={data.content.text} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TermsQuery {
    content: datoCmsTerm(locale: { eq: "en" }) {
      text {
        value
      }
    }
  }
`
