import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import Accordion from "../components/Accordion"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Landing page for Living as Sacred .." />
    <Hero content={data.content} />
    <SectionIntro content={data.content} />
    <SectionAbout content={data.content} />
    <SectionJoannaMacy content={data.content} />
    <SectionValues content={data.content} />
    <SectionOffering content={data.content} />
    <SectionTimeline content={data.content} />
    <SectionValue content={data.content} />
    <SectionSoul content={data.content} />
    <SectionBios2 content={data.content} />
    <SectionSupporting content={data.content} />
  </Layout>
)

function Hero({ content }) {
  return (
    <div
      id="hero"
      className="h-screen max-h-screen bg-hero bg-center bg-contain"
    >
      {/* bg-contain opacity-90 */}
      <Header />
      <div className="z-10 absolute top-5 left-5 ">
        <h1 className="text-8xl font-serif normal-case">Living as Sacred</h1>
        <h1 className=" text-8xl font-serif uppercase">May – July 2022</h1>
        <h1 className="text-8xl font-serif uppercase">
          <em>Online</em>
        </h1>
        <div className="z-40">
          <Button cta={content.ctaIntro} url={content.ctaIntroEmail} />
        </div>
      </div>
      {/* <div className="relative left-1/2 top-1/2 z-40">
        <Button cta={content.ctaIntro} url={content.ctaIntroEmail} />
      </div> */}
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div className="section  z-10  section-center">
      <span className="w-3/4">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="text-center">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function SectionAbout({ content }) {
  return (
    <div id="about" className="section-grid top-margin-medium xl:px-48">
      <div className="col-start-4 col-span-6">
        <h1 className="text-center">{content.aboutSectionTitle} </h1>
        <span className="text-center">
          <StructuredText data={content.aboutText} />
        </span>
      </div>

      {/* Mission */}
      <div className="top-margin-medium col-start-1 md:col-span-4 text-left">
        <div className="image-div">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className=" max-w-full object-cover relative rounded-full"
          />
        </div>
        <h1 className="text-left">{content.missionSectionTitle}</h1>

        <StructuredText data={content.mission} />
      </div>
      {/* Purpose */}
      <div className="md:col-start-5 md:col-span-4 flex flex-col items-center justify-center">
        <div className="image-div">
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
          />
        </div>
        <h1 className="text-left">{content.purposeSectionTitle}</h1>
        <StructuredText data={content.purpose} />
      </div>
      {/* Vision */}
      <div className="md:col-start-9 md:col-span-4  flex flex-col items-center ">
        <div className="image-div">
          <GatsbyImage
            image={content.visionImage.gatsbyImageData}
            alt={content.visionImage.alt}
            placeholder="blurred"
          />
        </div>
        <h1 className="text-left">{content.visionSectionTitle}</h1>
        <StructuredText data={content.vision} />
      </div>

      <div className="flex justify-center">
        <Button cta={content.cta1} url={content.cta1Email} />
      </div>
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="section">
      <span className="col-start-2 col-span-10">
        <h4 className="text-center">{content.joannaMacyQuote}</h4>
        <p className="text-center normal-case">—Joanna Macy</p>
      </span>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="section flex justify-between">
      <div className="w-1/2">
        <h1 className="text-center">{content.valuesSectionTitle}</h1>
        <h2 className="text-center">
          <ul>
            {content.valuesList.map((block, i) => (
              <li className="list-none" key={i}>
                <StructuredText data={block.value} />
              </li>
            ))}
          </ul>
        </h2>
      </div>
      <div className="border border-red">
        <GatsbyImage
          image={content.valuesImage.gatsbyImageData}
          alt={content.valuesImage.alt}
          placeholder="blurred"
          className="m-5"
        />
      </div>
    </div>
  )
}

function SectionOffering({ content }) {
  return (
    <div id="offering" className="section">
      <h1>{content.offeringSectionTitle}</h1>

      <div className="relative z-10">
        {content.offeringItem.map((block, i) => (
          <div className="flex justify-end " key={block.id} key={i}>
            {block.model.apiKey === "offering" && (
              <Accordion
                index={i}
                excerpt={block.offeringShortText}
                fullText={block.offeringItemText}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionTimeline({ content }) {
  return (
    <div className="section">
      <h1>{content.timelineSectionTitle}</h1>
    </div>
  )
}

function SectionValue({ content }) {
  return (
    <div className="section section-grid gap-10">
      <h1 className="text-center col-span-12">{content.valueSectionTitle}</h1>
      <div className="col-start-1 col-span-7">
        <div className="self-center">
          <h2 className="text-7xl text-center">
            <StructuredText data={content.price} />
          </h2>
          <p className="text-right">{content.priceSubtext}</p>
        </div>
      </div>
      <div className="col-start-9 col-span-4">
        <h1 className="text-left">{content.offerResumeSectionTitle}</h1>
        <ul>
          {content.including.map((block, i) => (
            <li key={i}>{block.offeringBulletPoint}</li>
          ))}
        </ul>
      </div>
      <div className="col-start-6 col-span-2 place-self-center">
        <Button cta={content.cta2} url={content.cta2Email} />
      </div>
    </div>
  )
}

function SectionSoul({ content }) {
  return (
    <div className="section section-center">
      <div className="w-2/3">
        <h1>{content.soulSectionTitle}</h1>
        <h4>
          <ul>
            {content.soulBulletPoints.map((block, i) => (
              <li className="list-none text-center mb-5" key={i}>
                {block.text}
              </li>
            ))}
          </ul>
        </h4>

        <StructuredText data={content.ifYourSoulIsCallingFor} />
      </div>
    </div>
  )
}

function SectionBios2({ content }) {
  console.log(content.women)
  return (
    <div className="section section-center" id="women">
      <h1>{content.womenSectionTitle}</h1>
      <div className="lg:mx-16 top-margin-medium">
        <div className="w-full">
          <div className="w-full h-full">
            {/* Main bios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10">
              {content.women.map((node, i) => {
                return (
                  node.isMainOrganiser && (
                    <Link
                      to={`/women/${node.slug}`}
                      className="block  cursor-pointer relative"
                      key={i}
                    >
                      <div className="relative">
                        <div className="overflow-hidden pb-0 w-full relative team-member group">
                          <div className="w-full relative overflow-hidden team-member__inner">
                            <div className="overflow-hidden">
                              <div className="">
                                <GatsbyImage
                                  image={node.image.gatsbyImageData}
                                  alt={node.image.alt}
                                  placeholder="blurred"
                                  className="rounded-full"
                                />
                                <div className="team-member__image-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"></div>

                                <div className="absolute bottom-0 left-0 right-0 w-full h-64 z-20 team-member__image-gradient"></div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 group-hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                            <span className="-mt-6">Read Bio</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
                            <div className="border-b border-white pb-2">
                              <span className="text-lg md:text-xl xl:text-3xl block pb-px leading-none text-cream mb-1">
                                {node.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )
              })}
            </div>
            {/* All bios */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {content.women.map((node, i) => {
                return (
                  !node.isMainOrganiser && (
                    <Link
                      to={`/women/${node.slug}`}
                      className="block  cursor-pointer relative"
                      key={i}
                    >
                      <div className="relative">
                        <div className="overflow-hidden pb-0 w-full relative team-member group">
                          <div className="w-full relative overflow-hidden team-member__inner">
                            <div className="overflow-hidden">
                              <div className=" ">
                                <GatsbyImage
                                  image={node.image.gatsbyImageData}
                                  alt={node.image.alt}
                                  placeholder="blurred"
                                  className="rounded-2xl"
                                />
                                {/* <div className="team-member__image-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"></div>
                                <div className="absolute bottom-0 left-0 right-0 w-full h-64 z-20 team-member__image-gradient"></div> */}
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 group-hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                            <span className="-mt-6">Read Bio</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
                            <div className="border-b border-white pb-2">
                              <span className="text-lg md:text-xl xl:text-2xl block pb-px leading-none text-white mb-1">
                                {node.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionSupporting({ content }) {
  return (
    <div className="section">
      <h1>{content.supportingSectionTitle}</h1>
      <div>
        {content.supportedProject.map((block, i) => (
          <h3 key={i}>
            <a href={block.link} target="_blank" rel="noreferrer noopener">
              {" "}
              {block.projectName}
            </a>
          </h3>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome(locale: { eq: "en" }) {
      ctaIntro
      ctaIntroEmail
      introSectionTitle
      introtext1 {
        value
      }
      aboutSectionTitle
      aboutText {
        value
      }
      missionSectionTitle
      visionSectionTitle
      purposeSectionTitle
      mission {
        value
      }
      purpose {
        value
      }
      vision {
        value
      }
      missionImage {
        gatsbyImageData(height: 500)
        alt
      }
      visionImage {
        gatsbyImageData(height: 500)
        alt
      }
      purposeImage {
        gatsbyImageData(height: 500)
        alt
      }
      cta1
      cta1Email
      joannaMacyQuote
      valuesSectionTitle
      valuesList {
        ... on DatoCmsValue {
          order
          value {
            value
          }
        }
      }
      valuesImage {
        gatsbyImageData(height: 800)
        alt
      }
      offeringSectionTitle
      offeringItem {
        ... on DatoCmsOffering {
          id
          model {
            apiKey
          }
          order
          offeringShortText {
            value
          }
          offeringItemText {
            value
          }
        }
      }
      timelineSectionTitle
      contentModules {
        ... on DatoCmsModule {
          id
          model {
            apiKey
          }
          order
          title
          startDate(formatString: "MM-DD-YYYY")
          endDate(formatString: "MM-DD-YYYY")
          moduleDescription {
            value
          }
          weeks {
            ... on DatoCmsWeekContent {
              id
              model {
                apiKey
              }
              weekNumber
              weekName
              womanName
            }
          }
        }
      }
      valueSectionTitle
      price {
        value
      }
      priceSubtext
      offerResumeSectionTitle

      including {
        ... on DatoCmsIncluding {
          id
          model {
            apiKey
          }
          offeringBulletPoint
        }
      }

      cta2
      cta2Email
      soulSectionTitle
      ifYourSoulIsCallingFor {
        value
      }
      soulBulletPoints {
        ... on DatoCmsSoulCallingForBulletPoint {
          order
          text
        }
      }
      womenSectionTitle
      women {
        ... on DatoCmsWoman {
          slug
          name
          isMainOrganiser
          bio {
            value
          }
          image {
            gatsbyImageData(
              height: 750
              width: 600
              imgixParams: { fit: "crop" }
            )
            alt
          }
        }
      }
      supportingSectionTitle
      supportedProject {
        ... on DatoCmsSupportedProject {
          id
          model {
            apiKey
          }
          projectName
          link
        }
      }
      instagram
      telegram
    }
  }
`
