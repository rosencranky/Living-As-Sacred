import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Button from "../components/Button"
import { StructuredText } from "react-datocms"
import Header from "../components/header"
import AccordionGrid from "../components/Accordiongrid"
// import Marquee from "react-fast-marquee"

export default function IndexPage({ data }) {
  return (
    <>
      <SEO title="Home" description="Landing page for Living as Sacred." />
      {/* <EarlyBirdMarquee content={data.content} /> */}
      <Hero />
      <Intro content={data.content} />
      <About content={data.content} />
      <JoannaMacy content={data.content} />
      <Values content={data.content} />
      <Offering content={data.content} />
      <CTAMove content={data.content} />
      <Timeline content={data.content} />
      <CTAPlants content={data.content} />
      <Price content={data.content} />
      <Bios content={data.content} />
      <Supporting content={data.content} />
      <Soul content={data.content} />
      <Footer content={data.content} />
    </>
  )
}

// function EarlyBirdMarquee({ content }) {
//   return (
//     <div className="z-50 sticky top-0 left-0 ">
//       <Marquee
//         className="h-6 monotext text-cream bg-red text-base"
//         gradient={false}
//       >
//         {content.priceBanner}
//         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//         {content.priceBanner}
//         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//         {content.priceBanner}
//         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//       </Marquee>
//     </div>
//   )
// }

function Hero() {
  return (
    <div
      id="hero"
      className="h-screen lg:h-screen max-h-screen lg:bg-hero bg-center bg-contain bg-no-repeat"
    >
      <Header />
      <div className="z-10 absolute top-6 left-0 xl:top-5 xl:left-5">
        <h1 className="mt-0 ml-3 xl:mt-0 xl:ml-0 text-left text-3xl md:text-4xl lg:text-5xl xl:text-7xl  font-serif normal-case text-red tracking-tight leading-tighter">
          Living · as · Sacred
          <br /> April – July 2022
          <br /> <em>Online</em>
        </h1>
      </div>
      {/* <div className="absolute bottom-10">
        <br /> April – July 2022
        <br /> <em>Online</em>
      </div> */}
      <div className="block j lg:hidden z-0 translate-y-3 absolute bottom-[10%]">
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
    <div id="about" className="mt-0 md:mt-24 mx-3 lg:mx-10 section-center ">
      <span className="mx-medium">
        <h1 className="text-center">{content.introSectionTitle} </h1>
        <h2 className="z-10 text-center text-red leading-tighter">
          <StructuredText data={content.introtext1} />
        </h2>
      </span>
    </div>
  )
}

function About({ content }) {
  return (
    <div className="section block md:grid mx-medium grid-cols-3 gap-x-3 beige-card ">
      {/* Mission */}
      <div className="col-start-1 flex flex-col justify-start items-center">
        <h1 className="text-center">{content.missionSectionTitle}</h1>
        <div className="top-margin-sm">
          <GatsbyImage
            image={content.missionImage.gatsbyImageData}
            alt={content.missionImage.alt}
            placeholder="blurred"
            className="rounded-full md:m-5"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm">
          <StructuredText data={content.mission} />
        </div>
      </div>
      {/* Purpose */}
      <div className="mt-10 md:mt-0 md:col-start-2 flex flex-col justify-start items-center">
        <h1 className="text-center">{content.purposeSectionTitle}</h1>
        <div className="top-margin-sm">
          <GatsbyImage
            image={content.purposeImage.gatsbyImageData}
            alt={content.purposeImage.alt}
            placeholder="blurred"
            className="rounded-full md:m-5 transition filter duration-600"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm">
          <StructuredText data={content.purpose} />
        </div>
      </div>
      {/* Vision */}
      <div className="mt-10 md:mt-0 md:col-start-3 flex flex-col justify-start items-center">
        <h1 className="text-center">{content.visionSectionTitle}</h1>
        <div className="top-margin-sm">
          <GatsbyImage
            image={content.visionImage.gatsbyImageData}
            alt={content.visionImage.alt}
            placeholder="blurred"
            className="rounded-full md:m-5"
          />
        </div>
        <div className="mx-1 md:mx-3 leading-tight top-margin-sm">
          <StructuredText data={content.vision} />
        </div>
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
        className="z-20 inline-block border border-green rounded-2xl bg-beige hover:bg-green text-black px-5 py-2 monotext text-sm 2xl:text-base no-underline   leading-none shadow-sm  transition ease-in-out duration-300"
      >
        {cta}
      </Link>
    </div>
  )
}

