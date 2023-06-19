import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Button from "../components/Button"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import Accordion from "../components/Accordion"

export default function IndexPage({ data }) {
  return (
    <>
      <SEO
        title="Home"
        description="Living as Sacred is a movement to remember what it means to live in connection with our mother, ourselves, honouring all the relations with all the beings."
      />
      <Hero />
      <Intro content={data.content} />
      <About content={data.content} />
      <Quote content={data.content} />
      <Values content={data.content} />
      <CTASection content={data.content} />
      <Offering content={data.content} />
      <CTAMove content={data.content} />
      <Bios content={data.content} />
      <Timeline content={data.content} />
      <CTAPlants content={data.content} />
      <Price content={data.content} />
      <Soul content={data.content} />
      <Supporting content={data.content} />
      <Footer content={data.content} />
    </>
  )
}

function Hero() {
  return (
    <div
      id="hero"
      className="h-screen xl:h-screen max-h-screen md:bg-hero bg-center bg-contain bg-no-repeat"
    >
      <Header />
      <div className="z-10 absolute top-6 left-0 xl:top-10 xl:left-10">
        <h1 className="mt-0 ml-3 xl:mt-0 xl:ml-0 text-left text-3xl md:text-4xl lg:text-5xl xl:text-7xl  font-serif normal-case text-red tracking-tight leading-tighter">
          Living · as · Sacred
          <br /> 1 October – 14 April
          <br /> <em>Online</em>
        </h1>
      </div>
      <div className="block md:hidden z-0 translate-y-3 absolute bottom-[10%]">
        <StaticImage
          src="../images/living-as-sacred-logo-mobile.jpg"
          alt="logo"
          placeholder="blurred"
          className="z-0 overflow-hidden"
          width={500}
        />
      </div>
    </div>
  )
}

