import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import { content } from "../../tailwind.config"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Landing page for Living as Sacred .." />
    <Hero />
    <SectionIntro content={data.content} />
    <SectionAbout />
    <SectionMission />
    <SectionJoannaMacy />
    <SectionValues />
    <SectionOffer />
    <SectionTimeline />
    <SectionValue />
    <SectionSoul />
    <SectionBios />
    <SectionSupporting />
  </Layout>
)

function Hero() {
  return (
    <>
      <h1>Living as Sacred</h1>
      <h1 className="uppercase">May – July 2022</h1>
      <h1 className="uppercase">
        <em>Online</em>
      </h1>
    </>
  )
}

function SectionIntro({ content }) {
  return (
    <div className="section">
      <h2 className="text-center">{content.introSectionTitle} </h2>
      <h3 className="text-center">{content.introtext}</h3>
    </div>
  )
}

function SectionAbout() {
  return <></>
}

function SectionMission() {
  return <></>
}

function SectionJoannaMacy() {
  return (
    <>
      <h3 className="text-center">
        “Grace happens when we act with others on behalf of your world”
      </h3>
      <h2 className="text-center border-b-orange-50normal-case">
        —Joanna Macy
      </h2>
    </>
  )
}

function SectionValues() {
  return <></>
}

function SectionOffer() {
  return <></>
}

function SectionTimeline() {
  return <></>
}

function SectionValue() {
  return <></>
}

function SectionSoul() {
  return <></>
}

function SectionBios() {
  return <></>
}

function SectionSupporting() {
  return <></>
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome {
      introSectionTitle
      introtext
    }
  }
`
