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
      className=""
    >
      <Header />
      <div className="h-screen xl:h-screen max-h-screen md:bg-hero bg-center bg-contain bg-no-repeat bg-hero pt-32 px-6"></div>
      <div className="z-10 absolute top-6 left-8 xl:top-10 xl:left-10">
        <h1 className="mt-0 xl:mt-0 xl:ml-0 text-left text-3xl lg:text-5xl xl:text-7xl  font-serif normal-case text-red tracking-tight leading-tighter">
          Living · as · Sacred
          <br /> 1 October – 14 April
          <br /> <em>Online</em>
        </h1>
      </div>
    </div>
  )
}

function Intro({ content }) {
  return (
    <div id="about" className="mt-0 xl:mt-52 xl:mx-24 mx-3 lg:mx-10 section-center ">
      <span className="xl:mx-9">
        <h1 className="text-center section-title">{content.introSectionTitle} </h1>
        <h2 className="z-10 text-center blockquote-sm xl:mt-10">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function About({ content }) {
  return (
    <div>
    <div className="xl:mt-52 section block mx-medium beige-card ">
      <div className=" mx-3 lg:mx-10 section-center">
      <span>
        <h1 className="text-center section-title">{content.aboutSectionTitle} </h1>
      </span>
      </div>
    <div className=" xl:mt-16 lg:grid  grid-cols-3 lg:gap-x-10 2xl:gap-x-24 ">
      {/* Mission */}
      <div className="col-start-1 flex flex-col justify-start items-center">
        <h1 className="text-center text-base xl:text-2xl-lg">{content.missionSectionTitle}</h1>
        <div className="mt-5">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className="rounded-full xl:m-5 overflow-hidden circle"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm text-center mb-10" >
          <StructuredText data={content.mission} />
        </div>
      </div>
      {/* Purpose */}
      <div className="mt-10 md:mt-0 md:col-start-2 flex flex-col justify-start items-center">
        <h1 className="text-center text-base xl:text-2xl-lg">{content.purposeSectionTitle}</h1>
        <div className="mt-5">
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
            className="rounded-full xl:m-5 overflow-hidden circle"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm text-center mb-10">
          <StructuredText data={content.purpose} />
        </div>
      </div>
      {/* Vision */}
      <div className="mt-10 md:mt-0 md:col-start-3 flex flex-col justify-start items-center">
        <h1 className="text-center text-base xl:text-2xl-lg">{content.visionSectionTitle}</h1>
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
    </div>
    <div className="col-span-3 flex justify-center place-self-center xl:mt-10 xl:mb-36">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function Quote({ content }) {
  return (
    <div className="section mx-large">
      <h4 className="text-center italic blockquote-sm tracking-tightest">{content.quote}</h4>
      <p className="text-center monotext text-sm xl:text-2xl xl:mt-9">— THICH NHAT HANH</p>
    </div>
  )
}

function Values({ content }) {
  return (
    <div className="top-margin-xl w-full py-12">
      <div>
      <h1 className="text-center text-black mb-10 section-title">
        {content.valuesSectionTitle}
      </h1>
      </div>
      <div className="bg-values bg-cover bg-center py-[4.5rem] lg:py-44 lg:h-5/6 ">
        <div className="xl:px-40 flex lg:flex-row flex-col items-center gap-[20rem] justify-evenly h-full">
          <div className="flex flex-col items-start lg:gap-20 gap-8">
            <Value text={content.valuesList[0].value} />
            <Value text={content.valuesList[1].value} />
            <Value text={content.valuesList[2].value} />
            <Value text={content.valuesList[3].value} />
          </div>
          <div className="flex flex-col items-start lg:gap-20 gap-8">
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
    <h2 className="px-6 md:px-4 xl:px-8 pt-1 pb-3 rounded-4xl lg:w-80 w-52 text-black text-center bg-beige  lg:text-3xl">
      <StructuredText data={text} />
    </h2>
  )
}

function CTASection({ content }) {
  return (
    <div className="section section-center mx-medium xl:mt-52">
      <h4 className="text-center blockquote-sm">
        <StructuredText data={content.ctaS1} />
      </h4>
      <span className="xl:mt-10"><Button cta={content.cta} /></span>
    </div>
  )
}

function Offering({ content }) {
  return (
    <div id="offering" className="section top-margin-xl mx-3 md:mx-12 lg:mx-8  2xl:mx-16">
      <h1 className="text-center section-title">{content.offeringSectionTitle}</h1>
      {/* Accordion */}
      <div className="top-margin-medium relative z-10 flex flex-col lg:flex-row">
        <div className="basis-1/2">
        {content.offeringItem.filter((e,i) => i < 4).map((block, i) => (       
            <Accordion
              index={i}
              excerpt={block.offeringShortText}
              fullText={block.offeringItemText}
            />
        ))}
        </div>
        <div className="basis-1/2">
        {content.offeringItem.filter((e,i) => i >= 4).map((block, i) => (       
            <Accordion
              index={i}
              excerpt={block.offeringShortText}
              fullText={block.offeringItemText}
            />
        ))}
        </div>
      </div>
    </div>
  )
}

function CTAMove({ content }) {
  return (
    <div className="top-margin-xl w-full flex flex-col items-center justify-center "> 
        <div className="w-10/12 lg:w-1/3 text-center">
          <GatsbyImage
            image={content.ctaImage2.gatsbyImageData}
            alt={content.ctaImage2.alt}
            placeholder="blurred"
            className="rounded-xl circle overflow-hidden"
          />
        </div>
      <h4 className="top-margin-xl mx-large text-center blockquote-sm">
        <StructuredText data={content.ctaS2} />
      </h4>
      <span className="mt-10"><Button cta={content.cta} /></span>
    </div>
  )
}

function Timeline({ content }) {
  const nth = function(d) {
    if (d > 3 && d < 21) return `${d}th`;
    switch (d % 10) {
      case 1:  return `${d}st`;
      case 2:  return `${d}nd`;
      case 3:  return `${d}rd`;
      default: return `${d}th`;
    }
  }

  return (   
    <div className="top-margin-xl pt-16 section xl:bg-beige rounded-xl  ">
      <h1 className="text-center z-50 section-title">{content.timelineSectionTitle}</h1>
    <div
      id="timeline"
      className="section xl:min-h-screen xl:bg-beige rounded-xl lg:px-[70px] xl:pb-16 mx-3"
    >
      <div className="z-10  flex flex-row flex-wrap  md:y-12 ">
        {content.contentModules.map((block, i) => (
          <div
            key={i}
            className="xl:h-auto md:basis-full md:mx-3 xl:mx-0 my-4 xl:my-0 timeline-grid-small xl:timeline-grid-large bg-beige xl:hover:bg-cream rounded-2xl transition ease-in duration-100 px-5 py-8 md:px-10 md:py-10 border border-green xl:border-none"
          >
            {/* Title */}
            <div className="xl:pr-6 my-0 col-start-1 col-span-1 xl:border-r xl:border-rust basis-[37%] flex flex-col  shrink-0 text-center xl:text-left">
              <h2 className="text-red pb-5 text-3xl xl:text-timeline-title xl:leading-loosest xl:pb-12">
                {block.title}<br/>
                <em>{block.subtitle}</em>
              </h2>
              <div className="monotext pb-1 border-b border-rust xl:border-none">
                <p className="inline-block text-base lg:text-date">{`${nth(block.startDate.split('/')[0])} ${new Date(block.startDate.split('/')[1]).toLocaleString("en-us", { month: "long" })} `}</p>
                <br className="hidden lg:inline xl:hidden "/>
                <p className="inline-block lg:hidden xl:inline-block text-base lg:text-date">&nbsp; - &nbsp;</p>
                <p className="inline-block text-base lg:text-date">{`${nth(block.endDate.split('/')[0])} ${new Date(block.endDate.split('/')[1]).toLocaleString("en-us", { month: "long" })} `}</p>
                <p className="block text-sm">{block.zoomDate}</p>
              </div>
            </div>
            {/* Weeks */}
            <div className="-mx-2 xl:mx-6 my-8 md:my-10 xl:my-0 xl:flex xl:flex-col xl:basis-full grid grid-cols-2 grid-rows-2 grid-flow-col  ">
              {block.weeks.map((week, i) => (
                <div key={i}>
                  <span className="flex justify-between mb-3 md:justify-center shrink-0">
                    <h3 className="bg-rust w-10 h-10 2xl:w-14 2xl:h-14  rounded-full text-cream text-center flex justify-center items-center">
                      {week.weekNumber}
                    </h3>

                    <p className="flex-1 leading-0 lg:ml-3 text-sm monotext text-center xl:text-left w-auto">
                      {week.womanName}<br/>{week.fullDate}
                    </p>
                  </span>
                </div>
              ))}
            </div>
            <div className="text-basesm leading-tight basis-[600px] text-lg">
              <StructuredText data={block.moduleDescription} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

function CTAPlants({ content }) {
  return (
    <div className="top-margin-xl w-full h-90 flex flex-col justify-center items-center bg-cta3 bg-center bg-cover bg-no-repeat ">
      <h4 className="mx-medium  text-center text-beige blockquote-sm rounded-2xl pdng bg-spice leading-10 lg:leading-extra-loose tracking-tightest">
        <StructuredText data={content.ctaS3} />
      </h4>
      <div className="xl:mt-20">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function Price({ content }) {
  return (
    <div className="flex flex-col">
    <div className="top-margin-xl beige-card mx-medium  ">
      <div>
      <h1 className="text-center section-title">{content.valueSectionTitle}</h1>
      </div>
    <div
      id="value"
      className=" mt-16 mb-12 flex flex-col items-center text-center"
    >
      
      <h2 className="text-7xl xl:text-7xl text-red text-center">
        {content.price}
      </h2>
      <h3 className="mt-3 xl:mt-5 text-red"> {content.priceSubtext}</h3>
      <h1 className="mt-8 xl:mt-16 text-base xl:text-2xl-lg">{content.offerResumeSectionTitle}</h1>
      <h3>
        <ul className="top-margin-sm mx-1 md:mx-12 xl:mx-24 2xl:mx-32 text-center text-base lg:text-2xl list-none">
          {content.including.map((block, i) => (
            <li className="mb-3" key={i}>
              + {block.offeringBulletPoint}
            </li>
          ))}
        </ul>
      </h3>
      <h1 className="pt-3 mt-3 xl:mt-16 text-base xl:text-2xl-lg">{content.paymentTermsTitle}</h1>
      <h3 className="top-margin-sm text-base lg:text-2xl">{content.paymentTerms}</h3>
      {/* <Button cta={content.cta} /> */}
      
    </div>
    </div>
    <button className="mt-8 md:mt-16 mb-3 flex justify-center place-self-center focus:outline-none">
        <Link
          to="/contact"
          className="z-20 inline-block  border border-green rounded-2xl xl:rounded-4xl bg-khaki hover:bg-beige hover:border-khaki text-black px-5 py-2 monotext text-sm xl:text-2xl no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
        >
          I want more information
        </Link>
      </button>
    </div>
  )
}

function Bios({ content }) {
  return (
    <div className="section top-margin-xl  mx-medium" id="women">
      <h1 className="text-center section-title">{content.womenSectionTitle}</h1>
      <div className="top-margin-medium grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-content-center gap-2">
      <div className="relative overflow-hidden">
        <div className="bg-khaki  rounded-xl circle absolute top-0 left-0 right-0 bottom-0 w-full z-30 flex flex-wrap items-center justify-center">
          <p className="block top-0 left-0 -mt-6 text-date lg:text-bios-lg text-center text-red z-40">
            The Council
          </p>
        </div>
        </div>
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
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full z-30 text-white opacity-0 hover:opacity-100 flex flex-wrap items-center justify-center text-lg">
                  <p className="block top-0 left-0 -mt-6 text-2xl-lg font-sans text-red z-40">
                    READ BIO
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full p-3">
                  <div className="pb-2">
                    <h3 className="block text-center text-base lg:text-bios-sm uppercase text-cream leading-tight mb-1">
                      {node.name} {node.isMainOrganiser && (`(Core Team)`)}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
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
            <p className="text-center mt-2.5">{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Soul({ content }) {
  return (
    <div className="section top-margin-lg xl:mx-0  flex flex-col items-center ">
      <div className="section xl:mx-52">
        <h4 className="text-center italic tracking-tightest blockquote-sm"><StructuredText data={content.ifYourSoulIsCallingForIntro} /></h4>
        <p className="text-center monotext text-sm xl:text-2xl">— Robin Wall Kimmerer</p>
      </div>
        <div className="mt-40 lg:mt-52 w-10/12 lg:w-1/2">
          <GatsbyImage
            image={content.soulImage.gatsbyImageData}
            alt={content.soulImage.alt}
            placeholder="blurred"
            className="rounded-2xl overflow-hidden circle"
          />
        </div>
        <div className="mx-2 xl:mx-[6.75rem] mt-10 top-margin-xl blockquote-sm text-center">
            <StructuredText data={content.ifYourSoulIsCallingFor} />
        </div>
 
      <div className="mt-10 mx-large text-center">
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
          subtitle
          startDate(formatString: "DD/MM")
          endDate(formatString: "DD/MM")
          zoomDate
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
              fullDate
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