function JoannaMacy({ content }) {
  return (
    <div className="section mx-large">
      <h4 className="text-center italic">{content.joannaMacyQuote}</h4>
      <p className="text-center monotext text-sm xl:text-base">—Joanna Macy</p>
    </div>
  )
}

function Values({ content }) {
  return (
    <div className="top-margin-lg w-full py-12 bg-leaves bg-cover">
      <h1 className="text-center text-black md:text-cream mb-10 md:mb-0">
        {content.valuesSectionTitle}
      </h1>
      <div className="flex flex-wrap md:grid grid-cols-12 place-items-center place-content-center items-center">
        <div className="col-start-1 col-span-3">
          <Value text={content.valuesList[0].value} />
          <h2 className="text-center text-cream">·</h2>
          <Value text={content.valuesList[1].value} />
          <h2 className="text-center text-cream">·</h2>
          <Value text={content.valuesList[2].value} />
        </div>
        <div className="flex justify-center my-5 md:my-10 col-start-4 col-span-6 m-3 md:m-0  ">
          <GatsbyImage
            image={content.valuesImage.gatsbyImageData}
            alt={content.valuesImage.alt}
            placeholder="blurred"
            className="rounded-full"
          />
        </div>
        <div className="col-start-10 col-span-3">
          <Value text={content.valuesList[3].value} />
          <h2 className="text-center text-cream">·</h2>
          <Value text={content.valuesList[4].value} />
          <h2 className="text-center text-cream">·</h2>
          <Value text={content.valuesList[5].value} />
        </div>
      </div>
    </div>
  )
}

function Value({ text }) {
  return (
    <h2 className="px-6 md:px-8 pt-1 pb-3 rounded-2xl md:rounded-3xl text-black text-center bg-beige hover:bg-green">
      <StructuredText data={text} />
    </h2>
  )
}

