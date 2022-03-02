import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Footer from "../components/footer"
import SEO from "../components/seo"
import Button from "../components/Button"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import AccordionGrid from "../components/Accordiongrid"
import Marquee from "react-fast-marquee"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Landing page for Living as Sacred." />
    <div className="z-50 sticky top-0 left-0 ">
      <Marquee className="h-6 monotext text-cream bg-red" gradient={false}>
        {data.content.priceBanner}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {data.content.priceBanner}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {data.content.priceBanner}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </Marquee>
    </div>

    <Hero content={data.content} />
    <SectionIntro content={data.content} />
    <SectionAbout content={data.content} />
    <SectionJoannaMacy content={data.content} />
    <SectionValues content={data.content} />
    <SectionOffering content={data.content} />
    <CTASectionMove content={data.content} />

    <SectionTimeline content={data.content} />
    <CTASectionPlants content={data.content} />
    <SectionValue content={data.content} />
    <SectionBios2 content={data.content} />
    <Supporting content={data.content} />

    <SectionSoul content={data.content} />

    <Footer content={data.content} />
  </Layout>
)

function Hero({ content }) {
  return (
    <div
      id="hero"
      className="h-screen max-h-screen bg-hero bg-center bg-contain"
    >
      <Header />
      <div className="z-10 absolute top-10 left-5 ">
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-serif normal-case text-red tracking-tight">
          Living · as · Sacred
        </h1>
        <h1 className=" text-6xl xl:text-7xl 2xl:text-8xl font-serif uppercase text-red tracking-tight">
          May – July 2022
        </h1>
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-serif uppercase text-red tracking-tight">
          <em>Online</em>
        </h1>
      </div>
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div id="about" className="section section-center z-10 ">
      <span className="lg:w-5/6">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="text-center leading-tightest text-red">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function SectionAbout({ content }) {
  return (
    <div className="section block md:grid mx-medium grid-cols-3 gap-x-3 bg-beige rounded-xl p-10">
      {/* Mission */}
      <div className="col-start-1 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.missionSectionTitle}</h1>
        <div className=" top-margin-sm ">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className="rounded-full p-5 m-5 "
          />
        </div>
        <p className="mx-3 leading-tight">
          <StructuredText data={content.mission} />
        </p>
      </div>
      {/* Purpose */}
      <div className="mt-10 md:mt-0 md:col-start-2 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.purposeSectionTitle}</h1>
        <div
          className=" top-margin-sm
        "
        >
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
            className="rounded-full p-5 m-5 "
          />
        </div>

        <p className="mx-3 leading-tight">
          {" "}
          <StructuredText data={content.purpose} />
        </p>
      </div>
      {/* Vision */}
      <div className="mt-10 md:mt-0 md:col-start-3 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.visionSectionTitle}</h1>
        <div className=" top-margin-sm">
          <GatsbyImage
            image={content.visionImage.gatsbyImageData}
            alt={content.visionImage.alt}
            placeholder="blurred"
            className="rounded-full p-5 m-5"
          />
        </div>
        <p className="mx-3 leading-tight">
          <StructuredText data={content.vision} />
        </p>
      </div>
      <div className="col-span-3 flex justify-center place-self-center">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function ButtonBeige({ cta }) {
  return (
    <div className="mt-10 mb-3">
      <Link
        to="/contact"
        className="z-20 inline-block  border border-green rounded-2xl bg-beige hover:bg-green  text-black px-5 py-2 monotext text-sm 2xl:text-base no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
      >
        {cta}
      </Link>
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="mx-large top-margin-lg btm-margin-lg">
      <h4 className="text-center italic">{content.joannaMacyQuote}</h4>
      <p className="text-center monotext">—Joanna Macy</p>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="top-margin-lg w-full py-12 bg-beige bg-leaves bg-cover">
      <h1 className="text-center text-cream">{content.valuesSectionTitle}</h1>
      <div className="flex flex-wrap md:grid grid-cols-12 place-items-center place-content-center items-center">
        <h2 className="text-center col-start-1 col-span-3 text-black">
          <div className="border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[0].value} />
          </div>
          <span className="text-cream">·</span>
          <div className="border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[1].value} />
          </div>
          <span className="text-cream">·</span>
          <div className="border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[2].value} />
          </div>
        </h2>

        <div className="flex justify-center my-5 md:my-10 col-start-4 col-span-6 ">
          <GatsbyImage
            image={content.valuesImage.gatsbyImageData}
            alt={content.valuesImage.alt}
            placeholder="blurred"
            className="rounded-full  "
          />
        </div>
        <h2 className="text-center col-start-10 col-span-3 text-black">
          <div className=" border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[3].value} />
          </div>
          <span className="text-cream">·</span>
          <div className=" border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[4].value} />
          </div>
          <span className="text-cream">·</span>
          <div className=" border-black pdngsm rounded-3xl bg-beige hover:bg-green">
            <StructuredText data={content.valuesList[5].value} />
          </div>
        </h2>
      </div>
    </div>
  )
}

function SectionOffering({ content }) {
  return (
    <div id="offering" className="section ">
      <h4 className="top-margin-lg mx-large text-center">
        <StructuredText data={content.ctaS1} />
      </h4>
      <div className="flex justify-center">
        <Button cta={content.cta} />
      </div>
      <h1 className="top-margin-lg text-center">
        {content.offeringSectionTitle}
      </h1>
      {/* Desktop */}
      <div className="hidden lg:grid top-margin-medium relative z-10  lg:grid-cols-4 grid-rows-2  ">
        {content.offeringItem.map((block, i) => (
          <div
            className={`  border-cream border-l bg-darkcream hover:bg-beige  transition ease-in duration-100 rounded-xl ${
              i < 4 ? "border-b" : ""
            } ${i % 4 === 0 ? "border-l" : ""}`}
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
      {/* Small tablet */}
      <div className="hidden md:grid lg:hidden top-margin-medium relative z-10 md:grid-cols-2 grid-rows-2  hover:text-green">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-r border-b  border-green  bg-darkcream hover:bg-beige  rounded-xl transition ease-in duration-100 ${
              i < 2 ? "border-t-2" : ""
            } ${i % 2 === 0 ? "border-l" : ""}`}
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
      {/* mobile */}
      <div className="grid md:hidden top-margin-medium relative z-10 grid-cols-1 grid-rows-2  hover:text-green">
        {content.offeringItem.map((block, i) => (
          <div
            className={` border-t border-green  bg-darkcream hover:bg-beige  transition ease-in duration-100 ${
              i === 0 ? "border-b" : ""
            } `}
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

function CTASectionPlants({ content }) {
  return (
    <div className="top-margin-lg btm-margin-lg w-full flex flex-row justify-center items-center bg-plants bg-center bg-cover bg-no-repeat h-90">
      <div>
        <h4 className="mx-medium  text-center text-beige rounded-2xl pdng bg-darkgreen  ">
          <StructuredText data={content.ctaS3} />
        </h4>
        <div className="flex justify-center">
          <ButtonBeige cta={content.cta} />
        </div>
      </div>
    </div>
  )
}

function SectionTimeline({ content }) {
  return (
    <div
      id="timeline"
      className="section px-5 py-10 xl:min-h-screen  rounded-2xl bg-beige"
    >
      <h1 className="text-center  z-50">{content.timelineSectionTitle}</h1>

      <div className="grid grid-cols-5 z-10   ">
        {content.contentModules.map((block, i) => (
          <div
            key={block.id}
            key={i}
            className="grid grid-rows-3   gap-y-10  hover:bg-cream rounded-2xl transition ease-in duration-100 p-3 "
          >
            {/* Title */}
            <div className="md:transform -translate-y-10 row-start-1 row-span-1 border-b border-darkgreen self-end">
              <div className="flex flex-col items-stretch">
                <h2 className="text-center leading-none pb-5 text-black ">
                  {block.title}
                </h2>

                <span className="flex justify-between monotext">
                  <p className="inline-block">{block.startDate}</p>
                  <p className="inline-block">{block.endDate}</p>
                </span>
              </div>
            </div>
            {/* Weeks */}
            <div className="row-start-2 row-span-1 flex flex-col  justify-center ">
              {/* {block.weeks.map((week, i) => (
                <div key={week.id} key={i}>
                  <div className="inline-block justify-items-cemnter ">
                    <span className=" flex flex-col items-center justify-center">
                      <h3 className=" bg-red w-12 h-12 2xl:w-14 2xl:h-14 mb-16 rounded-full text-cream text-center flex justify-center items-center">
                        {week.weekNumber}
                      </h3>

                      <p className="leading-0  text-xs monotext text-left   uppercase inline-block ">
                        {week.womanName}
                      </p>
                    </span>
                  </div>
                </div>
              ))} */}
              {block.weeks.map((week, i) => (
                <div key={week.id} key={i}>
                  {/* <div className="inline-block justify-items-cemnter "> */}
                  <span className=" flex  items-center justify-between mb-3">
                    <h3 className=" bg-darkgreen w-12 h-12 2xl:w-14 2xl:h-14  rounded-full text-cream text-center flex justify-center items-center">
                      {week.weekNumber}
                    </h3>

                    <p className="flex-1 leading-0 lg:ml-3 text-sm monotext text-center   uppercase inline-block ">
                      {week.womanName}
                    </p>
                  </span>
                </div>
                // </div>
              ))}
            </div>
            <p className="row-start-3 text-sm 2xl:text-base leading-tight  -mt-4 px-2">
              {" "}
              <StructuredText data={block.moduleDescription} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionValue({ content }) {
  return (
    <div className="section mx-medium  rounded-xl px-8 py-10 2xl:py-10 mb-12  bg-beige">
      {/* <h1 className="text-center">{content.valueSectionTitle}</h1> */}
      <div className="md:grid grid-cols-6 gap-x-10 place-content-center">
        {/* Price */}
        <div className="col-start-1 col-span-4">
          <h1 className="text-center">{content.valueSectionTitle}</h1>
          {/* <h1 className="text-left  ">{content.valueSectionTitle}</h1> */}
          <h2 className="mt-12 text-5xl xl:text-7xl   text-center">
            {content.price}
          </h2>
          <p className="text-center monotext text-red mt-6">
            {content.priceSubtext}
          </p>
          <span className="top-margin-sm flex justify-center">
            <span>
              <h2 className="text-4xl xl:text-5xl 2xl:text-6xl text-center leading-none  line-through decoration-red decoration-2 inline-block mt-3">
                {content.price}
                {/* <span className="inline-block">*</span> */}
                {/* <sup className="inline-block text-red monotext">-20%</sup> */}
              </h2>
            </span>
            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl text-center leading-0 ml-5 p-2  border-2 border-red rounded-xl">
              210€
            </h2>
          </span>
        </div>

        <div className="col-start-5 col-span-4">
          <h1 className="text-left mt-12 md:mt-0">
            {content.offerResumeSectionTitle}
          </h1>
          <ul className="top-margin-sm ">
            {content.including.map((block, i) => (
              <li key={i}>{block.offeringBulletPoint}</li>
            ))}
          </ul>
          <h1 className="mt-8 md:mt-12 ">{content.paymentTermsTitle}</h1>
          <p className="top-margin-sm ">{content.paymentTerms}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function SectionBios2({ content }) {
  return (
    <div className="section section-center mx-medium " id="women">
      <h1 className="text-center">{content.womenSectionTitle}</h1>
      <div className=" top-margin-medium w-full h-full">
        {/* All bios */}
        <div className="grid grid-cols-2 md:grid-cols-5 place-content-center gap-2">
          {content.women.map((node, i) => {
            return (
              <Link
                to={`/women/${node.slug}`}
                className="block  cursor-pointer relative"
                key={i}
              >
                <div className="relative">
                  <div className="overflow-hidden pb-0 w-full relative">
                    <div className="w-full relative overflow-hidden">
                      <div className="overflow-hidden">
                        {node.isMainOrganiser && (
                          <div className="">
                            <GatsbyImage
                              image={node.image.gatsbyImageData}
                              alt={node.image.alt}
                              placeholder="blurred"
                              className=" rounded-3xl"
                            />
                          </div>
                        )}
                        {!node.isMainOrganiser && (
                          <div>
                            <GatsbyImage
                              image={node.image.gatsbyImageData}
                              alt={node.image.alt}
                              placeholder="blurred"
                              className="rounded-xl"
                            />
                          </div>
                        )}
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
          })}
        </div>
      </div>
    </div>
  )
}

function CTASectionMove({ content }) {
  return (
    <div className="top-margin-lg w-full  mb-12  flex justify-center flex-col  ">
      <div className="flex justify-between items-center ">
        <GatsbyImage
          image={content.ctaImage2.gatsbyImageData}
          alt={content.ctaImage2.alt}
          placeholder="blurred"
          className=" rounded-xl"
        />
        <GatsbyImage
          image={content.ctaImage3.gatsbyImageData}
          alt={content.ctaImage3.alt}
          placeholder="blurred"
          className="md:ml-5 rounded-xl"
        />
      </div>

      <h4 className="top-margin-medium mx-large text-center text-red ">
        <StructuredText data={content.ctaS2} />
      </h4>
      <div className="flex justify-center">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function SectionSoul({ content }) {
  return (
    <div className="section mx-sm">
      <div className="top-margin-medium md:flex justify-between ">
        <h4 className="text-left md:mr-10 w-2/3 text-red self-end">
          <StructuredText data={content.ifYourSoulIsCallingForIntro} />
          <div className="top-margin-medium ">
            <GatsbyImage
              image={content.soulImage.gatsbyImageData}
              alt={content.soulImage.alt}
              placeholder="blurred"
              className=" rounded-2xl "
            />
          </div>
        </h4>
        <span className="order-1 w-1/3 self-end">
          <p className="flex justify-center w-5/6 leading-tight">
            <StructuredText data={content.ifYourSoulIsCallingFor} />
          </p>
          <div className="">
            <Button cta={content.cta} />
          </div>
        </span>
      </div>
    </div>
  )
}

function Supporting({ content }) {
  return (
    <div className="top-margin-lg btm-margin-lg  py-10 mx-medium  bg-beige rounded-2xl">
      <h1 className="text-center">{content.supportingSectionTitle}</h1>

      <div className="md:flex flex-row justify-around items-center top-margin-medium">
        {content.supportedProject.map((block, i) => (
          <div>
            <h2 className="block my-3 text-center top-margin-sm" key={i}>
              <a
                href={block.link}
                target="_blank"
                rel="noreferrer noopener"
                className="no-underline hover:underline"
              >
                {block.projectName}
              </a>
              <br />
            </h2>
            <p className="text-center">Short description</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome(locale: { eq: "en" }) {
      cta
      priceBanner
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
      joannaMacyQuote
      ctaS1 {
        value
      }
      ctaS2 {
        value
      }
      ctaS3 {
        value
      }
      ctaImage2 {
        gatsbyImageData(width: 600, imgixParams: { fit: "crop" })
        alt
      }
      ctaImage3 {
        gatsbyImageData(height: 500, imgixParams: { fit: "crop" })
        alt
      }
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
        gatsbyImageData(height: 600, width: 600, imgixParams: { fit: "crop" })
        alt
      }
      offeringSectionTitle
      offeringItem {
        ... on DatoCmsOffering {
          id
          model {
            apiKey
          }
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
      price
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

      ifYourSoulIsCallingFor {
        value
      }
      ifYourSoulIsCallingForIntro {
        value
      }
      soulImage {
        gatsbyImageData(height: 600, imgixParams: { fit: "crop" })
        alt
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
