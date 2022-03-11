import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { StructuredText } from "react-datocms"

export default function TermsPagePt({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Termos de Compra e Condições Contratuais" />
      <div className="section min-h-screen">
        <div className="mx-medium mt-48 xl:mt-36">
          <StructuredText data={data.content.text} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TermsQueryPt {
    content: datoCmsTerm(locale: { eq: "pt" }) {
      text {
        value
      }
    }
  }
`