function Offering({ content }) {
  return (
    <div id="offering" className="section mx-3 md:mx-12 lg:mx-8  2xl:mx-16">
      <h4 className="top-margin-lg mx-medium text-center">
        <StructuredText data={content.ctaS1} />
      </h4>
      <div className="flex justify-center">
        <Button cta={content.cta} />
      </div>
      <h1 className="top-margin-lg text-center">
        {content.offeringSectionTitle}
      </h1>
      {/* Desktop */}
      <div className="hidden lg:grid top-margin-medium relative z-10 grid-cols-4 grid-rows-2">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-cream border-l bg-green hover:bg-beige transition ease-in duration-100 rounded-xl ${
              i < 4 ? "border-b" : ""
            }`}
            key={block.id}
            key={i}
          >
            <AccordionGrid
              index={i}
              excerpt={block.offeringShortText}
              fullText={block.offeringItemText}
            />
          </div>
        ))}
      </div>
      {/* Small tablet */}
      <div className="hidden md:grid lg:hidden top-margin-medium relative z-10 md:grid-cols-2 grid-rows-2">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-r border-b border-green bg-green hover:bg-beige  rounded-xl transition ease-in duration-100 ${
              i < 2 ? "border-t-2" : ""
            } ${i % 2 === 0 ? "border-l" : ""}`}
            key={block.id}
            key={i}
          >
            <AccordionGrid
              index={i}
              excerpt={block.offeringShortText}
              fullText={block.offeringItemText}
            />
          </div>
        ))}
      </div>
      {/* mobile */}
      <div className="grid md:hidden top-margin-medium relative z-10 grid-cols-1 grid-rows-2">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-t border-cream  bg-green hover:bg-beige rounded-xl transition ease-in duration-100 ${
              i === 0 ? "border-t" : ""
            } `}
            key={block.id}
            key={i}
          >
            <AccordionGrid
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
    <div className="top-margin-lg w-full xl:mb-12 flex justify-center flex-col">
      <div className="flex flex-nowrap justify-between items-center">
        <div>
          <GatsbyImage
            image={content.ctaImage2.gatsbyImageData}
            alt={content.ctaImage2.alt}
            placeholder="blurred"
            className="mx-5 xl:mx-0 lg:z-10 rounded-xl"
          />
        </div>
        <div className="hidden md:block ">
          <GatsbyImage
            image={content.ctaImage3.gatsbyImageData}
            alt={content.ctaImage3.alt}
            placeholder="blurred"
            className="md:basis-auto z-0 md:ml-5 rounded-xl"
          />
        </div>
      </div>
      <h4 className="mt-10 md:mt-12 mx-large text-center text-red">
        <StructuredText data={content.ctaS2} />
      </h4>
      <div className="flex justify-center">
        <Button cta={content.cta} />
      </div>
      <div className="block md:hidden mx-5 mt-10 md:mt-0 ">
        <GatsbyImage
          image={content.ctaImage3.gatsbyImageData}
          alt={content.ctaImage3.alt}
          placeholder="blurred"
          className="rounded-xl"
        />
      </div>
    </div>
  )
}

function Timeline({ content }) {
  return (
    <div
      id="timeline"
      className="section xl:min-h-screen md:bg-beige rounded-xl md:px-5 md:py-10"
    >
      <h1 className="text-center z-50">{content.timelineSectionTitle}</h1>

      <div className="md:grid grid-cols-5 z-10   ">
        {content.contentModules.map((block, i) => (
          <div
            key={block.id}
            key={i}
            className={`my-8 md:my-0 md:grid grid-rows-3 gap-y-0 bg-beige md:hover:bg-cream rounded-2xl transition ease-in duration-100 px-5 py-8 md:p-3 border border-green md:border-none 
            
            `}
          >
            {/* Title */}
            <div className="my-8 md:my-0 md:transform md:-translate-y-16 row-start-1 row-span-1 border-b border-green self-end">
              {/* <div className="flex flex-col items-stretch"> */}
              <h2 className="text-center leading-tight pb-5 text-3xl md:text-xl xl:text-4xl">
                {block.title}
              </h2>
              <div className="flex justify-between monotext pb-1 place-self-end self-end">
                <p className="inline-block">{block.startDate}</p>
                <p className="inline-block">{block.endDate}</p>
              </div>
              {/* </div> */}
            </div>
            {/* Weeks */}
            <div className="-mx-2 md:-mx-0 md:transform md:-translate-y-12 my-8 md:my-0 row-start-2 row-span-1 flex flex-col justify-center ">
              {block.weeks.map((week, i) => (
                <div key={week.id} key={i}>
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
            <div className="row-start-3 text-basesm  md:-mt-4">
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
    <div className="top-margin-lg btm-margin-lg w-full h-90 flex flex-col justify-center items-center bg-plants bg-center bg-cover bg-no-repeat">
      <h4 className="mx-medium  text-center text-beige rounded-2xl pdng bg-darkgreen">
        <StructuredText data={content.ctaS3} />
      </h4>
      <ButtonBeige cta={content.cta} />
    </div>
  )
}

// function Price({ content }) {
//   return (
//     <div className="section mx-medium beige-card mb-12">
//       <div className="md:grid grid-cols-6 gap-x-10 place-content-center">
//         <div className="col-start-1 col-span-4">
//           <h1 className="text-center">{content.valueSectionTitle}</h1>
//           <h2 className="mt-12 text-5xl xl:text-7xl text-center">
//             {content.price}
//           </h2>
//           <p className="text-center monotext text-sm xl:text-base text-red mt-6">
//             {content.priceSubtext}
//           </p>
//           <div className="top-margin-sm flex justify-center">
//             <h2 className="text-4xl xl:text-5xl 2xl:text-6xl text-center line-through decoration-red decoration-2 top-margin-sm">
//               {content.price}
//             </h2>

//             <h2 className="text-4xl xl:text-5xl 2xl:text-6xl text-center leading-0 ml-5 p-2 border-2 border-red rounded-xl">
//               210€
//             </h2>
//           </div>
//         </div>
//         {/* Price summary */}
//         <div className="col-start-1 col-span-12">
//           <h1 className="mt-12 md:mt-0">{content.offerResumeSectionTitle}</h1>
//           <ul className="top-margin-sm">
//             {content.including.map((block, i) => (
//               <li key={i}>{block.offeringBulletPoint}</li>
//             ))}
//           </ul>
//           <h1 className="mt-8 md:mt-12 ">{content.paymentTermsTitle}</h1>
//           <p className="top-margin-sm ">{content.paymentTerms}</p>
//         </div>
//       </div>
//       <div className="flex justify-center mt-6">
//         <Button cta={content.cta} />
//       </div>
//     </div>
//   )
// }

function Price({ content }) {
  return (
    <div className="section mx-medium beige-card mb-12 flex flex-col items-center text-center">
      {/* Price summary */}

      <h1 className="text-center">{content.valueSectionTitle}</h1>

      <h2 className="mt-12 text-7xl xl:text-7xl text-red text-center">
        {content.price}
      </h2>
      <h1 className="top-margin-medium">{content.offerResumeSectionTitle}</h1>
      <h3>
        <ul className="top-margin-sm mx-1 md:mx-12 xl:mx-24 2xl:mx-32 text-center list-none">
          {content.including.map((block, i) => (
            <li className="mb-3" key={i}>
              + {block.offeringBulletPoint}
            </li>
          ))}
        </ul>
      </h3>
      <h1 className="top-margin-medium">{content.paymentTermsTitle}</h1>
      <p className="top-margin-sm ">{content.paymentTerms}</p>

      <div className="flex justify-center mt-6">
        <Button cta={content.cta} />
      </div>
    </div>
  )
}

function Bios({ content }) {
  return (
    <div className="section  mx-medium" id="women">
      <h1 className="text-center">{content.womenSectionTitle}</h1>
      <div className="top-margin-medium grid grid-cols-2 md:grid-cols-5 place-content-center gap-2">
        {content.women.map((node, i) => {
          return (
            <Link
              to={`/women/${node.slug}`}
              className="block cursor-pointer  z-10"
              key={i}
            >
              <div className="relative overflow-hidden">
                {node.isMainOrganiser && (
                  <div className="z-0">
                    <GatsbyImage
                      image={node.image.gatsbyImageData}
                      alt={node.image.alt}
                      placeholder="blurred"
                      className="rounded-xl"
                    />
                    <p className="text-5xl md:text-6xl lg:text-7xl absolute top-3 right-3 text-red ">
                      *
                    </p>
                  </div>
                )}
                {!node.isMainOrganiser && (
                  <div className="z-0">
                    <GatsbyImage
                      image={node.image.gatsbyImageData}
                      alt={node.image.alt}
                      placeholder="blurred"
                      className="rounded-xl"
                    />
                  </div>
                )}
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
            <h2 className="text-center top-margin-sm">
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
    <div className="section mx-medium">
      <div className="md:flex justify-between ">
        <div className="md:mr-10  md:w-2/3 ">
          <h4 className="text-red self-end text-right md:text-left">
            <StructuredText data={content.ifYourSoulIsCallingForIntro} />
          </h4>
          <GatsbyImage
            image={content.soulImage.gatsbyImageData}
            alt={content.soulImage.alt}
            placeholder="blurred"
            className="rounded-2xl top-margin-medium mx-1 md:mx-0"
          />
        </div>
        <span className="md:w-1/3 self-end">
          <div className="mx-2 md:mx-0 mt-10 md:mt-0 w-11/12 md:w-5/6 leading-tight">
            <StructuredText data={content.ifYourSoulIsCallingFor} />
          </div>
          <Button cta={content.cta} />
        </span>
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
        gatsbyImageData(height: 600, width: 600, imgixParams: { fit: "crop" })
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
