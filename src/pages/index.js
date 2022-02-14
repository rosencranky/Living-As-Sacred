import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Footer from "../components/footer"
import SEO from "../components/seo"
import Button from "../components/Button"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import AccordionGrid from "../components/Accordiongrid"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Landing page for Living as Sacred .." />
    <Hero content={data.content} />
    <SectionIntro content={data.content} />
    <SectionAbout content={data.content} />
    <SectionJoannaMacy content={data.content} />
    {/* <SectionBanner /> */}
    <SectionValues content={data.content} />

    <SectionOffering content={data.content} />

    <SectionTimeline content={data.content} />
    <SectionQs content={data.content} />
    <SectionValue content={data.content} />

    <SectionBios2 content={data.content} />
    {/* <SectionSoul2 content={data.content} /> */}
    <SectionSoul1 content={data.content} />
    {/* <Supporting content={data.content} /> */}
    <Footer content={data.content} />
  </Layout>
)

function Hero({ content }) {
  return (
    <div
      id="hero"
      className="h-screen max-h-screen bg-hero bg-center bg-contain bg-no-repeat"
    >
      {/* bg-contain opacity-90 */}
      <Header />
      <div className="z-10 absolute top-5 left-5 ">
        <h1 className="xl:text-7xl 2xl:text-8xl font-serif normal-case">
          Living as Sacred
        </h1>
        <h1 className=" xl:text-7xl 2xl:text-8xl font-serif uppercase">
          May – July 2022
        </h1>
        <h1 className="xl:text-7xl 2xl:text-8xl font-serif uppercase">
          <em>Online</em>
        </h1>
        {/* <div className="z-40">
          <Button cta={content.ctaIntro} url={content.ctaIntroEmail} />
        </div> */}
      </div>
      {/* <div className="relative left-1/2 top-1/2 z-40">
        <Button cta={content.ctaIntro} url={content.ctaIntroEmail} />
      </div> */}
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div id="about" className="section  z-10  section-center ">
      <span className="w-3/4">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="text-center leading-tightest">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function SectionAbout({ content }) {
  return (
    <div className="section-grid top-margin-medium   w-full pt-10 justify-items-center items-end">
      {/* Mission */}
      <div className="col-start-1 md:col-span-4 text-center lg:pl-16">
        <h1 className="text-center">{content.missionSectionTitle}</h1>
        <div className="image-div ">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className="rounded-full hover:rounded-none transition ease-in-out duration-300 p-5 m-5 border  border-green"
          />
        </div>
        <p className="mx-3 leading-tight">
          <StructuredText data={content.mission} />
        </p>
      </div>
      {/* Purpose */}
      <div className="md:col-start-5 md:col-span-4 px-8">
        <h1 className="text-center mx-8">{content.purposeSectionTitle}</h1>
        <div className="image-div">
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
            className="rounded-full hover:rounded-none transition ease-in-out duration-300 p-5 m-5 border  border-green"
          />
        </div>

        <p className="mx-3 leading-tight">
          {" "}
          <StructuredText data={content.purpose} />
        </p>
      </div>
      {/* Vision */}
      <div className="md:col-start-9 md:col-span-4 lg:pr-16">
        <h1 className="text-center">{content.visionSectionTitle}</h1>
        <div className="image-div">
          <GatsbyImage
            image={content.visionImage.gatsbyImageData}
            alt={content.visionImage.alt}
            placeholder="blurred"
            className="rounded-full hover:rounded-none transition ease-in-out duration-300 delay-50 p-5 m-5 border  border-green"
          />
        </div>
        <p className="mx-3 leading-tight">
          <StructuredText data={content.vision} />
        </p>
      </div>

      <div className="col-start-1 col-span-12 place-self-center">
        <Button cta={content.cta1} url={content.cta1Email} />
      </div>
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="mx-36  my-24 ">
      {/* bg-texture bg-contain py-32 */}
      <span className="col-start-2 col-span-10">
        <h4 className="text-center text-red">{content.joannaMacyQuote}</h4>
        <p className="text-center text-red monotext">—Joanna Macy</p>
      </span>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="section-full">
      <h1 className="text-center">{content.valuesSectionTitle}</h1>
      <div className="grid grid-cols-12 place-items-center place-content-center items-center">
        <h2 className="text-center col-start-1 col-span-3">
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[0].value} />
          </span>
          ·
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[1].value} />
          </span>
          ·
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[2].value} />
          </span>
        </h2>

        <div className=" flex justify-center my-10 col-start-4 col-span-6 ">
          <GatsbyImage
            image={content.valuesImage.gatsbyImageData}
            alt={content.valuesImage.alt}
            placeholder="blurred"
            className="border  border-green hover:rounded-full"
          />
        </div>
        <h2 className="text-center col-start-10 col-span-3  ">
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[3].value} />·
          </span>
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[4].value} />·
          </span>
          <span className="hover:text-green ">
            <StructuredText data={content.valuesList[5].value} />
          </span>
        </h2>
      </div>
    </div>
  )
}

