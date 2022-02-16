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
    <SEO title="Home" description="Landing page for Living as Sacred .." />
    <div className="z-50 sticky top-0 left-0 ">
      <Marquee className="h-6 monotext text-white bg-red" gradient={false}>
        {data.content.priceSubtext}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {data.content.priceSubtext}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        {data.content.priceSubtext}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </Marquee>
    </div>

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
      className="h-screen max-h-screen "
      // bg-hero bg-center bg-auto  bg-no-repeat
    >
      {/* bg-contain opacity-90 */}
      <Header />
      <div className="z-10 absolute top-10 left-5 ">
        <h1 className="xl:text-7xl 2xl:text-8xl font-serif normal-case text-red tracking-tight">
          Living · as · Sacred
        </h1>
        <h1 className=" xl:text-7xl 2xl:text-8xl font-serif uppercase text-red tracking-tight">
          May – July 2022
        </h1>
        <h1 className="xl:text-7xl 2xl:text-8xl font-serif uppercase text-red tracking-tight">
          <em>Online</em>
        </h1>
      </div>
      <div className="mx-64 pt-24  flex justify-center  ">
        <StaticImage src="../images/background-1.jpg" placeholder="blurred" />
      </div>
      <div className="bottom-5 left-5 absolute">
        {/* <h1 className=" xl:text-5xl 2xl:text-8xl font-serif uppercase text-red tracking-tight">
          May – July 2022 · Online
        </h1> */}
      </div>
    </div>
  )
}

function SectionIntro({ content }) {
  return (
    <div id="about" className="section section-center z-10">
      <span className="xl:w-5/6">
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
    <div className="section block md:grid md:mx-32 grid-cols-3 gap-x-3">
      {/* Mission */}
      <div className="col-start-1 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.missionSectionTitle}</h1>
        <GatsbyImage
          image={content.missionImage.gatsbyImageData}
          alt={content.missionImage.alt}
          placeholder="blurred"
          className="rounded-full hover:rounded-none transition ease-in-out duration-300 p-5 m-5 border  border-green"
        />
        <p className="mx-3 leading-tight">
          <StructuredText data={content.mission} />
        </p>
      </div>
      {/* Purpose */}
      <div className="md:col-start-2 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.purposeSectionTitle}</h1>

        <GatsbyImage
          image={content.purposeImage.gatsbyImageData}
          alt={content.purposeImage.alt}
          placeholder="blurred"
          className="rounded-full hover:rounded-none transition ease-in-out duration-300 p-5 m-5 border  border-green"
        />

        <p className="mx-3 leading-tight">
          {" "}
          <StructuredText data={content.purpose} />
        </p>
      </div>
      {/* Vision */}
      <div className="md:col-start-3 flex flex-col justify-center items-center">
        <h1 className="text-center">{content.visionSectionTitle}</h1>
        <GatsbyImage
          image={content.visionImage.gatsbyImageData}
          alt={content.visionImage.alt}
          placeholder="blurred"
          className="rounded-full hover:rounded-none transition ease-in-out duration-300 delay-50 p-5 m-5 border  border-green"
        />
        <p className="mx-3 leading-tight">
          <StructuredText data={content.vision} />
        </p>
      </div>
      <div className="col-span-3 flex justify-center place-self-center">
        <Button cta={content.cta1} url={content.cta1Email} />
      </div>
    </div>
  )
}

function SectionJoannaMacy({ content }) {
  return (
    <div className="mx-large  top-margin-lg btm-margin-lg">
      <h4 className="text-center ">{content.joannaMacyQuote}</h4>
      <p className="text-center  monotext">—Joanna Macy</p>
    </div>
  )
}

