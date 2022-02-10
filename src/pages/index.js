import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import { content } from "../../tailwind.config"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import Accordion from "../components/Accordion"

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
    <SectionBios2 content={data.content} />
    <SectionSupporting content={data.content} />
  </Layout>
)

function Hero({ content }) {
  return (
    <div className="h-screen max-h-screen bg-banner bg-center bg-contain opacity-80">
      {/* bg-contain opacity-90 */}
      <Header />
      <div className="z-10 absolute top-5 left-5 ">
        <h1 className="text-8xl font-serif normal-case text-red">
          Living as Sacred
        </h1>
        <h1 className="uppercase text-8xl font-serif text-red">
          May – July 2022
        </h1>
        <h1 className="uppercase text-8xl font-serif text-red">
          <em>Online</em>
        </h1>
      </div>
      {/* <div className="-z-50 max-h-screen flex justify-center">
        <GatsbyImage
          image={content.logo.gatsbyImageData}
          alt={content.logo.alt}
          placeholder="blurred"
          className="-z-50"
        />
      </div> */}
      <div className="relative left-1/2 top-1/2 z-40">
        <Button cta={content.ctaIntro} url={content.ctaIntroEmail} />
      </div>
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div className="section z-10 flex items-center justify-center">
      <span className="w-3/4">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="text-center">{content.introtext}</h2>
      </span>
    </div>
  )
}

function SectionAbout({ content }) {
  return (
    <div className="section flex items-center justify-center">
      <span className="w-3/4">
        <h1 className="text-center">{content.aboutSectionTitle} </h1>
        <h2 className="text-center">{content.aboutSentence}</h2>
      </span>
    </div>
  )
}

function SectionMission({ content }) {
  return (
    <div className="section col-span-12 flex items-center justify-center">
      <Button cta={content.cta1} url={content.cta1Email} />{" "}
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="section bg-red text-cream">
      <span className="col-start-2 col-span-10">
        <h2 className="text-center">{content.joannaMacyQuote}</h2>
        <h3 className="text-center border-b-orange-50normal-case">
          —Joanna Macy
        </h3>
      </span>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="section flex justify-between">
      <div className="w-1/2">
        <h1>{content.valuesSectionTitle}</h1>
        <h2 className="text-7xl z-20 relative">
          <StructuredText data={content.values} />
        </h2>
        <StructuredText data={content.valuesText} />
      </div>
      <div className="border border-red">
        <StaticImage
          src="../images/1.jpg"
          alt="test"
          width="600"
          className="m-5"
          aspectRatio={1 / 1}
        />
      </div>
    </div>
  )
}

function SectionOffering({ content }) {
  return (
    <div className="section">
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
  return <div className="section"> </div>
}

function SectionValue({ content }) {
  return (
    <div className="section">
      <h1 className="text-center">{content.valueSectionTitle}</h1>
      <h2 className="text-center">
        <StructuredText data={content.price} />
      </h2>
      <h1 className="mt-10 text-center">{content.offerResumeSectionTitle}</h1>
      <h2>
        <StructuredText data={content.offerResume} />
      </h2>
      <Button cta={content.cta2} url={content.cta2Email} />
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

// function SectionBios2({ content }) {
//   return (
//     <div
//       className="section pt-2 bg-cream w-full relative z-20 -mt-1"
//       id="women"
//     >
//       <div className=" relative z-20 text-white -mx-4 md:-mx-8">
//         <div className=" mx-auto relative">
//           <div className="w-full flex flex-wrap content-center justify-center px-4 md:px-8">
//             <div className="w-full md:w-2/3 lg:w-8/12 ml-auto  h-full order-1 md:order-2 block md:block">
//               <div className="flex flex-wrap  justify-end">
//                 {content.women.map((node, i) => {
//                   return (
//                     <Link
//                       to={`/women/${node.slug}`}
//                       className="block w-1/2 md:w-1/3 cursor-pointer relative"
//                       key={i}
//                     >
//                       <div className="relative">
//                         <div className="overflow-hidden pb-0 w-full relative team-member group">
//                           <div
//                             className="w-full relative overflow-hidden team-member__inner"
//                             data-scroll
//                           >
//                             <div className="overflow-hidden">
//                               <div className="image-reveal-scroll relative">
//                                 <GatsbyImage
//                                   image={node.image.gatsbyImageData}
//                                   alt={node.image.alt}
//                                   placeholder="blurred"
//                                   aspectRatio={1 / 1}
//                                   width={200}
//                                   layout="fixed"
//                                 />
//                                 <div className="team-member__image-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"></div>

//                                 <div className="absolute bottom-0 left-0 right-0 w-full h-64 z-20 team-member__image-gradient"></div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 group-hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
//                             <span className="-mt-6">Read Bio</span>
//                           </div>
//                           <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
//                             <div className="border-b border-white pb-2">
//                               <span className="text-lg md:text-xl xl:text-2xl block pb-px leading-none text-white mb-1">
//                                 {node.name}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function SectionBios2({ content }) {
  return (
    <div className="section " id="women">
      <div className=" ">
        <div className="w-full flex flex-wrap">
          <div className="w-full  h-full order-1 md:order-2 block md:block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {content.women.map((node, i) => {
                return (
                  <Link
                    to={`/women/${node.slug}`}
                    className="block  cursor-pointer relative"
                    key={i}
                  >
                    <div className="relative">
                      <div className="overflow-hidden pb-0 w-full relative team-member group">
                        <div
                          className="w-full relative overflow-hidden team-member__inner"
                          data-scroll
                        >
                          <div className="overflow-hidden">
                            <div className="rounded-2xl ">
                              <GatsbyImage
                                image={node.image.gatsbyImageData}
                                alt={node.image.alt}
                                placeholder="blurred"
                                // aspectRatio={1 / 1}

                                aspectRatio={1 / 1}
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
                            <span className="text-lg md:text-xl xl:text-2xl block pb-px leading-none text-white mb-1">
                              {node.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome(locale: { eq: "en" }) {
      ctaIntro
      ctaIntroEmail
      logo {
        gatsbyImageData(height: 900)
        alt
      }
      joannaMacyQuote
      introSectionTitle
      introtext
      aboutSectionTitle
      aboutSentence
      cta1
      cta1Email
      valuesSectionTitle
      valuesText {
        value
      }
      values {
        value
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
      valueSectionTitle
      price {
        value
      }
      offerResumeSectionTitle
      offerResume {
        value
      }
      cta2
      cta2Email
      soulSectionTitle
      ifYourSoulIsCallingFor {
        value
      }
      essenceSectionTitle
      womenSectionTitle
      women {
        ... on DatoCmsWoman {
          id
          model {
            apiKey
          }
          slug
          name
          weekNumber
          bio {
            value
          }
          image {
            gatsbyImageData(
              height: 500
              width: 400
              imgixParams: { fit: "crop" }
            )
            alt
          }
        }
      }

      supportingSectionTitle
      instagram
      telegram
    }
  }
`