function Intro({ content }) {
  return (
    <div id="about" className="mt-0 xl:mt-52 xl:mx-24 mx-3 lg:mx-10 section-center ">
      <span className="xl:mx-9">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="z-10 text-center blockquote-sm xl:mt-10">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function About({ content }) {
  return (
    <div className="xl:mt-52">
      <div className="xl:mb- mt-40 mx-3 lg:mx-10 section-center">
      <span className="mx-medium content-end">
        <h1 className="text-center">{content.aboutSectionTitle} </h1>
      </span>
      </div>
    <div className="section block xl:mt-16 md:grid mx-medium grid-cols-3 gap-x-24 beige-card ">
      {/* Mission */}
      <div className="col-start-1 flex flex-col justify-start items-center">
        <h1 className="text-center xl:text-2xl-lg">{content.missionSectionTitle}</h1>
        <div className="mt-5">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className="rounded-full xl:m-5 overflow-hidden circle"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm text-center" >
          <StructuredText data={content.mission} />
        </div>
      </div>
      {/* Purpose */}
      <div className="mt-10 md:mt-0 md:col-start-2 flex flex-col justify-start items-center">
        <h1 className="text-center xl:text-2xl-lg">{content.purposeSectionTitle}</h1>
        <div className="mt-5">
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
            className="rounded-full xl:m-5 overflow-hidden circle"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm text-center">
          <StructuredText data={content.purpose} />
        </div>
      </div>
      {/* Vision */}
      <div className="mt-10 md:mt-0 md:col-start-3 flex flex-col justify-start items-center">
        <h1 className="text-center xl:text-2xl-lg">{content.visionSectionTitle}</h1>
        <div className="mt-5">
          <GatsbyImage
            image={content.visionImage.gatsbyImageData}
            alt={content.visionImage.alt}
            placeholder="blurred"
            className="rounded-full xl:m-5 overflow-hidden circle"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm text-center">
          <StructuredText data={content.vision} />
        </div>
      </div>
    </div>
    <div className="col-span-3 flex justify-center place-self-center xl:mt-20 xl:mb-52">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function Quote({ content }) {
  return (
    <div className="section mx-large">
      <h4 className="text-center italic">{content.quote}</h4>
      <p className="text-center monotext text-sm xl:text-2xl xl:mt-9">— THICH NHAT HANH</p>
    </div>
  )
}

function Values({ content }) {
  return (
    <div>
    <div className="top-margin-lg w-full py-12">
      <h1 className="text-center text-black mb-10 md:mb-0">
        {content.valuesSectionTitle}
      </h1>
      </div>
      <div className="xl:h-[820px]  bg-values bg-cover bg-center py-[177px] px-[565px]">
        <div className="flex flex-row items-start gap-40 justify-between">
          <div className="flex flex-col items-start gap-20 ">
            <Value text={content.valuesList[0].value} />
            <Value text={content.valuesList[1].value} />
            <Value text={content.valuesList[2].value} />
            <Value text={content.valuesList[3].value} />
          </div>
          <div className="flex flex-col items-start gap-20">
            <Value text={content.valuesList[4].value} />
            <Value text={content.valuesList[5].value} />
            <Value text={content.valuesList[6].value} />
            <Value text={content.valuesList[7].value} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Value({ text }) {
  return (
    <h2 className="px-6 md:px-4 xl:px-8 pt-1 pb-3 rounded-2xl xl:rounded-4xl xl:w-80 text-black text-center bg-beige hover:bg-green xl:text-3xl">
      <StructuredText data={text} />
    </h2>
  )
}

function CTASection({ content }) {
  return (
    <div className="section section-center mx-medium xl:mt-52">
      <h4 className="text-center">
        <StructuredText data={content.ctaS1} />
      </h4>
      <span className="xl:mt-20"><Button cta={content.cta} /></span>
    </div>
  )
}

function Offering({ content }) {
  return (
    <div id="offering" className="section mx-3 md:mx-12 lg:mx-8  2xl:mx-16">
      <h1 className="text-center">{content.offeringSectionTitle}</h1>
      {/* Accordion */}
      <div className="grid top-margin-medium relative z-10 grid-cols-1 xl:grid-cols-4 grid-rows-2">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-cream border-l border-b bg-beige hover:bg-beige transition ease-in duration-100 rounded-xl ${
              i < 4 ? "xl:border-b" : "" && i === 0 ? "border-t" : ""
            }`}
            key={i}
          >
            <Accordion
              index={i}
              excerpt={block.offeringShortText}
              fullText={block.offeringItemText}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function CTAMove({ content }) {
  return (
    <div className="top-margin-xl w-full flex flex-col items-center"> 
        <div>
          <GatsbyImage
            image={content.ctaImage2.gatsbyImageData}
            alt={content.ctaImage2.alt}
            placeholder="blurred"
            className="rounded-xl circle overflow-hidden"
          />
        </div>
      <h4 className="top-margin-xl mx-large text-center text-red">
        <StructuredText data={content.ctaS2} />
      </h4>
      <span className="mt-20"><Button cta={content.cta} /></span>
    </div>
  )
}

function Timeline({ content }) {
  return (
    <div
      id="timeline"
      className="section xl:min-h-screen xl:bg-beige rounded-xl xl:px-5 xl:py-10"
    >
      <h1 className="text-center z-50">{content.timelineSectionTitle}</h1>
      <div className="xl:grid grid-cols-5 z-10  flex flex-row flex-wrap justify-center ">
        {content.contentModules.map((block, i) => (
          <div
            key={i}
            className="lg:h-[78vh] xl:h-auto md:basis-5/12 md:mx-3 xl:mx-0 my-4 xl:my-0 md:grid grid-rows-3 gap-y-0 bg-beige xl:hover:bg-cream rounded-2xl transition ease-in duration-100 px-5 py-8 md:py-5 xl:p-3 border border-green xl:border-none"
          >
            {/* Title */}
            <div className="my-8 xl:my-0 xl:transform xl:-translate-y-16 row-start-1 row-span-1 border-b border-green self-end">
              <h2 className="text-center leading-tight pb-5 text-3xl md:text-xl xl:text-4xl">
                {block.title}
              </h2>
              <div className="flex justify-between monotext pb-1 place-self-end self-end">
                <p className="inline-block">{block.startDate}</p>
                <p className="inline-block">{block.endDate}</p>
              </div>
            </div>
            {/* Weeks */}
            <div className="-mx-2 xl:-mx-0 xl:transform xl:-translate-y-12 my-8 md:my-10 xl:my-0 row-start-2 row-span-1 flex flex-col justify-center ">
              {block.weeks.map((week, i) => (
                <div key={i}>
                  <span className="flex items-center justify-between mb-3">
                    <h3 className="bg-red w-10 h-10 2xl:w-14 2xl:h-14  rounded-full text-cream text-center flex justify-center items-center">
                      {week.weekNumber}
                    </h3>

                    <p className="flex-1 leading-0 lg:ml-3 text-sm monotext text-center">
                      {week.womanName}
                    </p>
                  </span>
                </div>
              ))}
            </div>
            <div className="row-start-3 text-basesm leading-tight  xl:-mt-4">
              <StructuredText data={block.moduleDescription} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CTAPlants({ content }) {
  return (
    <div className="top-margin-lg btm-margin-lg w-full h-90 flex flex-col justify-center items-center bg-cta3 bg-center bg-cover bg-no-repeat">
      <h4 className="mx-medium  text-center text-beige rounded-2xl pdng bg-darkgreen">
        <StructuredText data={content.ctaS3} />
      </h4>
      <button className="mt-10 mb-3 focus:outline-none">
        <Link
          to="/contact"
          className="z-20 inline-block border border-green rounded-2xl bg-beige hover:bg-green text-black px-5 py-2 monotext text-sm 2xl:text-base no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
        >
          {content.cta}
        </Link>
      </button>
    </div>
  )
}

function Price({ content }) {
  return (
    <div>
      <div>
      <h1 className="text-center">{content.valueSectionTitle}</h1>
      </div>
    <div
      id="value"
      className="section mx-medium beige-card mb-12 flex flex-col items-center text-center"
    >
      
      <h2 className="mt-8 text-7xl xl:text-7xl text-red text-center">
        {content.price}
      </h2>
      <h3 className="mt-2 text-red"> {content.priceSubtext}</h3>
      <h1 className="mt-8 xl:text-2xl-lg">{content.offerResumeSectionTitle}</h1>
      <h3>
        <ul className="top-margin-sm mx-1 md:mx-12 xl:mx-24 2xl:mx-32 text-center list-none">
          {content.including.map((block, i) => (
            <li className="mb-3" key={i}>
              + {block.offeringBulletPoint}
            </li>
          ))}
        </ul>
      </h3>
      <h1 className="pt-3 top-margin-sm xl:text-2xl-lg">{content.paymentTermsTitle}</h1>
      <h3 className="top-margin-sm">{content.paymentTerms}</h3>
      {/* <Button cta={content.cta} /> */}
      <button className="mt-8 md:mt-10 mb-3 flex justify-center place-self-center focus:outline-none">
        <Link
          to="/contact"
          className="z-20 inline-block  border border-green rounded-2xl bg-green hover:bg-beige  text-black px-5 py-2 monotext text-sm xl:text-2xl no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
        >
          I want more information
        </Link>
      </button>
    </div>
    </div>
  )
}

function Bios({ content }) {
  return (
    <div className="section  mx-medium" id="women">
      <h1 className="text-center">{content.womenSectionTitle}</h1>
      <div className="top-margin-medium grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-content-center gap-2">
        {content.women.map((node, i) => {
          return (
            <Link
              to={`/women/${node.slug}`}
              className="block cursor-pointer  z-10"
              key={i}
            >
              <div className="relative overflow-hidden">
                <div className="z-0">
                  <GatsbyImage
                    image={node.image.gatsbyImageData}
                    alt={node.image.alt}
                    placeholder="blurred"
                    className="rounded-xl overflow-hidden circle"
                  />
                  {node.isMainOrganiser && (
                    <p className="text-5xl md:text-6xl lg:text-7xl absolute top-3 right-3 text-red ">
                      *
                    </p>
                  )}
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                  <p className="block top-0 left-0 -mt-6 monotext text-red z-40">
                    Read Bio
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full p-3">
                  <div className="pb-2">
                    <h3 className="block text-center text-2xl uppercase text-cream leading-tight mb-1">
                      {node.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <p className="text-left top-margin-medium text-red text-2xl md:text-3xl  2xl:text-4xl">
        * Core Team
      </p>
    </div>
  )
}

function Supporting({ content }) {
  return (
    <div className="section mx-medium beige-card">
      <h1 className="text-center">{content.supportingSectionTitle}</h1>
      <div className="md:flex flex-row justify-around items-center top-margin-medium">
        {content.supportedProject.map((block, i) => (
          <div key={i}>
            <h2 className="text-center top-margin-sm xl:text-4xl">
              <a
                href={block.link}
                target="_blank"
                rel="noreferrer noopener"
                className="no-underline hover:underline"
              >
                {block.projectName}
              </a>
            </h2>
            <p className="text-center">{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Soul({ content }) {
  return (
    <div className="section mx-sm flex flex-col items-center">
      <div className="section mx-large">
      <h4 className="text-center italic"><StructuredText data={content.ifYourSoulIsCallingForIntro} /></h4>
      <p className="text-center monotext text-sm xl:text-2xl">— Robin Wall Kimmerer</p>
    </div>
      <div className=" ">
        <div className="md:mr-10  md:w-2/3 ">
          <GatsbyImage
            image={content.soulImage.gatsbyImageData}
            alt={content.soulImage.alt}
            placeholder="blurred"
            className="rounded-2xl top-margin-medium mx-1 md:mx-0 overflow-hidden circle"
          />
        </div>
        <span className="md:w-1/3 self-end">
          <div className="mx-2 md:mx-0 mt-10 md:mt-0 w-11/12 md:w-5/6 leading-tight">
            <StructuredText data={content.ifYourSoulIsCallingFor} />
          </div>
         
        </span>
      </div>
      <div className="section mx-large text-center">
      <Button cta={content.cta} />
      </div>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    content: datoCmsHome(locale: { eq: "en" }) {
      cta
      priceBanner
      introSectionTitle
      introtext1 {
        value
      }
      aboutSectionTitle
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
      quote
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
        gatsbyImageData(width: 450, imgixParams: { fit: "crop" })
        alt
      }
      ctaImage3 {
        gatsbyImageData(height: 450, imgixParams: { fit: "crop" })
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
        gatsbyImageData(height: 600, width: 400, imgixParams: { fit: "crop" })
        alt
      }
      offeringSectionTitle
      offeringItem {
        ... on DatoCmsOffering {
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
          title
          startDate(formatString: "DD/MM")
          endDate(formatString: "DD/MM")
          moduleDescription {
            value
          }
          weeks {
            ... on DatoCmsWeekContent {
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
      priceSubtext
      paymentTerms
      paymentTermsTitle
      offerResumeSectionTitle
      including {
        ... on DatoCmsIncluding {
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
              height: 800
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
          projectName
          link
          description
        }
      }
      instagram
      telegram
    }
  }
`
