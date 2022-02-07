import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import { content } from "../../tailwind.config"
import { StructuredText } from "react-datocms"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Landing page for Living as Sacred .." />
    <Hero content={data.content} />
    <SectionIntro content={data.content} />
    <SectionAbout content={data.content} />
    <SectionMission content={data.content} />
    <SectionJoannaMacy content={data.content} />
    <SectionValues content={data.content} />
    <SectionOffering content={data.content} />
    <SectionTimeline content={data.content} />
    <SectionValue content={data.content} />
    <SectionSoul content={data.content} />
    <SectionBios content={data.content} />
    <SectionSupporting content={data.content} />
  </Layout>
)

function Hero({ content }) {
  return (
    <div className="h-screen min-h-screen">
      <h1>Living as Sacred</h1>
      <h1 className="uppercase">May – July 2022</h1>
      <h1 className="uppercase">
        <em>Online</em>
      </h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="Living As Sacred Logo"
        placeholder="blurred"
        className="z-0"
      />
      <Button cta={content.ctaIntro} url="www.google.com" />
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div className="section">
      <h1 className="text-center">{content.introSectionTitle} </h1>
      <h2 className="text-center">{content.introtext}</h2>
    </div>
  )
}

function SectionAbout({ content }) {
  return (
    <div className="section">
      <h1 className="text-center">{content.aboutSectionTitle} </h1>
      <h2 className="text-center">{content.aboutSentence}</h2>
      <h2>
        <div dangerouslySetInnerHTML={{ __html: content.aboutSentence }} />
      </h2>
    </div>
  )
}

function SectionMission({ content }) {
  return (
    <div className="section">
      <Button cta={content.cta1} url="www.google.com" />{" "}
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="section">
      <h2 className="text-center">{content.joannaMacyQuote}</h2>
      <h3 className="text-center border-b-orange-50normal-case">
        —Joanna Macy
      </h3>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="section">
      <h1>{content.valuesSectionTitle}</h1>
      <h2>
        <StructuredText data={content.values} />
      </h2>
      <StructuredText data={content.valuesText} />
    </div>
  )
}

function SectionOffering({ content }) {
  return (
    <div className="section">
      <h1>{content.offeringSectionTitle}</h1>
      <h2 className="list-disc">
        <StructuredText data={content.offering} />
      </h2>
    </div>
  )
}

function SectionTimeline({ content }) {
  return <div className="section"> </div>
}

function SectionValue({ content }) {
  return (
    <div className="section">
      <h1>{content.valueSectionTitle}</h1>
      <h2>
        <StructuredText data={content.price} />
      </h2>
      <h1>{content.offerResumeSectionTitle}</h1>
      <h2>
        <StructuredText data={content.offerResume} />
      </h2>
      <Button cta={content.cta2} url="www.google.com" />
    </div>
  )
}

function SectionSoul({ content }) {
  return (
    <div className="section">
      <h1>{content.soulSectionTitle}</h1>
      <StructuredText data={content.ifYourSoulIsCallingFor} />
    </div>
  )
}

function SectionBios({ content }) {
  return <div className="section"> </div>
}

function SectionSupporting({ content }) {
  return (
    <div className="section">
      <h1>{content.supportingSectionTitle}</h1>{" "}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome(locale: { eq: "en" }) {
      ctaIntro
      joannaMacyQuote
      introSectionTitle
      introtext
      aboutSectionTitle
      aboutSentence
      cta1
      valuesSectionTitle
      valuesText {
        value
      }
      values {
        value
      }
      offeringSectionTitle
      offering {
        value
      }
      valueSectionTitle
      price {
        value
      }
      offerResumeSectionTitle
      offerResume {
        value
      }
      cta2
      soulSectionTitle
      ifYourSoulIsCallingFor {
        value
      }
      essenceSectionTitle
      womenSectionTitle
      supportingSectionTitle
      instagram
      telegram
    }
  }
`
