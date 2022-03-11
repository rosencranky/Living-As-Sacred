import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Form" />

    <div className="mt-32 md:mt-48 xl:mt-12 flex justify-center overflow-y-hidden ">
      <div className="w-full lg:w-1/2 xl:w-8/12 px-4 min-h-screen ">
        <h1 className="text-center top-margin-medium ">Contact us</h1>

        <form
          className=" top-margin-medium z-0 "
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <label>
            <div className="mt-12  flex justify-center">
              <input
                className="p-3 md:p-6 bg-beige  border border-darkgreen rounded-xl focus:outline-none ring-white   w-3/4"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
          </label>

          <label className="">
            <div className="mt-12 flex justify-center">
              <input
                className=" p-3 md:p-6 bg-beige  border border-darkgreen rounded-xl focus:outline-none ring-white   w-3/4"
                type="text"
                name="email"
                placeholder="Email address"
              />
            </div>
          </label>

          <label className="">
            {/* Message: */}
            <div className=" border border-darkgreen rounded-xl w-full  mt-12 h-full">
              <input
                className="h-24 p-3 md:p-6 bg-beige text-black rounded-xl  w-full  focus:outline-none ring-white"
                name="message"
                type="text"
                role="textbox"
                // value="I want to sign up for Living as Sacred journey. Can you please send me payment details?"
              />
            </div>
          </label>
          <div className=" mt-12 border-red rounded-xl  flex items-center justify-center ">
            <button
              className="border border-green rounded-2xl bg-green hover:bg-beige  text-black px-6 py-3 monotext 
              text-sm 2xl:text-base no-underline  leading-none shadow-sm  ring-white    transition ease-in-out duration-300"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Contact
