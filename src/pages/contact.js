import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const Contact = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Header />
    <div className="flex justify-center">
      <div className="w-full lg:w-1/2 xl:w-8/12 px-4 min-h-screen ">
        <h1 className="text-center">Contact us</h1>
        <form className="relative top-margin-medium  ">
          <label>
            <div className="mt-12  flex justify-center">
              <input
                className="p-3 md:p-6 bg-transparent  border border-red focus:outline-none ring-white relative  w-3/4"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
          </label>

          <label className="">
            <div className="mt-12 flex justify-center">
              <input
                className=" p-3 md:p-6 bg-transparent  border border-red focus:outline-none ring-white relative  w-3/4"
                type="text"
                name="email"
                placeholder="Email address"
              />
            </div>
          </label>

          <label className="">
            {/* Message: */}
            <div className=" border border-red w-full  mt-12 h-full">
              <input
                className="accordion-item--open p-3 md:p-6 bg-transparent text-red  w-full  focus:outline-none ring-white"
                name="message"
                type="text"
                role="textbox"
                value="I want to sign up for Living as Sacred journey. Can you please send me payment details?"
              />
            </div>
          </label>
          <div className=" mt-12 border-red flex items-center justify-center ">
            <button
              className="bg-green hover:bg-red px-6 py-3 monotext 
              text-sm 2xl:text-base no-underline text-cream  leading-none shadow-sm  ring-white    transition ease-in-out duration-300"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default Contact