function SectionOffering({ content }) {
  return (
    <div id="offering" className="section  ">
      <h4 className="xl:mx-24 2xl:mx-32 text-center">{content.ctaSentence}</h4>
      <div className="flex justify-center">
        <Button cta={content.cta2} url={content.cta2Email} />
      </div>
      <h1 className="top-margin-lg text-center">
        {content.offeringSectionTitle}
      </h1>

      <div className="top-margin-medium relative z-10 grid grid-cols-4 grid-rows-2 shadow-sm hover:text-green">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-r border-t border-cream  bg-green hover:bg-beige text-cream hover:text-green ${
              i < 3 || i == 0 ? "border-t" : "border-b"
            } ${i % 4 == 0 ? "border-l" : ""}`}
            key={block.id}
            key={i}
          >
            {block.model.apiKey === "offering" && (
              <AccordionGrid
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
    <div id="timeline" className="section-full">
      <h1 className="text-center  z-50">{content.timelineSectionTitle}</h1>

      <div className="grid grid-cols-5 gap-5 z-10">
        {content.contentModules.map((block, i) => (
          <div
            key={block.id}
            key={i}
            className="grid grid-rows-3 auto-rows-fr gap-y-10  hover:bg-beige p-3 z-10 "
          >
            {/* Title */}
            <div className="row-start-1 row-span-1 border-b-2 border-red self-end">
              <h2 className="text-center leading-none pb-5">{block.title}</h2>
              <span className="flex justify-between monotext">
                <p className="inline-block">{block.startDate}</p>
                <p className="inline-block">{block.endDate}</p>
              </span>
            </div>
            {/* Weeks */}
            <div className="row-start-2 row-span-1 flex justify-evenly  ">
              {block.weeks.map((week, i) => (
                <div key={week.id} key={i} className="">
                  <div className="grid grid-rows-2 items-start">
                    <h3 className="row-start-1 row-end-1 bg-green w-12 h-12 2xl:w-16 2xl:h-16 mb-16 rounded-full text-cream text-center flex justify-center items-center">
                      {week.weekNumber}
                    </h3>

                    <p className="row-start-2 transform rotate-45 monotext leading-tight uppercase text-green">
                      {week.womanName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="row-start-3 text-sm 2xl:text-base leading-tight -mt-16 text-darkgreen">
              {" "}
              <StructuredText data={block.moduleDescription} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// function SectionQs({ content }) {
//   return (
//     <div className="section-full pb-24">
//       <div className="2xl:max-h-screen grid grid-rows-3 grid-cols-12 items-center ">
//         <div className="z-0 col-start-1 col-span-4 row-start-1  ">
//           <GatsbyImage
//             image={content.valueImages[0].gatsbyImageData}
//             alt={content.valueImages[0].alt}
//             placeholder="blurred"
//             className="border  border-green"
//             width={600}
//           />
//         </div>
//         <h4 className="z-10 col-start-5 col-end-13  mx-32 text-center self-start  row-start-1">
//           Do you feel the call to learn to walk in your truth and power with
//           integrity and respect for all beings?
//         </h4>
//         <div className="z-0  col-end-13 col-span-4 self-start">
//           <GatsbyImage
//             image={content.valueImages[1].gatsbyImageData}
//             alt={content.valueImages[1].alt}
//             placeholder="blurred"
//             className="border  border-green"
//             height={600}
//           />
//         </div>
//         <h2 className="z-10 col-start-1 col-end-7  row-start-2 text-left ml-10 ">
//           To activate your own voice to sing and pray and manifest a new world?
//         </h2>
//         <div className="z-0 col-start-2 col-span-4 row-start-3  ">
//           <GatsbyImage
//             image={content.valueImages[2].gatsbyImageData}
//             alt={content.valueImages[2].alt}
//             placeholder="blurred"
//             className="border  border-green"
//             width={600}
//           />
//         </div>
//         <h2 className="z-10 col-start-7 col-end-13  row-start-3  text-right mr-10 self-end">
//           To remember your interdependence with the natural world and how to
//           connect with the earth and all its beings?
//         </h2>
//       </div>
//     </div>
//   )
// }

function SectionQs({ content }) {
  return (
    <div className="section-full pb-24">
      <div className=" grid grid-rows-3 grid-cols-12 items-center ">
        <div className="z-0 col-start-1 col-span-4 row-start-1  ">
          <GatsbyImage
            image={content.valueImages[0].gatsbyImageData}
            alt={content.valueImages[0].alt}
            placeholder="blurred"
            className="border  border-green"
          />
        </div>
        <h4 className="z-10 col-start-5 col-end-13  xl:mx-8 2xl:mx-32 text-center self-center  row-start-1">
          Is your soul calling for ...
        </h4>
        {/* <h3 className="z-10 col-start-6 col-end-13 ">
          learn to walk in your truth and power with integrity and respect for
          all beings?
        </h3> */}
        <div className="z-0  col-end-13 col-span-4 self-center">
          <GatsbyImage
            image={content.valueImages[1].gatsbyImageData}
            alt={content.valueImages[1].alt}
            placeholder="blurred"
            className="border  border-green"
          />
        </div>
        <h3 className="max-w-prose z-10 col-start-1 col-end-8  row-start-2 text-left ml-10 text-xl">
          <ul className="">
            {/* To activate your own voice to sing and pray and manifest a new world? */}
            <li>{content.soulBulletPoints[0].text}</li>
            <li>{content.soulBulletPoints[1].text}</li>
            <li>{content.soulBulletPoints[2].text}</li>
            <li> {content.soulBulletPoints[3].text}</li>
          </ul>
        </h3>
        <div className="z-0 col-start-2 col-span-4 row-start-3  ">
          <GatsbyImage
            image={content.valueImages[2].gatsbyImageData}
            alt={content.valueImages[2].alt}
            placeholder="blurred"
            className="border  border-green"
          />
        </div>
        <h3 className="z-10 text-xl col-start-7 col-end-13  row-start-3  text-left mr-10 self-center">
          <ul>
            <li>{content.soulBulletPoints[4].text}</li>

            <li> {content.soulBulletPoints[5].text}</li>

            <li>{content.soulBulletPoints[6].text}</li>

            <li>{content.soulBulletPoints[7].text}</li>
          </ul>
        </h3>
      </div>
    </div>
  )
}

function SectionValue({ content }) {
  return (
    <div className="section lg:mx-16 2xl:mx-10 bg-green px-16 2xl:px-0 xl:py-10 2xl:py-12 mb-12 shadow-sm">
      <h1 className="text-center text-cream ">{content.valueSectionTitle}</h1>
      <div className="section-center w-7/8 2xl:w-full">
        <div className="col-start-1 col-span-7">
          <div className="self-center">
            <h2 className="xl:text-6xl 2xl:text-7xl text-center text-cream">
              <StructuredText data={content.price} />
            </h2>
            <p className="text-right text-cream">{content.priceSubtext}</p>
          </div>
        </div>

        <div className="top-margin-sm flex items-start">
          <div className="w-7/12">
            <h1 className="text-left text-cream">
              {content.offerResumeSectionTitle}
            </h1>
            <ul className=" text-cream">
              {content.including.map((block, i) => (
                <li key={i}>{block.offeringBulletPoint}</li>
              ))}
            </ul>
          </div>
          <div className="justify-self-start">
            <h1 className="text-cream">{content.paymentTermsTitle}</h1>
            <p className="text-cream">{content.paymentTerms}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button2 cta={content.cta2} url={content.cta2Email} />
      </div>
    </div>
  )
}

function Button2({ cta, url }) {
  return (
    <div className="mt-6 mb-3">
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block bg-green hover:bg-red px-4 py-2 monotext no-underline text-cream  leading-none shadow-sm border border-cream"
      >
        {cta}
      </a>
    </div>
  )
}

function SectionSoul1({ content }) {
  return (
    <div className="section  section-center">
      <div className="flex justify-between ">
        <span className="w-1/2">
          <h2 className="text-left">
            {" "}
            <StructuredText data={content.ifYourSoulIsCallingForIntro} />
          </h2>
          <p className="flex justify-center w-5/6 leading-tight">
            {" "}
            <StructuredText data={content.ifYourSoulIsCallingFor} />
          </p>
          <div className="">
            <Button cta={content.cta2} url={content.cta2Email} />
          </div>
        </span>
        <div className="flex justify-center items-center">
          <GatsbyImage
            image={content.horizontalImage.gatsbyImageData}
            alt={content.horizontalImage.alt}
            placeholder="blurred"
            className=""
          />
        </div>
      </div>
    </div>
  )
}

function SectionBanner() {
  return (
    <div className="mt-16 min-h-screen w-full bg-wood bg-center bg-contain"></div>
  )
}

function SectionSoul2({ content }) {
  return (
    <div className="section flex justify-between bg-beige p-12">
      <div className="image-div w-1/2">
        <GatsbyImage
          image={content.horizontalImage.gatsbyImageData}
          alt={content.horizontalImage.alt}
          placeholder="blurred"
          className=""
        />
      </div>
      <div className="ml-16 w-1/2 ">
        <h2 className="z-10 text-red  text-left">{content.soulSectionTitle}</h2>
        <h3 className="mt-5 ">
          <ul className="">
            {content.soulBulletPoints.map((block, i) => (
              <li className="mb-6" key={i}>
                {block.text}
              </li>
            ))}
          </ul>
        </h3>
      </div>
      {/* <div className="flex justify-center">
          <Button cta={content.cta2} url={content.cta2Email} />
        </div> */}
    </div>
  )
}

function SectionBios2({ content }) {
  console.log(content.women)
  return (
    <div className="section section-center " id="women">
      <span className="text-center">
        <h1>{content.womenSectionTitle}</h1>
      </span>
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
                              <GatsbyImage
                                image={node.image.gatsbyImageData}
                                alt={node.image.alt}
                                placeholder="blurred"
                                className="rounded-full hover:rounded-none border border-green"
                              />
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-cream opacity-0 group-hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                            <span className="-mt-6 monotext text-white">
                              Read Bio
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
                            <div className="pb-6 ">
                              <h3 className="block text-center  text-cream mb-1">
                                {node.name}
                              </h3>
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
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
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
                              <div className="hover:border border-red ">
                                <GatsbyImage
                                  image={node.image.gatsbyImageData}
                                  alt={node.image.alt}
                                  placeholder="blurred"
                                  className=""
                                />
                                {/* <div className="team-member__image-bg absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0"></div>
                                <div className="absolute bottom-0 left-0 right-0 w-full h-64 z-20 team-member__image-gradient"></div> */}
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 group-hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                            <span className="-mt-6 monotext text-white">
                              Read Bio
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 w-full z-30 p-3">
                            <div className=" pb-2">
                              <h3 className="block text-center text-white mb-1">
                                {node.name}
                              </h3>
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

function Supporting({ content }) {
  return (
    <div className="section  flex flex-col justify-center items-center">
      <h1>{content.supportingSectionTitle}</h1>

      {content.supportedProject.map((block, i) => (
        <h2 className="block my-3" key={i}>
          <a
            href={block.link}
            target="_blank"
            rel="noreferrer noopener"
            className="no-underline hover:underline"
          >
            {" "}
            {block.projectName}
          </a>
          <br />
        </h2>
      ))}
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
        gatsbyImageData(height: 400, width: 400, imgixParams: { fit: "crop" })
        alt
      }
      visionImage {
        gatsbyImageData(height: 400, width: 400, imgixParams: { fit: "crop" })
        alt
      }
      purposeImage {
        gatsbyImageData(height: 400, width: 400, imgixParams: { fit: "crop" })
        alt
      }
      cta1
      cta1Email
      joannaMacyQuote
      ctaSentence
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
        gatsbyImageData(height: 550, width: 550, imgixParams: { fit: "crop" })
        alt
      }

      valueImages {
        gatsbyImageData
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
          startDate(formatString: "DD/MM")
          endDate(formatString: "DD/MM")
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
              womanName
            }
          }
        }
      }
      valueSectionTitle
      price {
        value
      }
      paymentTerms
      paymentTermsTitle
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
      horizontalImage {
        gatsbyImageData(height: 500, width: 500, imgixParams: { fit: "crop" })
        alt
      }
      soulSectionTitle
      ifYourSoulIsCallingFor {
        value
      }
      ifYourSoulIsCallingForIntro {
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