function SectionValues({ content }) {
  return (
    <div className="section-full">
      <h1 className="text-center">{content.valuesSectionTitle}</h1>
      <div className="grid grid-cols-12 place-items-center place-content-center items-center">
        <h2 className="text-center col-start-1 col-span-3 text-black">
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
            className="border  border-green hover:rounded-full  "
          />
        </div>
        <h2 className="text-center col-start-10 col-span-3  text-black">
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
    <div id="offering" className="section ">
      <h4 className="mx-medium text-center">{content.ctaSentence}</h4>
      <div className="flex justify-center">
        <Button cta={content.cta2} url={content.cta2Email} />
      </div>
      <h1 className="top-margin-lg text-center">
        {content.offeringSectionTitle}
      </h1>

      <div className="top-margin-medium relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 shadow-sm hover:text-green">
        {content.offeringItem.map((block, i) => (
          <div
            className={`border-r border-t border-green  bg-beige hover:bg-transparent text-cream hover:text-black transition ease-in duration-100 ${
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
    <div id="timeline" className="section-full  max-h-screen">
      <h1 className="text-center  z-50">{content.timelineSectionTitle}</h1>

      <div className="grid grid-cols-5 gap-5 z-10 overflow-x-scroll xl:overflow-x-auto timeline">
        {content.contentModules.map((block, i) => (
          <div
            key={block.id}
            key={i}
            className="grid grid-rows-3 gap-y-10  hover:bg-beige transition ease-in duration-100 p-3 z-10 "
          >
            {/* Title */}
            <div className="row-start-1 row-span-1 border-b-2 border-green self-end">
              <h2 className="text-center leading-none pb-5">{block.title}</h2>
              <span className="flex justify-between monotext">
                <p className="inline-block">{block.startDate}</p>
                <p className="inline-block">{block.endDate}</p>
              </span>
            </div>
            {/* Weeks */}
            <div className="row-start-2 row-span-1 flex justify-evenly ">
              {block.weeks.map((week, i) => (
                <div key={week.id} key={i} className="">
                  <div className="grid grid-rows-2 items-start">
                    <h3 className="row-start-1 row-end-1 bg-green w-12 h-12 2xl:w-16 2xl:h-16 mb-16 rounded-full text-cream text-center flex justify-center items-center">
                      {week.weekNumber}
                    </h3>

                    <p className="row-start-2 transform rotate-45 monotext leading-tight uppercase ">
                      {week.womanName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="row-start-3 text-sm 2xl:text-base leading-tight -mt-16 ">
              {" "}
              <StructuredText data={block.moduleDescription} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionQs({ content }) {
  return (
    <div className="section-full pb-24">
      <div className="block lg:grid grid-rows-3 grid-cols-12 items-center ">
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

// function SectionQs({ content }) {
//   return (
//     <div className="section-full  pb-24  bg-center">
//       <div className="block lg:grid grid-rows-1 grid-cols-12 items-center ">
//         <div className="z-0 col-start-1 col-span-5 row-start-1  ">
//           <GatsbyImage
//             image={content.valueImages[0].gatsbyImageData}
//             alt={content.valueImages[0].alt}
//             placeholder="blurred"
//             className="border  border-green"
//           />
//           <GatsbyImage
//             image={content.valueImages[1].gatsbyImageData}
//             alt={content.valueImages[1].alt}
//             placeholder="blurred"
//             className="mt-12 border  border-green"
//           />
//         </div>
//         <h4 className="z-10 col-start-7 col-end-13   self-start  row-start-1">
//           Is your soul calling for ...
//         </h4>

//         {/* <div className="z-0  col-start-3 row-start-3 col-span-4 self-center">
//           <GatsbyImage
//             image={content.valueImages[1].gatsbyImageData}
//             alt={content.valueImages[1].alt}
//             placeholder="blurred"
//             className="border  border-green"
//           />
//         </div> */}

//         <div className=" row-start-1 row-end-3 col-start-7 col-end-13 ">
//           <h3 className="max-w-prose z-10 col-start-1 col-end-8  row-start-2 text-left ">
//             <ul className="">
//               <li>{content.soulBulletPoints[0].text}</li>
//               <li>{content.soulBulletPoints[1].text}</li>
//               <li>{content.soulBulletPoints[2].text}</li>
//               <li> {content.soulBulletPoints[3].text}</li>
//               <li>{content.soulBulletPoints[4].text}</li>

//               <li> {content.soulBulletPoints[5].text}</li>

//               <li>{content.soulBulletPoints[6].text}</li>

//               <li>{content.soulBulletPoints[7].text}</li>
//             </ul>
//           </h3>
//           <h3 className="z-10 text-xl col-start-7 col-end-13  row-start-3  text-left ">
//             <ul>
//               <li>{content.soulBulletPoints[4].text}</li>

//               <li> {content.soulBulletPoints[5].text}</li>

//               <li>{content.soulBulletPoints[6].text}</li>

//               <li>{content.soulBulletPoints[7].text}</li>
//             </ul>
//           </h3>
//         </div>

//         {/* <div className="z-0 col-start-2 col-span-4 row-start-2 row-end-3 place-self-center self-center  ">
//           <GatsbyImage
//             image={content.valueImages[2].gatsbyImageData}
//             alt={content.valueImages[2].alt}
//             placeholder="blurred"
//             className="border  border-green"
//           />
//         </div> */}
//       </div>
//     </div>
//   )
// }

function SectionValue({ content }) {
  return (
    <div className="section lg:mx-16 2xl:mx-10 border-2 border-red px-16  py-10 2xl:py-12 mb-12 shadow-sm bg-beige">
      <div className="top-margin-medium md:grid grid-cols-6 gap-x-10">
        {/* Price */}
        <div className="col-start-1 col-span-2">
          <h1 className="text-left  ">{content.valueSectionTitle}</h1>
          <h2 className="top-margin-sm xl:text-6xl 2xl:text-7xl text-center text-black">
            <StructuredText data={content.price} />
          </h2>
          <p className="text-center ">
            20% off early bird price, from 28th Feb to 6th March
          </p>
          <span className="top-margin-sm flex justify-around">
            <span>
              <h2 className="xl:text-5xl 2xl:text-6xl text-center leading-none text-black line-through decoration-red decoration-2 inline-block mt-3">
                264€
                {/* <span className="inline-block">*</span> */}
                {/* <sup className="inline-block text-red monotext">-20%</sup> */}
              </h2>
            </span>
            <h2 className="xl:text-5xl 2xl:text-6xl text-center leading-0 p-2 text-black border-2 border-red">
              210€
            </h2>
          </span>
        </div>

        <div className="col-start-3 col-span-4">
          <h1 className="text-left">{content.offerResumeSectionTitle}</h1>
          <ul className="top-margin-sm ">
            {content.including.map((block, i) => (
              <li key={i}>{block.offeringBulletPoint}</li>
            ))}
          </ul>
          <h1 className="top-margin-medium ">{content.paymentTermsTitle}</h1>
          <p className="top-margin-sm ">{content.paymentTerms}</p>
        </div>

        {/* <div className="col-start-6 col-span-1">
          <h1 className="text-cream">{content.paymentTermsTitle}</h1>
          <p className="top-margin-sm text-cream">{content.paymentTerms}</p>
        </div>
      */}
      </div>
      <div className="flex justify-center mt-6">
        <Button cta={content.cta2} url={content.cta2Email} />
      </div>
    </div>
  )
}

// function SectionValue({ content }) {
//   return (
//     <div className="section lg:mx-16 2xl:mx-10 bg-green px-16 2xl:px-0 xl:py-10 2xl:py-12 mb-12 shadow-sm">
//       <h1 className="text-center text-cream ">{content.valueSectionTitle}</h1>
//       <div className="section-center w-7/8 2xl:w-full">
//         <div className="self-center">
//           <h2 className="xl:text-6xl 2xl:text-7xl text-center text-cream">
//             <StructuredText data={content.price} />
//           </h2>
//           <p className="text-right text-cream">{content.priceSubtext}</p>
//         </div>
//       </div>

//       <div className="top-margin-sm flex items-start">
//         <div className="w-7/12">
//           <h1 className="text-left text-cream">
//             {content.offerResumeSectionTitle}
//           </h1>
//           <ul className=" text-cream">
//             {content.including.map((block, i) => (
//               <li key={i}>{block.offeringBulletPoint}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="justify-self-start">
//           <h1 className="text-cream">{content.paymentTermsTitle}</h1>
//           <p className="text-cream">{content.paymentTerms}</p>
//         </div>
//       </div>
//       <div className="flex justify-center mt-6">
//         <Button2 cta={content.cta2} url={content.cta2Email} />
//       </div>
//     </div>
//   )
// }

function Button2({ cta, url }) {
  return (
    <div className="mt-6 mb-3">
      <a
        href={`mailto:${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="z-20 inline-block bg-transparent hover:bg-red px-6 py-3 monotext text-sm 2xl:text-base no-underline text-cream  leading-none shadow-sm border border-cream  transition ease-in-out duration-300"
      >
        {cta}
      </a>
    </div>
  )
}

function SectionSoul1({ content }) {
  return (
    <div className="section section-center">
      <div className="md:flex justify-between ">
        <div className="order-2 flex justify-center items-center">
          <GatsbyImage
            image={content.horizontalImage.gatsbyImageData}
            alt={content.horizontalImage.alt}
            placeholder="blurred"
            className=""
          />
        </div>
        <span className="order-1 w-1/2">
          <h2 className="text-left">
            <StructuredText data={content.ifYourSoulIsCallingForIntro} />
          </h2>
          <p className="flex justify-center w-5/6 leading-tight">
            <StructuredText data={content.ifYourSoulIsCallingFor} />
          </p>
          <div className="">
            <Button cta={content.cta2} url={content.cta2Email} />
          </div>
        </span>
      </div>
    </div>
  )
}

// function SectionBanner() {
//   return (
//     <div className="mt-16 min-h-screen w-full bg-wood bg-center bg-contain"></div>
//   )
// }

// function SectionSoul2({ content }) {
//   return (
//     <div className="section flex justify-between bg-beige p-12">
//       <div className="image-div w-1/2">
//         <GatsbyImage
//           image={content.horizontalImage.gatsbyImageData}
//           alt={content.horizontalImage.alt}
//           placeholder="blurred"
//           className=""
//         />
//       </div>
//       <div className="ml-16 w-1/2 ">
//         <h2 className="z-10 text-red  text-left">{content.soulSectionTitle}</h2>
//         <h3 className="mt-5 ">
//           <ul className="">
//             {content.soulBulletPoints.map((block, i) => (
//               <li className="mb-6" key={i}>
//                 {block.text}
//               </li>
//             ))}
//           </ul>
//         </h3>
//       </div>
//     </div>
//   )
// }

function SectionBios2({ content }) {
  console.log(content.women)
  return (
    <div className="section section-center" id="women">
      <h1 className="text-center">{content.womenSectionTitle}</h1>
      <div className="lg:mx-16 top-margin-medium">
        <div className="w-full">
          <div className="w-full h-full">
            {/* Main bios */}
            <h1 className="text-center ">The core team</h1>
            <div className="top-margin-sm grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
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
                                className="rounded-full  border border-green "
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
            <h1 className="text-center ">The council</h1>
            <div className="top-margin-sm grid grid-cols-2 md:grid-cols-6 gap-2">
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
                                />
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
    <div className="section flex flex-col justify-center items-center">
      <h1>{content.supportingSectionTitle}</h1>

      {content.supportedProject.map((block, i) => (
        <h2 className="block my-3" key={i}>
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
