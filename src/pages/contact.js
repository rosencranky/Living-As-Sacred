import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="flex w-full justify-center h-90 items-center overflow-y-hidden   ">
        <div className=" px-4 w-full flex flex-col justify-center items-center">
          <h1 className="text-center top-margin-lg section-title">Contact us</h1>
          <p className="top-margin-medium text-center">
          Please send us a message to sign up for the journey.<br/>
          You can pay the full amount, in 2 or 3 installments.
          </p>
          <div className="w-5/6 lg:w-[38.44%]">
          <form
            className=" top-margin-medium z-0 "
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="/contact-success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <label>
              <div className="mt-12  flex justify-center">
                <input
                  className="p-3 md:p-6 bg-beige h-12 border border-khaki rounded-xl focus:outline-none ring-white w-full placeholder-rust"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            </label>

            <label className="">
              <div className="mt-12 flex justify-center">
                <input
                  className=" p-3 md:p-6 bg-beige h-12 border border-khaki rounded-xl focus:outline-none ring-white w-full placeholder-rust"
                  type="text"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
            </label>

            <label className="">
              {/* Message: */}
              <div className=" border border-khaki rounded-xl w-full  mt-12 h-full">
                <textarea
                  className="h-40 p-3 md:p-6  bg-beige text-black rounded-xl  w-full  focus:outline-none outline-none ring-none -mb-1 placeholder-rust"
                  name="message"
                  type="text"
                  // role="textbox"
                  placeholder="Write your message..."
                  required
                />
              </div>
            </label>
            <div className=" mt-12 border-red rounded-xl flex items-center justify-center ">
              <button
                className="border border-khaki bg-khaki rounded-3xl bg-green hover:bg-beige hover:border-beige text-black px-8 py-3 monotext 
              text-sm 2xl:text-base no-underline  leading-none shadow-sm  ring-white transition ease-in-out duration-300"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
